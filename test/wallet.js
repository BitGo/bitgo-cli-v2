const nockUtils = require('./nockUtils');
const intercept = require('intercept-stdout');
const nock = require('nock');
const Promise = require('bluebird');
const co = Promise.coroutine;
require('should');
const bg = require('../src/bgcl');
const cl = new bg();
const Session = require('../src/session');


describe('Wallets:', function() {
  let stdout = '';

  // capture standard output
  intercept(function(txt) {
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
    yield cl.run(['wallet', 'get', nockUtils.walletId]);

  }));

  beforeEach(function () {
    stdout = '';
  });

  after(function () {
    nock.cleanAll();
  });

  it('should fail if you do not pass in the wallet id', co(function *() {
    yield cl.run(['wallet', 'get']);

    stdout.should.startWith('Error: Missing parameter: id');
  }));

  it('should print out the wallet info', co(function *() {
    yield cl.run(['wallet', 'get', nockUtils.walletId]);

    stdout.should.equal(nockUtils.getWalletOutput);
  }));

  it('should print out the wallet transfer list', co(function *() {
    nock(nockUtils.baseUrl)
    .get('/api/v2/tbtc/wallet/' + nockUtils.walletId + '/transfer')
    .query({ limit: 5 })
    .reply(200, nockUtils.getTransferListResponse);

    yield cl.run(['wallet', 'transferlist', '-l', '5']);

    stdout.should.equal(nockUtils.getTransferListOutput);
  }));

  it('should print out information on the given transfer id', co(function *() {
    nock(nockUtils.baseUrl)
    .get('/api/v2/tbtc/wallet/' + nockUtils.walletId + '/transfer/' + nockUtils.transferId)
    .reply(200, nockUtils.getTransferIdResponse);

    yield cl.run(['wallet', 'transfer', nockUtils.transferId]);

    stdout.should.equal(nockUtils.getTransferIdOutput);
  }));

  it('should print out the wallet unspent list', co(function *() {
    nock(nockUtils.baseUrl)
    .get('/api/v2/tbtc/wallet/' + nockUtils.walletId + '/unspents')
    .query({ limit: 1 })
    .reply(200, nockUtils.getUnspentsResponse);

    yield cl.run(['wallet', 'unspents', '-l', '1']);

    stdout.should.equal(nockUtils.getUnspentsOutput);
  }));

  it('should say it unlocked the session', co(function *() {
    nock(nockUtils.baseUrl)
    .post('/api/v1/user/unlock', { otp: '0000000' })
    .reply(200, {});

    yield cl.run(['wallet', 'unlock', '0000000']);

    stdout.should.equal('Unlocked session\n');
  }));

  it('should say it locked the session', co(function *() {
    nock(nockUtils.baseUrl)
    .post('/api/v1/user/lock')
    .reply(200, {});

    yield cl.run(['wallet', 'lock']);

    stdout.should.equal('Locked session\n');
  }));

  it('should freeze a wallet', co(function *() {
    nock(nockUtils.baseUrl)
    .post('/api/v2/tbtc/wallet/' + nockUtils.walletId + '/freeze')
    .reply(200, nockUtils.walletFreeseResponse);

    yield cl.run(['wallet', 'freeze', '-d', '2', '--confirm']);

    stdout.should.equal(nockUtils.walletFreezeOutput);
  }));

});

