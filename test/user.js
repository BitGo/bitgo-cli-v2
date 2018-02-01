const nockUtils = require('./nockUtils');
const intercept = require('intercept-stdout');
const nock = require('nock');
const Promise = require('bluebird');
const co = Promise.coroutine;
require('should');
const bg = require('../src/bgcl');
const cl = new bg();
const Session = require('../src/session');


describe('User:', function() {
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

    nock(nockUtils.baseUrl)
      .persist()
      .get('/api/v2/tbtc/wallet/' + nockUtils.walletId)
      .reply(200, nockUtils.getWalletResponse);

    nock(nockUtils.baseUrl)
      .post('/api/v1/user/login', { email: 'tester@bitgo.com', password: '275e3c4197b13c5439eaf20fb2de7899b3fbc164499af287110fa7058709127a', forceSMS: false, otp: '0000000' })
      .reply(200, nockUtils.getLoginResponse);

    yield cl.run(['login', '-u', 'tester@bitgo.com', '-p', 'fakepass', '-o', '0000000']);
    yield cl.run(['coin', 'tbtc']);

  }));

  beforeEach(function () {
    stdout = '';
  });

  after(function () {
    nock.cleanAll();
  });

  it('should print out the id and username of the user', co(function *() {
    yield cl.run(['user', 'get']);

    stdout.should.equal(nockUtils.userGetOutput);
  }));

  it('should print out the user wallet list', co(function *() {
    nock(nockUtils.baseUrl)
    .get('/api/v2/tbtc/wallet')
    .query({ limit: 3 })
    .reply(200, nockUtils.walletListResponse);

    yield cl.run(['user', 'wallets', '-l', '3']);

    stdout.should.equal(nockUtils.walletListOutput);
  }));


});
