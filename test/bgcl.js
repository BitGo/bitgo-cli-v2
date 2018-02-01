const nockUtils = require('./nockUtils');
const intercept = require('intercept-stdout');
const nock = require('nock');
const Promise = require('bluebird');
const co = Promise.coroutine;
require('should');
const bg = require('../src/bgcl');
const cl = new bg();
const Session = require('../src/session');


describe('Base Functions:', function() {
  let stdout = '';

  // capture standard output
  intercept(function (txt) {
    stdout += txt;
  });

  before(co(function *() {
    process.env.BITGO_ENV = 'mock';

    const session = new Session(null);
    session.clear(process.env.BITGO_ENV);

    nock(nockUtils.baseUrl)
    .persist()
    .get('/api/v1/client/constants')
    .reply(200, nockUtils.clientConstantsResponse);

    nock(nockUtils.baseUrl)
    .persist()
    .get('/api/v1/user/me')
    .reply(200, nockUtils.getLoginResponse);

  }));

  beforeEach(function () {
    stdout = '';
  });

  after(function () {
    nock.cleanAll();
  });

  it('should fail if you select an invalid coin', co(function *() {
    yield cl.run(['coin', 'potatocoin']);

    stdout.should.startWith('Error: potatocoin is an invalid cointype for selected environment -> mock');
  }));

  it('should fail if you select a coin in the wrong env (not testnet for mock)', co(function *() {
    yield cl.run(['coin', 'btc']);

    stdout.should.startWith('Error: btc is an invalid cointype for selected environment -> mock');
  }));

  it('should succeed to set the session coin', co(function *() {
    yield cl.run(['coin', 'tltc']);

    stdout.should.equal('Session coin set to: tltc\n');
  }));

  it('should print that the user logged in', co(function *() {
    nock(nockUtils.baseUrl)
    .post('/api/v1/user/login', { email: 'tester@bitgo.com', password: '275e3c4197b13c5439eaf20fb2de7899b3fbc164499af287110fa7058709127a', forceSMS: false, otp: '0000000' })
    .reply(200, nockUtils.getLoginResponse);

    yield cl.run(['login', '-u', 'tester@bitgo.com', '-p', 'fakepass', '-o', '0000000']);

    stdout.should.equal('Logged in as tester@bitgo.com from 127.0.0.1\n');
  }));

  it('should print that the user logged out', co(function *() {
    nock(nockUtils.baseUrl)
    .get('/api/v1/user/logout')
    .reply(200, {});

    nock(nockUtils.baseUrl)
    .get('/api/v1/user/session')
    .reply(200, {});

    yield cl.run(['logout']);

    stdout.should.equal('Logged out\n');
  }));
});
