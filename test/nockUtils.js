exports.baseUrl = 'https://bitgo.fakeurl';
exports.walletId = '5a1341e7c8421dc90710673b3166bbd5';
exports.address = '2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez';

exports.clientConstantsResponse = {
  ttl: 3600,
  constants: {
    maxFee: 100000000,
    maxFeeRate: 10890,
    minFeeRate: 0,
    minInstantFeeRate: -1000,
    fallbackFeeRate: 1014,
    minOutputSize: 2730,
    defaultGasPrice: 30000000000000,
    bitgoEthAddress: '0x0f47ea803926926f299b7f1afc8460888d850f47',
    enableSegwit: true,
    eth: {
      tokens: [
        {
          type: 'terc',
          tokenContractAddress: '0x945ac907cf021a6bcd07852bb3b8c087051706a9',
          decimalPlaces: 0
        },
        {
          type: 'tbst',
          tokenContractAddress: '0xe5cdf77835ca2095881dd0803a77e844c87483cd',
          decimalPlaces: 0
        }
      ]
    }
  }
};

exports.getWalletResponse = {
  id: '5a1341e7c8421dc90710673b3166bbd5',
  users: [
    {
      user: '543c11ed356d00cb7600000b98794503',
      permissions: [
        'admin',
        'view',
        'spend'
      ]
    }
  ],
  coin: 'tbtc',
  label: 'Test Wallet 2 Unspents',
  m: 2,
  n: 3,
  keys: [
    '5a1341cf5f98bed007d7a41aa60a8cfa',
    '5a1341d05f98bed007d7a43effc3e391',
    '5a1341d05f98bed007d7a4422e36b919'
  ],
  tags: [
    '5a1341e7c8421dc90710673b3166bbd5'
  ],
  disableTransactionNotifications: false,
  freeze: {},
  deleted: false,
  approvalsRequired: 1,
  isCold: false,
  coinSpecific: {},
  admin: {
    policy: {
      id: '5a1341e7c8421dc90710673ce48469ce',
      version: 0,
      date: '2017-11-20T20:58:15.438Z',
      rules: []
    }
  },
  clientFlags: [],
  balance: 105555095,
  confirmedBalance: 105555095,
  spendableBalance: 105555095,
  balanceString: '105555095',
  confirmedBalanceString: '105555095',
  spendableBalanceString: '105555095',
  receiveAddress: {
    id: '5a1db108e5bacac90761dc5a558e3dba',
    address: '2NDkmWQbCiQAsx6JY9NTUqDBpDXZoTNEDqY',
    chain: 0,
    index: 3,
    coin: 'tbtc',
    wallet: '5a1341e7c8421dc90710673b3166bbd5',
    coinSpecific: {
      redeemScript: '522103d3a60b61368998bb6c474225978233a5c075c3fb30f97746570df4fd77afcb86210226eb132e0133090c8e1ae71d8091308612915954435af62fd815ac5b34c2f2ca2103253c96cb4528acdd8ee0feb9ceef152509ea42858ee7b2065369b9857c0ce38653ae'
    }
  },
  pendingApprovals: []
};

exports.getWalletOutput =
  '\nWallet:             5a1341e7c8421dc90710673b3166bbd5\n' +
  'Label:              Test Wallet 2 Unspents\n' +
  'Coin:               TBTC\n' +
  'Balance:            1.05555095 TBTC\n' +
  'Confirmed:          1.05555095 TBTC\n' +
  'Spendable:          1.05555095 TBTC\n';

exports.getFeeResponse = {
  feePerKb: 1009,
  cpfpFeePerKb: 1009,
  numBlocks: 10,
  confidence: 85,
  multiplier: 1,
  feeByBlockTarget: {
    2: 1009
  }
};

exports.getFeeOutput = 'feePerKb:           1009\n';

exports.walletFreeseResponse = {
  time: '2018-01-26T01:32:31.753Z',
  expires: '2018-01-26T02:32:31.753Z'
};

exports.walletFreezeOutput =
  '\n' +
  'Please confirm you wish to freeze wallet \'Test Wallet 2 Unspents\' for 2 seconds.\n' +
  'BitGo will not sign any transactions on this wallet until the freeze expires.\n' +
  'Wallet frozen until 2018-01-26T02:32:31.753Z\n';

// wallet transferlist -l 5
exports.getTransferListResponse = {
  coin: 'tbtc',
  transfers: [
    {
      id: '5a56cd02fecb5d7207b23085a48e7d5b',
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      txid: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61',
      height: 1258383,
      date: '2018-01-11T02:50:17.515Z',
      confirmations: 246,
      value: -2955,
      valueString: '-2955',
      feeString: '2955',
      payGoFee: 0,
      payGoFeeString: '0',
      usd: -0.42734530350000005,
      usdRate: 14461.77,
      state: 'confirmed',
      tags: [
        '5a1341e7c8421dc90710673b3166bbd5'
      ],
      history: [
        {
          date: '2018-01-11T02:50:17.515Z',
          action: 'confirmed'
        },
        {
          date: '2018-01-11T02:33:42.855Z',
          action: 'unconfirmed'
        },
        {
          date: '2018-01-11T02:33:38.992Z',
          action: 'signed'
        },
        {
          date: '2018-01-11T02:33:38.620Z',
          action: 'created'
        }
      ],
      vSize: 985,
      nSegwitInputs: 0,
      entries: [
        {
          address: '2N25rgq29C9w5dHPGSH9PmCj8vY98YcjaFU',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCrJASbCwVkM1qF8dRrUNrAzCUkGjwLMuK',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NAqAswGG7uDXh4zAg69FAMMLQ6CUBVKD9g',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N6vT5MNuDAZPxdk1zjrf5V8P1zg7pGPqpN',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N214RVd36gZPSRrdPN77BRpGMsZBaHzrK2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -105558050,
          valueString: '-105558050',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MvKEuBLqwmnTg6yc7o5Ns4WD7AFF7SJgka',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2Mvhq9zeQkzD38Az7guA9xDEis3ozTjN3Wm',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MvcLYhzxL5mGaSKtsdduLqtLMeHchsAuW3',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MtbuKdfAdwWLqwQLs2xYHnMNNktL5nfqY4',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NEBGCmZQvdM2jHPAjsaot3U743rsbiMu1z',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N9Vcfrv6JEEh7gGPyGo6y11R9Sdr8otFZL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277754,
          valueString: '5277754',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NDtiF5Ht2jTES2T8uz1DtLZ1JXx9URdQyB',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NG8ZNeFj6mKzdaNpLPaHusvjbMmm1ZFujL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N82aYECxPPSuUB9dZgapirf1WcpGL9Yhnk',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCBhnqPCBbYu4rRuN9ptva3a4D8G37H7pF',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277754,
          valueString: '5277754',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NBFQV7n77qAgLedduNCKASkf3VRHRj8iHm',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MuwyZpQRbPmxnLyEiQU1GXdJ3Mua9KmS5F',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N21M4yPYmweuYTTk3hkx3nUpiiwv5LLkPs',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277754,
          valueString: '5277754',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MsW9ngzXxczz5u4xaojonERbSUDTatukN8',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277755,
          valueString: '5277755',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N5oXCSYWJMTKj29kykqeWSDsnEnKKtHcs2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277754,
          valueString: '5277754',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MuenVBcb6S7Vi6tWCdjPQ2X7ibA9QFT7vy',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5277754,
          valueString: '5277754',
          isChange: true,
          isPayGo: false
        }
      ],
      confirmedTime: '2018-01-11T02:50:17.515Z',
      unconfirmedTime: '2018-01-11T02:33:42.855Z',
      signedTime: '2018-01-11T02:33:38.992Z',
      createdTime: '2018-01-11T02:33:38.620Z',
      outputs: [
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:0',
          address: '2Mvhq9zeQkzD38Az7guA9xDEis3ozTjN3Wm',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1757,
          redeemScript: '52210345100d4a3b3b8211292a6723d1ab5e9514f4b972d456e01f3e2326c56e12e33d21022e4002919ec17266bd05b261fdc518e2c2648485dd650718bb75047ae986a58d210398c02c71b176f07bec0bbf673cb93329f9f7827cc104ccaf44e5f1fb0c60004c53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:1',
          address: '2MuenVBcb6S7Vi6tWCdjPQ2X7ibA9QFT7vy',
          value: 5277754,
          valueString: '5277754',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1760,
          redeemScript: '52210295cdbf48497d40fa2b1f147b6eb216e05c7dfaf982a4c2d1df4aeccecf65531a210343bb038357c31954305ccbf1f3cf36ec1dc1f7d428ebd32d23cdc1b89f513d252103c2a754e144f33c20a59aee3a36e10bbe6123a09b371bd8848f6db5ae9c36202153ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:2',
          address: '2NG8ZNeFj6mKzdaNpLPaHusvjbMmm1ZFujL',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1756,
          redeemScript: '522102bc0ef23f95bcd19de8f4bcbdb3ba8958b7f5c798f0e9404f71f783196c091cbe2102b484c500c6010bcc948ee801d06e2d6d903fcc81110c90e6344b2ba93533afe12103d10db86ba3260a12482f3635a7d28f785752e1626308d59cf98cdd6a4c8211ac53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:3',
          address: '2NCrJASbCwVkM1qF8dRrUNrAzCUkGjwLMuK',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1743,
          redeemScript: '522102c7358186a6d467c950d82d3affe4095698732daea0125ee20d73bce7f46e516421034b6583704cdb6e3e11ec285536c37c817b7fc9ea7235167dd31520bd9ee33dc521036c28782eccc3114aab47bc5c5eb3c359654be20a8f63681c08adca76283c38f153ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:4',
          address: '2MuwyZpQRbPmxnLyEiQU1GXdJ3Mua9KmS5F',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1747,
          redeemScript: '52210219acf2453cda09fe4b5af52b554a77e54499f0b159ed0dbcba69850729f0c78921024eaadc9814d94a6fbd503b2ba2c56b012b8b37475ccd5b1fa0004bd770885f86210222d3948867956ac67f0dbe7b24620692417cf6f21159f5921b60460a2fb88ff553ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:5',
          address: '2MsW9ngzXxczz5u4xaojonERbSUDTatukN8',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1748,
          redeemScript: '522102b8a265e8e5e0f25190fff2ec78256cfe96a2fded5fb665d0e65b06c5d528aaa721029a6d3a253e5ec2d824dbfe74773aaf5234c3ea866c01c66a6566d20a1ed60a002103a10c6293143dd431f7fc7b156d593e4f3e34577906b7fb0928e895481bd48e2053ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:6',
          address: '2NCBhnqPCBbYu4rRuN9ptva3a4D8G37H7pF',
          value: 5277754,
          valueString: '5277754',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1759,
          redeemScript: '52210218df35a333ca251add3eddf1022362594d7ff4f73567faed44ded75e1ee998452103a6f71e6622b663ce8528b6bb3d733e4810516039973797791fb1f87611ab1f8d2103925a51f438b810bed46cfc6471117d01222bacde86fdada9a3b244a18557255e53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:7',
          address: '2N82aYECxPPSuUB9dZgapirf1WcpGL9Yhnk',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1752,
          redeemScript: '5221035e3ebb0043b837abe5dc6fa9cd8dddd4614944e0d14edd974105ab96b39e55e42102eff960b5b8984b9cfc1fc57692d074405bb8abe11609b6b3979318f28082e9f22103a8f9ce9a7eb9ac97a768b7dddc1dfcd9e3f14d95c0cfe2f55aac166edf09a12753ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:8',
          address: '2MvcLYhzxL5mGaSKtsdduLqtLMeHchsAuW3',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1749,
          redeemScript: '52210204fcda6721e14fc65f63acbbf05ac0337cdae7e9d5a03228a70af6140cc2c50a21026cec0922d04e8323daa32be941642771d8748be7bfb183303dfc8c1c82fe763621028729dd714855f689461459329234b1f74968636715fb2e61b38ce1b3dbce891353ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:9',
          address: '2N6vT5MNuDAZPxdk1zjrf5V8P1zg7pGPqpN',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1744,
          redeemScript: '522102a043984512530f5f452ffb20d48d232ac2e165e35f0cc8f4f38798bd8071badb2102d32b1c622a8ec6eed7a452f3fea1e2f827ed7289ccf934939f9a541c60939a7d2102f6acec867d07949affef844f7aa0d8e609b6d24b5afa84d1128925e4956f47db53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:10',
          address: '2NBFQV7n77qAgLedduNCKASkf3VRHRj8iHm',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1751,
          redeemScript: '522103b5399aa8cbfabd53cb91f246c260efb29cbf5710c03f2912178a721b848118a4210202b45d13d445b63aacd35c5d7539b34cf21e3617016bfeb5303e6c19f3c3459621034ed30c658f4c498f1a647ac703143d5ddbe4c45aecf1319f2ef5cc169f14ce7353ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:11',
          address: '2NEBGCmZQvdM2jHPAjsaot3U743rsbiMu1z',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1746,
          redeemScript: '522103a45ec5da81fbf428bbdeeafdf48693db1f88a8cc03047a5f42f3370e41a47cf421030fc5fd191c4bcfdcc0be1fecefe1aae5cc05ad36a965eacc74c80627c1f1781b21029e8a5af496e7e0ec986c9c83d094e7665802ebab5dbb0c693f4231376d129cad53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:12',
          address: '2N25rgq29C9w5dHPGSH9PmCj8vY98YcjaFU',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1754,
          redeemScript: '52210325dddfe084e6f516a342fa87988dcfe6a2e688f6206b6091820a2374be444ed82102581c9ca4a83fce7ed1f30595928c969f206e09558ff1457ca86ed36ac065e80c2103b284f23bbc5357f56a3ba24969221d605c11c586dac328a5cb1861d21038018b53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:13',
          address: '2N9Vcfrv6JEEh7gGPyGo6y11R9Sdr8otFZL',
          value: 5277754,
          valueString: '5277754',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1762,
          redeemScript: '522103bc9692e0800cc4296e7658147f135575b0faf0ac5c5a86ac238476858ad7b0e8210338863c43c373807ca4d0ea7858973c5ad64f132d8a0b2554af98ac2a89cea5052103bf826e08cc8fff60f73bd305cf7868ad6c2b5a5212a5ab489a9123b8a7a9cb1253ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:14',
          address: '2NAqAswGG7uDXh4zAg69FAMMLQ6CUBVKD9g',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1750,
          redeemScript: '522102a42055e70362de6a3789d4f9fabbd0928ba65f56726595674fa9c635435c1b7321021f391070e0d364fa16000b6fe494a2130b029c1cc4ce89bb2cba529bfe31941d2102105f9955d13b1c615f847cb9cbd65e329f5f7c64534e4d6f5195ded9b57577c553ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:15',
          address: '2N5oXCSYWJMTKj29kykqeWSDsnEnKKtHcs2',
          value: 5277754,
          valueString: '5277754',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1761,
          redeemScript: '522103854c08e18a84f1100306f9906b8715d225c05e555a1d72711577ce7e6d26bf2c2103cca7cf560eab68202fe48dd7c1b36bf1c6e65be3b9bab763fe547ce80ebc49be2103d37805e86d4747908f9d04b9bb7770cb466fd7c6e2d287149a0279a07e7ccc3653ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:16',
          address: '2N21M4yPYmweuYTTk3hkx3nUpiiwv5LLkPs',
          value: 5277754,
          valueString: '5277754',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1758,
          redeemScript: '522102b0ca75a5d464ee24a15ec3c38c9d5e18f6e7856422bd58eec58c09aef06e89f52103859ea2ecc8e1d5ddb225aa9132834927cc02411a59d3cbe246ab71915bf12f0321027453807c528722b7174de3e056ffa958bfd5fd0fc10debdf49f90c09ddb7b94f53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:17',
          address: '2MvKEuBLqwmnTg6yc7o5Ns4WD7AFF7SJgka',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1755,
          redeemScript: '522103f614f15018f4b188dadf97aa4277c153bf435297fc75be95b78b6fe9473b97372103b289254cabef388f81e4bd8c4c492fbc984378ccd06105e638c2b994c39be8f12102d09411fc89f1e03bf2bff48585d88087d59d2a8c69e40991d06dcd068c31987553ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:18',
          address: '2NDtiF5Ht2jTES2T8uz1DtLZ1JXx9URdQyB',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1745,
          redeemScript: '52210384dde04707dbd6ce1611d214a45aa1bc608af06ba4feb4264c074766e2320f2921026a3c9f966aff445e06f1fcb61c89e6c9a014be61829746afb8d37e4523ba676e21022720dabd0a02c0bb1e6507dd9e271613ee0ba57b6f919dd8b1056c1cc2f3922c53ae',
          isSegwit: false
        },
        {
          id: '644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61:19',
          address: '2MtbuKdfAdwWLqwQLs2xYHnMNNktL5nfqY4',
          value: 5277755,
          valueString: '5277755',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1753,
          redeemScript: '522103ed051f29574b012ca6cef0d526400ca93018f35288cd73aa395190bb0a0461ff2103d8f93900d0a8cb558f740c1f58563fd87c73db975184d271bcbbebc58aa217ef2103f9ddc404735579b3942d4896eecb4a1fec6927cc598815f56072732b1b11ad2953ae',
          isSegwit: false
        }
      ],
      inputs: [
        {
          id: '7648d1efb49a5a135f098e68bf176645da2f5eb636134fcec8f436210c0aa46e:0',
          address: '2N214RVd36gZPSRrdPN77BRpGMsZBaHzrK2',
          value: 105558050,
          valueString: '105558050',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1742,
          redeemScript: '5221032530f5861ff248a7259e5e1c08375fe6dec9aa7577a5d1459e50a2224c4ea8712102b759caca102da46442910ffed0d08dac49ffd80a3290db75fe934968480778532102c8cc22295b6fa7c0e07f3fc8d82798365c993acc35842e869f16d7342df4acb653ae',
          isSegwit: false
        }
      ]
    },
    {
      id: '5a56ccf18f90ac3f074122b06a483b76',
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      txid: '7648d1efb49a5a135f098e68bf176645da2f5eb636134fcec8f436210c0aa46e',
      height: 1258383,
      date: '2018-01-11T02:50:17.605Z',
      confirmations: 246,
      value: -17832,
      valueString: '-17832',
      feeString: '17832',
      payGoFee: 0,
      payGoFeeString: '0',
      usd: -2.5791241872,
      usdRate: 14463.46,
      state: 'confirmed',
      tags: [
        '5a1341e7c8421dc90710673b3166bbd5'
      ],
      history: [
        {
          date: '2018-01-11T02:50:17.605Z',
          action: 'confirmed'
        },
        {
          date: '2018-01-11T02:33:27.738Z',
          action: 'unconfirmed'
        },
        {
          date: '2018-01-11T02:33:23.468Z',
          action: 'signed'
        },
        {
          date: '2018-01-11T02:33:21.028Z',
          action: 'created'
        }
      ],
      vSize: 5944,
      nSegwitInputs: 0,
      entries: [
        {
          address: '2N8vBQUofbNkSHUvLujKgZx7tMvi3aKXDyN',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N3GyCS6EwqJ2Gutar8Xp5QDHUGSk76CRjN',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NBAS1LQAYhhohuXhJfizuurK8VFgBpo3KR',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2Mvz4PqLLApWw8mKrhFWUQzX2wYTCFfZ1sY',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N214RVd36gZPSRrdPN77BRpGMsZBaHzrK2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 105558050,
          valueString: '105558050',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCDPXuCD4RtoTJxygtGspAX8zmuTUGmcCL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278795,
          valueString: '-5278795',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NAaUvMBHgb1YVb52Sx7ieLkLc8uDYuWgHM',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N9xqdXXYcjL6oHzuqqLGRCouiu8tX5doQ4',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N42hVtN2QtApGH8GaChp241oEwPwFVKTHy',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N3BomFnYDBfNAwisPZtmnP4yrb3aVvMuFP',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MuvifQydaHHWJUpDuBYAaHMSKnbELqs4Ve',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N5RmV2bAX2fmh1pbRmWCdpE11ZM2Ki98M7',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278795,
          valueString: '-5278795',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2Msx8vwATF7qz5WGPce4cb2mk5sGFo9YpR1',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N8deKGfwvQhzPcqUNhbf9W8yzth6MsXMwE',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NCmo9bwJwnfLi4FVwTL2RamnNzPrzYbHMG',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NA9zfPJo1BPcw6B1dLQDLUeFConBFyH9Ts',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MyuLvJ4eUi93GTDruD6pstiBeRV24wudfn',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N5wTbb9En4sWFGUrvXTWhBLrqdt3EdjY3Y',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NBTAZN5e9cZuWuS2NWfSC99kXyQMBfPqLp',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MzCH13L3e95bKnudcQuqkDprKWvNThkcWS',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N7mc4wBH67ziE8Au8Szq42hu9za8P4yF4x',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5278794,
          valueString: '-5278794',
          isChange: false,
          isPayGo: false
        }
      ],
      confirmedTime: '2018-01-11T02:50:17.605Z',
      unconfirmedTime: '2018-01-11T02:33:27.738Z',
      signedTime: '2018-01-11T02:33:23.468Z',
      createdTime: '2018-01-11T02:33:21.028Z',
      outputs: [
        {
          id: '7648d1efb49a5a135f098e68bf176645da2f5eb636134fcec8f436210c0aa46e:0',
          address: '2N214RVd36gZPSRrdPN77BRpGMsZBaHzrK2',
          value: 105558050,
          valueString: '105558050',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1742,
          redeemScript: '5221032530f5861ff248a7259e5e1c08375fe6dec9aa7577a5d1459e50a2224c4ea8712102b759caca102da46442910ffed0d08dac49ffd80a3290db75fe934968480778532102c8cc22295b6fa7c0e07f3fc8d82798365c993acc35842e869f16d7342df4acb653ae',
          isSegwit: false
        }
      ],
      inputs: [
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:0',
          address: '2NBAS1LQAYhhohuXhJfizuurK8VFgBpo3KR',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1732,
          redeemScript: '5221025159202baf34cb321544aa54b9e429ef4f6ab7e1054212dd37facdee4908100d21038dd991b2cbfc8ed35668bced7ab22bd69d9efdf28a382ba8a436d25d1edbef542103b7e84aec13666f878d2f65ac1cf2c92693827a250b36e28a6dcc16668e3f2c5a53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:1',
          address: '2N8vBQUofbNkSHUvLujKgZx7tMvi3aKXDyN',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1734,
          redeemScript: '522103afc371bcc603209201370b375f135cdbfb9effdaab1e94c574aefa407aa1b32821025b3db699fc8c8f677d2c984a7e72916aa31dc45972893f38236c455b3e798dcd210348e79f11f44eba2aaa52b00107a3dc1e3ff067772bb10366a0406399807ae57053ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:10',
          address: '2N5wTbb9En4sWFGUrvXTWhBLrqdt3EdjY3Y',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1730,
          redeemScript: '52210357b97b89d6c8a70891d84ff443929086851e4c1f3a52c2efd18eacdc203acb092103226c2b41ea486ec36dcf95030c01b9964f58ded0c18c727e68632f6813f15d0921036490ebd490a2ce6ace9c0a9c84bc418486ab7f23b8f1b034ea234e87a0c31cf753ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:11',
          address: '2NBTAZN5e9cZuWuS2NWfSC99kXyQMBfPqLp',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1725,
          redeemScript: '522102be24411e0997426c3585c340ddd903430db4fdbed1a21471a74293810cda66d9210267defacc5affa2b75cb7ba3219afbfc10a237ebecf00d6f7cc33a4caf3667c9321028ce4f8866a3bdb4543607d78fdeb70bd4cda0384342c014fec06aa62977649ea53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:12',
          address: '2Msx8vwATF7qz5WGPce4cb2mk5sGFo9YpR1',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1728,
          redeemScript: '5221035bda58158a417e3031ab7504c468dd33c719c9f5a02b95bbca387c7cc510d5e9210391b8dcc1f66299976aa99ad1a6593b70315b70e44718bfe0c601b3b9153561d2210217857bcb2bc9d9118e1f691ebc915f3ae3673e4578509b2ea83cbcb802b1947d53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:13',
          address: '2NCDPXuCD4RtoTJxygtGspAX8zmuTUGmcCL',
          value: 5278795,
          valueString: '5278795',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1723,
          redeemScript: '522102f20506a49c94a09fa47d21ffd00c898bc49cf4bfb79d60c53d8053aa103cec24210398d526da29c426bd8b47ae404febe6d1eb706cf9a9f68da16d29aa1de14695c421030102407fd59cc5736bd36eea98c3e80e06cff58c31a8d1f4cbf8a315baac28f753ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:14',
          address: '2NAaUvMBHgb1YVb52Sx7ieLkLc8uDYuWgHM',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1724,
          redeemScript: '522103d34eccb4976bc790b643a5ac72f2def2ed251f870ba310fd80f91841de6f0e422103b799b97d4da0c5e5c8f8cd2eece381a97365a8f7d79448e710042b74539f5535210268ead3577606ede939e9e8fb4661c53cbc4b95bd022d3d4c9e644c149371aa0953ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:15',
          address: '2MuvifQydaHHWJUpDuBYAaHMSKnbELqs4Ve',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1740,
          redeemScript: '522103fd3309209a6e67b531aae807ff6b3a4337d26b035d250da10691e061ab835a0e21025b65544c2a437ff5d61567c9f3936a6a6e6950c9ede8d8ddab3241a35445755721034a6210766b1c83aeefb9bb061991964273c71d4c940581cf477bf838b94dad5f53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:16',
          address: '2MzCH13L3e95bKnudcQuqkDprKWvNThkcWS',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1735,
          redeemScript: '522102a4bf086fbf1241eef1c7549371b284bf9f61410b8bc4772bd81e870430c4ffcd21032ba75b769dd93af6c19e75fac7e97b252f4f6397a0dfef0f0800af1d2c8a04e82102df17bfca8c7d3aa7f0673ba6b68ea6140682e7aba31a8138149d307fe7a7af1a53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:17',
          address: '2N42hVtN2QtApGH8GaChp241oEwPwFVKTHy',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1729,
          redeemScript: '5221031eb6c64c71b63af13d410b1dd784d274aaef71f6ecd23bb31e35000fefd95f9321029db8d58cb3212ff87c9523df3388fb38f04383835475ece6cb63ec5e9ec7a588210278cfb3e45564d44e4ac7e97bc69d4fc3f7e53366d8467e4668c9d18b3d5b7c0453ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:18',
          address: '2N3GyCS6EwqJ2Gutar8Xp5QDHUGSk76CRjN',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1733,
          redeemScript: '522103053f0a2b1ff43008c8978805763dd2ee3896d5d610a1d1ca2624ee550d64b95a210274a1ea597ca09990f94d59628adf9b51bcc243c373728b1a2a13f172bcdda37d21023dc6097d35f419fb63f61ce743b5e59ff683c3783021b819470fde87f5793d0553ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:19',
          address: '2Mvz4PqLLApWw8mKrhFWUQzX2wYTCFfZ1sY',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1726,
          redeemScript: '52210270052c90f4d36b1fd058a6fcc39816e32499b5384485cb82267059381e959b6e2103458195002f857bdbdf8a9200da790162e00591d8589aef71dcf99f61fd0df0582102574b259f35880ead633bf443b4d4e4386a2053c0183b1d915b0009d0624e17f153ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:2',
          address: '2NA9zfPJo1BPcw6B1dLQDLUeFConBFyH9Ts',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1737,
          redeemScript: '52210276e595d890180916b9dd26e69ecc97746b54b077db6abf1710b27969aca8e3862103297c7c25a56219f03acd5e9c3363c363f394581011ad7503c7e83224dd0037f0210280a8db41a0d1ee878bfb88a784d896c0f3ef281cbc66296d8bae899f0b7803b153ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:3',
          address: '2MyuLvJ4eUi93GTDruD6pstiBeRV24wudfn',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1739,
          redeemScript: '522103da9d80a6777ffcdbb36f62ef1b629536cbca0ead4c5cbc6c00f95f9aa36e989e2103090a1f00ee1de0311198558acc144d7f7b3c9dc8d4e43ab63e2ea3b74a4bdf532102ae5656fa3a3e295f77e7ba4f42b6bbe944e59108ac3249c7c6e742040ae81db853ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:4',
          address: '2N7mc4wBH67ziE8Au8Szq42hu9za8P4yF4x',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1738,
          redeemScript: '522103dc6a779d44684504d1850c9afaf1fee05976719ab233dfd3ab300df5e757c1672103a96a4057bc67d6d392d671a97363a1c4fec9b40705771ef3cf3d75ef2e1ef2c6210233a02f4e9456e1827d5e42afeb7aeb1782c778ce32fcf8e23846975ed973ca4253ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:5',
          address: '2NCmo9bwJwnfLi4FVwTL2RamnNzPrzYbHMG',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1741,
          redeemScript: '5221038f05930e8134921b58625977ed94a5f8aa39442aef088d9157bbd5275845cc7c2102175cc68a9b51a2a0db24160ccc0a5bd7eeed4dea76823435cab9687bf1fb40b92103127b8a37fd12018a2528f670befc9dce562653a60e061ada9a1ce77fd1135c0c53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:6',
          address: '2N9xqdXXYcjL6oHzuqqLGRCouiu8tX5doQ4',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1731,
          redeemScript: '522102e4e8971fcb36bbb81b732a874d452a4d3b217a4a8273fbd9930be52ada5270f72102e7db37ff274689d59f34870c45655e85b7d3860d105b2d623e8baac8d2be132f2103ae659def5b0bac5f4f7d06a651da9bd9ea83fa26dbd68f9fb88f14b565f9c6e053ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:7',
          address: '2N8deKGfwvQhzPcqUNhbf9W8yzth6MsXMwE',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1727,
          redeemScript: '522102ca084d41082c52a2e18436ba9f1bbbe518eaab972d3a4afbd785bada394035b3210268f283768e0fba98ad501921c3770150b39220da5b24d72a7ffcc9a28893b50321028590579a9059d84ed7370681acc7e863ed5781394ade0bb383b0318dd204156353ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:8',
          address: '2N3BomFnYDBfNAwisPZtmnP4yrb3aVvMuFP',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1736,
          redeemScript: '522102da34e964aea61c60e57f1875a46ed4b4db1b97133bbcf85bdf980912d34c00e72102c634369feb348da80843c0c6441dd63f3bc50ebfd19af078d277fe068510e51c210204795930ae89cd25af9f8aa6083c7f9e05856b55186f95439521440f9769feb453ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:9',
          address: '2N5RmV2bAX2fmh1pbRmWCdpE11ZM2Ki98M7',
          value: 5278795,
          valueString: '5278795',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1722,
          redeemScript: '522102e925e78abb4611326844fd69fc370af428404e3f58d5ec7970fa95677eedb1eb21023172ae2818592a42a3e0b53d5e1c6ebb5c86bd1eb374d902431027ffdce91b2c21039e36dfb01ac218ff3855f49edb5045fc0782dbfdc88319db55020a0bfa8e05db53ae',
          isSegwit: false
        }
      ]
    },
    {
      id: '5a5586febd312de107d466ca3decedee',
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      txid: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5',
      height: 1258159,
      date: '2018-01-10T03:27:02.233Z',
      confirmations: 470,
      value: -2955,
      valueString: '-2955',
      feeString: '2955',
      payGoFee: 0,
      payGoFeeString: '0',
      usd: -0.423671943,
      usdRate: 14337.46,
      state: 'confirmed',
      tags: [
        '5a1341e7c8421dc90710673b3166bbd5'
      ],
      history: [
        {
          date: '2018-01-10T03:27:02.233Z',
          action: 'confirmed'
        },
        {
          date: '2018-01-10T03:22:44.602Z',
          action: 'unconfirmed'
        },
        {
          date: '2018-01-10T03:22:38.837Z',
          action: 'signed'
        },
        {
          date: '2018-01-10T03:22:38.453Z',
          action: 'created'
        }
      ],
      vSize: 985,
      nSegwitInputs: 0,
      entries: [
        {
          address: '2MvmDqV3n6CGxy2VGVWYUj9dYemBDRvzfYn',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -105578837,
          valueString: '-105578837',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N8vBQUofbNkSHUvLujKgZx7tMvi3aKXDyN',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3GyCS6EwqJ2Gutar8Xp5QDHUGSk76CRjN',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NBAS1LQAYhhohuXhJfizuurK8VFgBpo3KR',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2Mvz4PqLLApWw8mKrhFWUQzX2wYTCFfZ1sY',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCDPXuCD4RtoTJxygtGspAX8zmuTUGmcCL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278795,
          valueString: '5278795',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N9xqdXXYcjL6oHzuqqLGRCouiu8tX5doQ4',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NAaUvMBHgb1YVb52Sx7ieLkLc8uDYuWgHM',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3BomFnYDBfNAwisPZtmnP4yrb3aVvMuFP',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N42hVtN2QtApGH8GaChp241oEwPwFVKTHy',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MuvifQydaHHWJUpDuBYAaHMSKnbELqs4Ve',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N5RmV2bAX2fmh1pbRmWCdpE11ZM2Ki98M7',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278795,
          valueString: '5278795',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2Msx8vwATF7qz5WGPce4cb2mk5sGFo9YpR1',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N8deKGfwvQhzPcqUNhbf9W8yzth6MsXMwE',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCmo9bwJwnfLi4FVwTL2RamnNzPrzYbHMG',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NA9zfPJo1BPcw6B1dLQDLUeFConBFyH9Ts',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MyuLvJ4eUi93GTDruD6pstiBeRV24wudfn',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N5wTbb9En4sWFGUrvXTWhBLrqdt3EdjY3Y',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NBTAZN5e9cZuWuS2NWfSC99kXyQMBfPqLp',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MzCH13L3e95bKnudcQuqkDprKWvNThkcWS',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N7mc4wBH67ziE8Au8Szq42hu9za8P4yF4x',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5278794,
          valueString: '5278794',
          isChange: true,
          isPayGo: false
        }
      ],
      confirmedTime: '2018-01-10T03:27:02.233Z',
      unconfirmedTime: '2018-01-10T03:22:44.602Z',
      signedTime: '2018-01-10T03:22:38.837Z',
      createdTime: '2018-01-10T03:22:38.453Z',
      outputs: [
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:0',
          address: '2NBAS1LQAYhhohuXhJfizuurK8VFgBpo3KR',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1732,
          redeemScript: '5221025159202baf34cb321544aa54b9e429ef4f6ab7e1054212dd37facdee4908100d21038dd991b2cbfc8ed35668bced7ab22bd69d9efdf28a382ba8a436d25d1edbef542103b7e84aec13666f878d2f65ac1cf2c92693827a250b36e28a6dcc16668e3f2c5a53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:1',
          address: '2N8vBQUofbNkSHUvLujKgZx7tMvi3aKXDyN',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1734,
          redeemScript: '522103afc371bcc603209201370b375f135cdbfb9effdaab1e94c574aefa407aa1b32821025b3db699fc8c8f677d2c984a7e72916aa31dc45972893f38236c455b3e798dcd210348e79f11f44eba2aaa52b00107a3dc1e3ff067772bb10366a0406399807ae57053ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:2',
          address: '2NA9zfPJo1BPcw6B1dLQDLUeFConBFyH9Ts',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1737,
          redeemScript: '52210276e595d890180916b9dd26e69ecc97746b54b077db6abf1710b27969aca8e3862103297c7c25a56219f03acd5e9c3363c363f394581011ad7503c7e83224dd0037f0210280a8db41a0d1ee878bfb88a784d896c0f3ef281cbc66296d8bae899f0b7803b153ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:3',
          address: '2MyuLvJ4eUi93GTDruD6pstiBeRV24wudfn',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1739,
          redeemScript: '522103da9d80a6777ffcdbb36f62ef1b629536cbca0ead4c5cbc6c00f95f9aa36e989e2103090a1f00ee1de0311198558acc144d7f7b3c9dc8d4e43ab63e2ea3b74a4bdf532102ae5656fa3a3e295f77e7ba4f42b6bbe944e59108ac3249c7c6e742040ae81db853ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:4',
          address: '2N7mc4wBH67ziE8Au8Szq42hu9za8P4yF4x',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1738,
          redeemScript: '522103dc6a779d44684504d1850c9afaf1fee05976719ab233dfd3ab300df5e757c1672103a96a4057bc67d6d392d671a97363a1c4fec9b40705771ef3cf3d75ef2e1ef2c6210233a02f4e9456e1827d5e42afeb7aeb1782c778ce32fcf8e23846975ed973ca4253ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:5',
          address: '2NCmo9bwJwnfLi4FVwTL2RamnNzPrzYbHMG',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1741,
          redeemScript: '5221038f05930e8134921b58625977ed94a5f8aa39442aef088d9157bbd5275845cc7c2102175cc68a9b51a2a0db24160ccc0a5bd7eeed4dea76823435cab9687bf1fb40b92103127b8a37fd12018a2528f670befc9dce562653a60e061ada9a1ce77fd1135c0c53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:6',
          address: '2N9xqdXXYcjL6oHzuqqLGRCouiu8tX5doQ4',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1731,
          redeemScript: '522102e4e8971fcb36bbb81b732a874d452a4d3b217a4a8273fbd9930be52ada5270f72102e7db37ff274689d59f34870c45655e85b7d3860d105b2d623e8baac8d2be132f2103ae659def5b0bac5f4f7d06a651da9bd9ea83fa26dbd68f9fb88f14b565f9c6e053ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:7',
          address: '2N8deKGfwvQhzPcqUNhbf9W8yzth6MsXMwE',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1727,
          redeemScript: '522102ca084d41082c52a2e18436ba9f1bbbe518eaab972d3a4afbd785bada394035b3210268f283768e0fba98ad501921c3770150b39220da5b24d72a7ffcc9a28893b50321028590579a9059d84ed7370681acc7e863ed5781394ade0bb383b0318dd204156353ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:8',
          address: '2N3BomFnYDBfNAwisPZtmnP4yrb3aVvMuFP',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1736,
          redeemScript: '522102da34e964aea61c60e57f1875a46ed4b4db1b97133bbcf85bdf980912d34c00e72102c634369feb348da80843c0c6441dd63f3bc50ebfd19af078d277fe068510e51c210204795930ae89cd25af9f8aa6083c7f9e05856b55186f95439521440f9769feb453ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:9',
          address: '2N5RmV2bAX2fmh1pbRmWCdpE11ZM2Ki98M7',
          value: 5278795,
          valueString: '5278795',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1722,
          redeemScript: '522102e925e78abb4611326844fd69fc370af428404e3f58d5ec7970fa95677eedb1eb21023172ae2818592a42a3e0b53d5e1c6ebb5c86bd1eb374d902431027ffdce91b2c21039e36dfb01ac218ff3855f49edb5045fc0782dbfdc88319db55020a0bfa8e05db53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:10',
          address: '2N5wTbb9En4sWFGUrvXTWhBLrqdt3EdjY3Y',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1730,
          redeemScript: '52210357b97b89d6c8a70891d84ff443929086851e4c1f3a52c2efd18eacdc203acb092103226c2b41ea486ec36dcf95030c01b9964f58ded0c18c727e68632f6813f15d0921036490ebd490a2ce6ace9c0a9c84bc418486ab7f23b8f1b034ea234e87a0c31cf753ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:11',
          address: '2NBTAZN5e9cZuWuS2NWfSC99kXyQMBfPqLp',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1725,
          redeemScript: '522102be24411e0997426c3585c340ddd903430db4fdbed1a21471a74293810cda66d9210267defacc5affa2b75cb7ba3219afbfc10a237ebecf00d6f7cc33a4caf3667c9321028ce4f8866a3bdb4543607d78fdeb70bd4cda0384342c014fec06aa62977649ea53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:12',
          address: '2Msx8vwATF7qz5WGPce4cb2mk5sGFo9YpR1',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1728,
          redeemScript: '5221035bda58158a417e3031ab7504c468dd33c719c9f5a02b95bbca387c7cc510d5e9210391b8dcc1f66299976aa99ad1a6593b70315b70e44718bfe0c601b3b9153561d2210217857bcb2bc9d9118e1f691ebc915f3ae3673e4578509b2ea83cbcb802b1947d53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:13',
          address: '2NCDPXuCD4RtoTJxygtGspAX8zmuTUGmcCL',
          value: 5278795,
          valueString: '5278795',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1723,
          redeemScript: '522102f20506a49c94a09fa47d21ffd00c898bc49cf4bfb79d60c53d8053aa103cec24210398d526da29c426bd8b47ae404febe6d1eb706cf9a9f68da16d29aa1de14695c421030102407fd59cc5736bd36eea98c3e80e06cff58c31a8d1f4cbf8a315baac28f753ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:14',
          address: '2NAaUvMBHgb1YVb52Sx7ieLkLc8uDYuWgHM',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1724,
          redeemScript: '522103d34eccb4976bc790b643a5ac72f2def2ed251f870ba310fd80f91841de6f0e422103b799b97d4da0c5e5c8f8cd2eece381a97365a8f7d79448e710042b74539f5535210268ead3577606ede939e9e8fb4661c53cbc4b95bd022d3d4c9e644c149371aa0953ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:15',
          address: '2MuvifQydaHHWJUpDuBYAaHMSKnbELqs4Ve',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1740,
          redeemScript: '522103fd3309209a6e67b531aae807ff6b3a4337d26b035d250da10691e061ab835a0e21025b65544c2a437ff5d61567c9f3936a6a6e6950c9ede8d8ddab3241a35445755721034a6210766b1c83aeefb9bb061991964273c71d4c940581cf477bf838b94dad5f53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:16',
          address: '2MzCH13L3e95bKnudcQuqkDprKWvNThkcWS',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1735,
          redeemScript: '522102a4bf086fbf1241eef1c7549371b284bf9f61410b8bc4772bd81e870430c4ffcd21032ba75b769dd93af6c19e75fac7e97b252f4f6397a0dfef0f0800af1d2c8a04e82102df17bfca8c7d3aa7f0673ba6b68ea6140682e7aba31a8138149d307fe7a7af1a53ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:17',
          address: '2N42hVtN2QtApGH8GaChp241oEwPwFVKTHy',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1729,
          redeemScript: '5221031eb6c64c71b63af13d410b1dd784d274aaef71f6ecd23bb31e35000fefd95f9321029db8d58cb3212ff87c9523df3388fb38f04383835475ece6cb63ec5e9ec7a588210278cfb3e45564d44e4ac7e97bc69d4fc3f7e53366d8467e4668c9d18b3d5b7c0453ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:18',
          address: '2N3GyCS6EwqJ2Gutar8Xp5QDHUGSk76CRjN',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1733,
          redeemScript: '522103053f0a2b1ff43008c8978805763dd2ee3896d5d610a1d1ca2624ee550d64b95a210274a1ea597ca09990f94d59628adf9b51bcc243c373728b1a2a13f172bcdda37d21023dc6097d35f419fb63f61ce743b5e59ff683c3783021b819470fde87f5793d0553ae',
          isSegwit: false
        },
        {
          id: '1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5:19',
          address: '2Mvz4PqLLApWw8mKrhFWUQzX2wYTCFfZ1sY',
          value: 5278794,
          valueString: '5278794',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1726,
          redeemScript: '52210270052c90f4d36b1fd058a6fcc39816e32499b5384485cb82267059381e959b6e2103458195002f857bdbdf8a9200da790162e00591d8589aef71dcf99f61fd0df0582102574b259f35880ead633bf443b4d4e4386a2053c0183b1d915b0009d0624e17f153ae',
          isSegwit: false
        }
      ],
      inputs: [
        {
          id: 'a312d836d43f7f654b066b5c759fa7db85bc97dd210fbfaa703c867b5d12857b:0',
          address: '2MvmDqV3n6CGxy2VGVWYUj9dYemBDRvzfYn',
          value: 105578837,
          valueString: '105578837',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1701,
          redeemScript: '522102a6da8e03a009e39d1303f4a6c9429276347b908cb44d16e0cafde17e0b735f8d2102b265a17be4754659f743d9d5d58d02d4da7b327d24b225a2671c786ea57b6cdd2103fa24804feaaf6f590188dd282500bf28b7e7e113c6166eb9a42eb4ad0f5c35e753ae',
          isSegwit: false
        }
      ]
    },
    {
      id: '5a55595b49ea27e0072c0b28b44aef34',
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      txid: 'a312d836d43f7f654b066b5c759fa7db85bc97dd210fbfaa703c867b5d12857b',
      height: 1258129,
      date: '2018-01-10T00:10:51.827Z',
      confirmations: 500,
      value: -17832,
      valueString: '-17832',
      feeString: '17832',
      payGoFee: 0,
      payGoFeeString: '0',
      usd: -2.5678490136,
      usdRate: 14400.23,
      state: 'confirmed',
      tags: [
        '5a1341e7c8421dc90710673b3166bbd5'
      ],
      history: [
        {
          date: '2018-01-10T00:10:51.827Z',
          action: 'confirmed'
        },
        {
          date: '2018-01-10T00:08:00.649Z',
          action: 'unconfirmed'
        },
        {
          date: '2018-01-10T00:07:59.509Z',
          action: 'signed'
        },
        {
          date: '2018-01-10T00:07:55.710Z',
          action: 'created'
        }
      ],
      vSize: 5944,
      nSegwitInputs: 0,
      entries: [
        {
          address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MvmDqV3n6CGxy2VGVWYUj9dYemBDRvzfYn',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 105578837,
          valueString: '105578837',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279833,
          valueString: '-5279833',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -5279834,
          valueString: '-5279834',
          isChange: false,
          isPayGo: false
        }
      ],
      confirmedTime: '2018-01-10T00:10:51.827Z',
      unconfirmedTime: '2018-01-10T00:08:00.649Z',
      signedTime: '2018-01-10T00:07:59.509Z',
      createdTime: '2018-01-10T00:07:55.710Z',
      outputs: [
        {
          id: 'a312d836d43f7f654b066b5c759fa7db85bc97dd210fbfaa703c867b5d12857b:0',
          address: '2MvmDqV3n6CGxy2VGVWYUj9dYemBDRvzfYn',
          value: 105578837,
          valueString: '105578837',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1701,
          redeemScript: '522102a6da8e03a009e39d1303f4a6c9429276347b908cb44d16e0cafde17e0b735f8d2102b265a17be4754659f743d9d5d58d02d4da7b327d24b225a2671c786ea57b6cdd2103fa24804feaaf6f590188dd282500bf28b7e7e113c6166eb9a42eb4ad0f5c35e753ae',
          isSegwit: false
        }
      ],
      inputs: [
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:0',
          address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1681,
          redeemScript: '5221026ffe9f21a90aa56a6e87f2371a4feace6bdf61dbbd48b82f20bc8c1984b2a2d421027b145dcebab554556d63a405c79659158d9e52f87e4e5b48eacebbd68106bace21032f73586bd47a3f99e86bff3e15eb3540357a257b9d8b8088fe6002b828b2bdc653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:1',
          address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1686,
          redeemScript: '522103535729bd6572f03be1b27f969d45c1be71e388e800736adbb6e570da050a9d7921029059e6a9f36b3ed18951c0439ca5a159e77ee303a0b6b22937d125abd8c7d33f2103e1b5a83fa5f3d08915d8c3265eb36657e341376671eb4112ce28fc0fc1e3922253ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:10',
          address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1691,
          redeemScript: '5221026a410a02792a8365a1d846cc83cdecac04e583cfd4c6308b8e03b39f0828a1e62102538138e49bdd391e0f18b259688c9086c0fff32b679752c693a45c1bad308daf21038f14c62c99a872d3bcf6a13f69b3e948e059fe585e65f27f77132e0fb9d2041f53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:11',
          address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1700,
          redeemScript: '5221039b020c036732c62a9516b5f0cf588b06a51f108245bcc0373f724d1d29da1f692103a2a6d0c72db5c2c502479ea92a0fb38c54c431d42ae4d6c9a82f79f4f71854fe2102968008552363a96c5454bda3bed829df71c7e850bd1f21e4c25e51936c31fe2b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:12',
          address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1696,
          redeemScript: '5221031d917919375e74ee7654ba4c525847e97f013e1c8473aab830691605af9c8669210353396542b4abbf7d3463b1e514ea4d2a2b673584196d807efc299aa84bd5e0e0210249587e80e3ce9a6b795ae8a71029f8522be66b6f8c260cb8bdd969734b5d9f1b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:13',
          address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1684,
          redeemScript: '522102c68fd25a0d95b3752d0193550759e8175b242d7a07b56ee9c1a1145b9fd7070d210360c9f707e0d203f55bebe6f32978d5e93923cd43a76618d6033268eac2543e822103f5cc80e2ca2c9f52aff4b06b364d385ed0cd9fcfa8e6c0615232d6e9206c9bfc53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:14',
          address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1693,
          redeemScript: '52210247f2bf6c16c84603752729adf51718bce98d8a797632fca6a3a250b7d5ded847210260902a4b8971c42f43ffbf63ab019e74b7976c2a7ee615878d13e97c1fee44802103033c1587c36ae1220411f98d4dbe05a4fa79b23e94988f1d2b229f270e8a114b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:15',
          address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1699,
          redeemScript: '522102bb151e11adb4722e799493086472c05bfa371dd7e67caf3bf52525350d67b0832103d96afe099a68d1654a7d7e24f52530c8c8bcf9770ed10fff921772f5b35b7b362103bb451100671f7680412ecbf25c0107b8f538336ed322a0c7a790256bfd8a9a4953ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:16',
          address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1695,
          redeemScript: '522102cd15ccca809e5af5404b16557ca49fc40c3c109d18a885c3245a60fe0c312a2021030123767d282ee81b811d254056b36d9ebb880b498007700dbac9bbae45fc1e91210365cd3ffbfff5f2bd1319a8f488104ffffa0a232db7c1120ed231255212c4fbc653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:17',
          address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1698,
          redeemScript: '52210236dc2e590fdfa2e31a9ec89145c8af584ceb1417a791ea16d1a0a876762be951210238360d350389d80a1b869d790c02b6e41881abeac6021cbbafa2c1fc84d511872103a002bceaec98391b6db698e70f80a9a01155bf0d260ff6f2940a99106dde7cd453ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:18',
          address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1687,
          redeemScript: '522102beaaa23227c38662a74404610ec3b95f94afa65a4000832bb0707c2a659178b0210365f4f192fffdf977818dee6cf097b8665a6a98fae09966b0f64dda1bee97983821021bd935e2b935999543010d48f8302a45e8063087b1f434644a180e275cdc4c7953ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:19',
          address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1689,
          redeemScript: '5221020b9c233c3c7a4eb429a12254e09047a02a78e5189876f94c98320c4a7b02082f210268991f4bbebc8c7c49511bf8780c1844345e6cbbfc9a6ef677db098dd633b3ed2103f92b0b6cadd7910c67eb7a41f516d07767c874c3f18f5cc2dfd03eea9301499053ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:2',
          address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1694,
          redeemScript: '52210355944039cfd6d53206a8e50818007ed9bce8f9a2bff1135277daa54e209aabd9210364f9a36283b5af67881c72b43dd5a89abc8db3b46e0880c362a1d79d0a7b981d21036957c1f5985f8e0ed9f892bf24a63db007919603cc916c717d9a590b88beb0a753ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:3',
          address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1685,
          redeemScript: '522103b65945f43dbedfaf8ef97c4a87ca59ac10dc9a329a68f037c9d48f7b486ad5bb2102f033838e513bba8f527403464dbddbb8c616ae57e29be428c5c5e6e450cce4d921038c0437dc0f5482b8018a37624d3de84bfa028b4c5481d62e001f092429ae48b853ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:4',
          address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1682,
          redeemScript: '522102f06d028aaebe37b7ca4f3e9e45997adb89831edcaf7cf2ecd62bd2edbf94925421039ea36592bfc189ca714b1bb9edaa70a8cbfd6ff0e61aaaf31b9cb55012e300ea2103161b02e7f078c2cd6247ba6eab45564f65a996a8a3630e69e12ce4ae4762d0f053ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:5',
          address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1690,
          redeemScript: '52210271a8eb8c6db8b0836f13298d73edf053e508489e13901cacb65bbb11d02e160b2103191166559029cf03eb7746b1c907690406352d82f0ea43e12be0355f18664c5a2103bf6d108ffbdb82a19a7b929bdd0d2096f6d6cef915ce3b01a9ddc246bc4a639853ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:6',
          address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1683,
          redeemScript: '522103084cd08843e5a5ceec0716ff0f394f4f53136ae28b5a76d17fdcbc39c28622462102a9631c7ac2c1db5159447304e6ff37b10c9722859935bd3fe04712f6095d9baf2103825e4d3862fb8632d6303ccd10549842d4241831e9f1170aa1a32f20c9d5efbd53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:7',
          address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1692,
          redeemScript: '52210322383d1e86380fd620a3d38151303f5a84f9a12326e718598104be988242ebd02102e04f82f54c77009b2e34b38e83f8b25ea80ebca2a3a2863db59633cb2a74bc822102febef98792343b52bd47fa6f67956842beaf3b437b5ae1ca23d692cae35ba42653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:8',
          address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1697,
          redeemScript: '52210257ef986184e758865db72b6ddf118e82855648a09cb497216fe7639fe22aa6d22103342bcef2c8f531736a85074e853cb3a3a93c6c8ab5ecca2c0bfeb8bd7b8129f421021be19096250493e4d025b645f3595229f10cef290d7b1285b0f5cb331f46b27153ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:9',
          address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1688,
          redeemScript: '5221030ebadbe7625c28d313226dd0da4e83da4c900da549125e384979791510fb5ef02102fbbaeb7ef5ca0632ca19f777d3952c74206aa4d3cbc899b341dc4b828c23f2d72102f60098c69824d514943a62407d3cb8dc8941ae838b099e44a31c1355fc901afa53ae',
          isSegwit: false
        }
      ]
    },
    {
      id: '5a555811a240c3e807d53b2ef0f50d94',
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      txid: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3',
      height: 1258129,
      date: '2018-01-10T00:10:51.781Z',
      confirmations: 500,
      value: -2955,
      valueString: '-2955',
      feeString: '2955',
      payGoFee: 0,
      payGoFeeString: '0',
      usd: -0.42883373700000005,
      usdRate: 14512.14,
      state: 'confirmed',
      tags: [
        '5a1341e7c8421dc90710673b3166bbd5'
      ],
      history: [
        {
          date: '2018-01-10T00:10:51.781Z',
          action: 'confirmed'
        },
        {
          date: '2018-01-10T00:02:29.617Z',
          action: 'unconfirmed'
        },
        {
          date: '2018-01-10T00:02:26.385Z',
          action: 'signed'
        },
        {
          date: '2018-01-10T00:02:25.972Z',
          action: 'created'
        }
      ],
      vSize: 985,
      nSegwitInputs: 0,
      entries: [
        {
          address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2N3WSBVUduYbLtfZER2TMnBtvGa1QsA7Wty',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: -105599624,
          valueString: '-105599624',
          isChange: false,
          isPayGo: false
        },
        {
          address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279833,
          valueString: '5279833',
          isChange: true,
          isPayGo: false
        },
        {
          address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          value: 5279834,
          valueString: '5279834',
          isChange: true,
          isPayGo: false
        }
      ],
      confirmedTime: '2018-01-10T00:10:51.781Z',
      unconfirmedTime: '2018-01-10T00:02:29.617Z',
      signedTime: '2018-01-10T00:02:26.385Z',
      createdTime: '2018-01-10T00:02:25.972Z',
      outputs: [
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:0',
          address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1681,
          redeemScript: '5221026ffe9f21a90aa56a6e87f2371a4feace6bdf61dbbd48b82f20bc8c1984b2a2d421027b145dcebab554556d63a405c79659158d9e52f87e4e5b48eacebbd68106bace21032f73586bd47a3f99e86bff3e15eb3540357a257b9d8b8088fe6002b828b2bdc653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:1',
          address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1686,
          redeemScript: '522103535729bd6572f03be1b27f969d45c1be71e388e800736adbb6e570da050a9d7921029059e6a9f36b3ed18951c0439ca5a159e77ee303a0b6b22937d125abd8c7d33f2103e1b5a83fa5f3d08915d8c3265eb36657e341376671eb4112ce28fc0fc1e3922253ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:2',
          address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1694,
          redeemScript: '52210355944039cfd6d53206a8e50818007ed9bce8f9a2bff1135277daa54e209aabd9210364f9a36283b5af67881c72b43dd5a89abc8db3b46e0880c362a1d79d0a7b981d21036957c1f5985f8e0ed9f892bf24a63db007919603cc916c717d9a590b88beb0a753ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:3',
          address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1685,
          redeemScript: '522103b65945f43dbedfaf8ef97c4a87ca59ac10dc9a329a68f037c9d48f7b486ad5bb2102f033838e513bba8f527403464dbddbb8c616ae57e29be428c5c5e6e450cce4d921038c0437dc0f5482b8018a37624d3de84bfa028b4c5481d62e001f092429ae48b853ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:4',
          address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1682,
          redeemScript: '522102f06d028aaebe37b7ca4f3e9e45997adb89831edcaf7cf2ecd62bd2edbf94925421039ea36592bfc189ca714b1bb9edaa70a8cbfd6ff0e61aaaf31b9cb55012e300ea2103161b02e7f078c2cd6247ba6eab45564f65a996a8a3630e69e12ce4ae4762d0f053ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:5',
          address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1690,
          redeemScript: '52210271a8eb8c6db8b0836f13298d73edf053e508489e13901cacb65bbb11d02e160b2103191166559029cf03eb7746b1c907690406352d82f0ea43e12be0355f18664c5a2103bf6d108ffbdb82a19a7b929bdd0d2096f6d6cef915ce3b01a9ddc246bc4a639853ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:6',
          address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1683,
          redeemScript: '522103084cd08843e5a5ceec0716ff0f394f4f53136ae28b5a76d17fdcbc39c28622462102a9631c7ac2c1db5159447304e6ff37b10c9722859935bd3fe04712f6095d9baf2103825e4d3862fb8632d6303ccd10549842d4241831e9f1170aa1a32f20c9d5efbd53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:7',
          address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1692,
          redeemScript: '52210322383d1e86380fd620a3d38151303f5a84f9a12326e718598104be988242ebd02102e04f82f54c77009b2e34b38e83f8b25ea80ebca2a3a2863db59633cb2a74bc822102febef98792343b52bd47fa6f67956842beaf3b437b5ae1ca23d692cae35ba42653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:8',
          address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1697,
          redeemScript: '52210257ef986184e758865db72b6ddf118e82855648a09cb497216fe7639fe22aa6d22103342bcef2c8f531736a85074e853cb3a3a93c6c8ab5ecca2c0bfeb8bd7b8129f421021be19096250493e4d025b645f3595229f10cef290d7b1285b0f5cb331f46b27153ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:9',
          address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1688,
          redeemScript: '5221030ebadbe7625c28d313226dd0da4e83da4c900da549125e384979791510fb5ef02102fbbaeb7ef5ca0632ca19f777d3952c74206aa4d3cbc899b341dc4b828c23f2d72102f60098c69824d514943a62407d3cb8dc8941ae838b099e44a31c1355fc901afa53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:10',
          address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1691,
          redeemScript: '5221026a410a02792a8365a1d846cc83cdecac04e583cfd4c6308b8e03b39f0828a1e62102538138e49bdd391e0f18b259688c9086c0fff32b679752c693a45c1bad308daf21038f14c62c99a872d3bcf6a13f69b3e948e059fe585e65f27f77132e0fb9d2041f53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:11',
          address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1700,
          redeemScript: '5221039b020c036732c62a9516b5f0cf588b06a51f108245bcc0373f724d1d29da1f692103a2a6d0c72db5c2c502479ea92a0fb38c54c431d42ae4d6c9a82f79f4f71854fe2102968008552363a96c5454bda3bed829df71c7e850bd1f21e4c25e51936c31fe2b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:12',
          address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1696,
          redeemScript: '5221031d917919375e74ee7654ba4c525847e97f013e1c8473aab830691605af9c8669210353396542b4abbf7d3463b1e514ea4d2a2b673584196d807efc299aa84bd5e0e0210249587e80e3ce9a6b795ae8a71029f8522be66b6f8c260cb8bdd969734b5d9f1b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:13',
          address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1684,
          redeemScript: '522102c68fd25a0d95b3752d0193550759e8175b242d7a07b56ee9c1a1145b9fd7070d210360c9f707e0d203f55bebe6f32978d5e93923cd43a76618d6033268eac2543e822103f5cc80e2ca2c9f52aff4b06b364d385ed0cd9fcfa8e6c0615232d6e9206c9bfc53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:14',
          address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1693,
          redeemScript: '52210247f2bf6c16c84603752729adf51718bce98d8a797632fca6a3a250b7d5ded847210260902a4b8971c42f43ffbf63ab019e74b7976c2a7ee615878d13e97c1fee44802103033c1587c36ae1220411f98d4dbe05a4fa79b23e94988f1d2b229f270e8a114b53ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:15',
          address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1699,
          redeemScript: '522102bb151e11adb4722e799493086472c05bfa371dd7e67caf3bf52525350d67b0832103d96afe099a68d1654a7d7e24f52530c8c8bcf9770ed10fff921772f5b35b7b362103bb451100671f7680412ecbf25c0107b8f538336ed322a0c7a790256bfd8a9a4953ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:16',
          address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1695,
          redeemScript: '522102cd15ccca809e5af5404b16557ca49fc40c3c109d18a885c3245a60fe0c312a2021030123767d282ee81b811d254056b36d9ebb880b498007700dbac9bbae45fc1e91210365cd3ffbfff5f2bd1319a8f488104ffffa0a232db7c1120ed231255212c4fbc653ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:17',
          address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
          value: 5279833,
          valueString: '5279833',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1698,
          redeemScript: '52210236dc2e590fdfa2e31a9ec89145c8af584ceb1417a791ea16d1a0a876762be951210238360d350389d80a1b869d790c02b6e41881abeac6021cbbafa2c1fc84d511872103a002bceaec98391b6db698e70f80a9a01155bf0d260ff6f2940a99106dde7cd453ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:18',
          address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1687,
          redeemScript: '522102beaaa23227c38662a74404610ec3b95f94afa65a4000832bb0707c2a659178b0210365f4f192fffdf977818dee6cf097b8665a6a98fae09966b0f64dda1bee97983821021bd935e2b935999543010d48f8302a45e8063087b1f434644a180e275cdc4c7953ae',
          isSegwit: false
        },
        {
          id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:19',
          address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
          value: 5279834,
          valueString: '5279834',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1689,
          redeemScript: '5221020b9c233c3c7a4eb429a12254e09047a02a78e5189876f94c98320c4a7b02082f210268991f4bbebc8c7c49511bf8780c1844345e6cbbfc9a6ef677db098dd633b3ed2103f92b0b6cadd7910c67eb7a41f516d07767c874c3f18f5cc2dfd03eea9301499053ae',
          isSegwit: false
        }
      ],
      inputs: [
        {
          id: '12cda6a880008bc5eb26a5e34cb512059aec05a7c252bf63b732aa005dc6065f:0',
          address: '2N3WSBVUduYbLtfZER2TMnBtvGa1QsA7Wty',
          value: 105599624,
          valueString: '105599624',
          wallet: '5a1341e7c8421dc90710673b3166bbd5',
          chain: 1,
          index: 1680,
          redeemScript: '52210351d1bd40c86328c173ba19ed82bbb384db5ac2077de212f5f4cf78727747fa722102daceca3cc9184fdc3b6f5c9a7d4133b03c43decf2e20191aef104c36c9b9a2822102e6d96b35c362a2150861a521ae96ed8ac46c9ac90a6b323005a3ace402a92fa753ae',
          isSegwit: false
        }
      ]
    }
  ],
  nextBatchPrevId: '1258129-5a555811a240c3e807d53b2ef0f50d94'
};

exports.getTransferListOutput =
  'INDEX  DATE                   TXID                                                                   AMOUNT         DESC   \n' +
  '0      2018-01-11T02:50:17Z   644ec96b25b61dd404ff2db54567c498f5fe6453736d415661d4c0af664d8c61       -0.00002955    Sent   \n' +
  '1      2018-01-11T02:50:17Z   7648d1efb49a5a135f098e68bf176645da2f5eb636134fcec8f436210c0aa46e       -0.00017832    Sent   \n' +
  '2      2018-01-10T03:27:02Z   1c1dd69f739271f1a8525d655a07ad575da344e6eae365deaef7361a3eb9b4a5       -0.00002955    Sent   \n' +
  '3      2018-01-10T00:10:51Z   a312d836d43f7f654b066b5c759fa7db85bc97dd210fbfaa703c867b5d12857b       -0.00017832    Sent   \n' +
  '4      2018-01-10T00:10:51Z   783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3       -0.00002955    Sent   \n';
// wallet transfer 5a555811a240c3e807d53b2ef0f50d94
exports.transferId = '5a555811a240c3e807d53b2ef0f50d94';

exports.getTransferIdResponse = {
  id: '5a555811a240c3e807d53b2ef0f50d94',
  coin: 'tbtc',
  wallet: '5a1341e7c8421dc90710673b3166bbd5',
  txid: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3',
  height: 1258129,
  date: '2018-01-10T00:10:51.781Z',
  confirmations: 508,
  value: -2955,
  valueString: '-2955',
  feeString: '2955',
  payGoFee: 0,
  payGoFeeString: '0',
  usd: -0.42883373700000005,
  usdRate: 14512.14,
  state: 'confirmed',
  tags: [
    '5a1341e7c8421dc90710673b3166bbd5'
  ],
  history: [
    {
      date: '2018-01-10T00:10:51.781Z',
      action: 'confirmed'
    },
    {
      date: '2018-01-10T00:02:29.617Z',
      action: 'unconfirmed'
    },
    {
      date: '2018-01-10T00:02:26.385Z',
      action: 'signed'
    },
    {
      date: '2018-01-10T00:02:25.972Z',
      action: 'created'
    }
  ],
  vSize: 985,
  nSegwitInputs: 0,
  entries: [
    {
      address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2N3WSBVUduYbLtfZER2TMnBtvGa1QsA7Wty',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: -105599624,
      valueString: '-105599624',
      isChange: false,
      isPayGo: false
    },
    {
      address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279833,
      valueString: '5279833',
      isChange: true,
      isPayGo: false
    },
    {
      address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      value: 5279834,
      valueString: '5279834',
      isChange: true,
      isPayGo: false
    }
  ],
  confirmedTime: '2018-01-10T00:10:51.781Z',
  unconfirmedTime: '2018-01-10T00:02:29.617Z',
  signedTime: '2018-01-10T00:02:26.385Z',
  createdTime: '2018-01-10T00:02:25.972Z',
  outputs: [
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:0',
      address: '2N26FErjrrJsZCjTBnbN32c8j1GfHjUjCRw',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1681,
      redeemScript: '5221026ffe9f21a90aa56a6e87f2371a4feace6bdf61dbbd48b82f20bc8c1984b2a2d421027b145dcebab554556d63a405c79659158d9e52f87e4e5b48eacebbd68106bace21032f73586bd47a3f99e86bff3e15eb3540357a257b9d8b8088fe6002b828b2bdc653ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:1',
      address: '2NCka7w5sfPmJ7t4jetYtcCpfRWHkq1tL3N',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1686,
      redeemScript: '522103535729bd6572f03be1b27f969d45c1be71e388e800736adbb6e570da050a9d7921029059e6a9f36b3ed18951c0439ca5a159e77ee303a0b6b22937d125abd8c7d33f2103e1b5a83fa5f3d08915d8c3265eb36657e341376671eb4112ce28fc0fc1e3922253ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:2',
      address: '2MsyviEbb9NRcCLvg5zHswryMwGfRvcjERw',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1694,
      redeemScript: '52210355944039cfd6d53206a8e50818007ed9bce8f9a2bff1135277daa54e209aabd9210364f9a36283b5af67881c72b43dd5a89abc8db3b46e0880c362a1d79d0a7b981d21036957c1f5985f8e0ed9f892bf24a63db007919603cc916c717d9a590b88beb0a753ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:3',
      address: '2N9PmZkFRUXtcV2joKgYvhNPrS9ADDKk27W',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1685,
      redeemScript: '522103b65945f43dbedfaf8ef97c4a87ca59ac10dc9a329a68f037c9d48f7b486ad5bb2102f033838e513bba8f527403464dbddbb8c616ae57e29be428c5c5e6e450cce4d921038c0437dc0f5482b8018a37624d3de84bfa028b4c5481d62e001f092429ae48b853ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:4',
      address: '2MsiV1C5coFPb91RAWNv8CpscvdRqsBvEuq',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1682,
      redeemScript: '522102f06d028aaebe37b7ca4f3e9e45997adb89831edcaf7cf2ecd62bd2edbf94925421039ea36592bfc189ca714b1bb9edaa70a8cbfd6ff0e61aaaf31b9cb55012e300ea2103161b02e7f078c2cd6247ba6eab45564f65a996a8a3630e69e12ce4ae4762d0f053ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:5',
      address: '2N3u6Yb9LEKe5jBpfGPtydEDxRezHhZXZy2',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1690,
      redeemScript: '52210271a8eb8c6db8b0836f13298d73edf053e508489e13901cacb65bbb11d02e160b2103191166559029cf03eb7746b1c907690406352d82f0ea43e12be0355f18664c5a2103bf6d108ffbdb82a19a7b929bdd0d2096f6d6cef915ce3b01a9ddc246bc4a639853ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:6',
      address: '2MwU3TEsGKmnWZjbrctWW1UrHYhi3JryadQ',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1683,
      redeemScript: '522103084cd08843e5a5ceec0716ff0f394f4f53136ae28b5a76d17fdcbc39c28622462102a9631c7ac2c1db5159447304e6ff37b10c9722859935bd3fe04712f6095d9baf2103825e4d3862fb8632d6303ccd10549842d4241831e9f1170aa1a32f20c9d5efbd53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:7',
      address: '2Mwe1EFVRjQmkKA8GPF5BtDtD97F1Wg13Cw',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1692,
      redeemScript: '52210322383d1e86380fd620a3d38151303f5a84f9a12326e718598104be988242ebd02102e04f82f54c77009b2e34b38e83f8b25ea80ebca2a3a2863db59633cb2a74bc822102febef98792343b52bd47fa6f67956842beaf3b437b5ae1ca23d692cae35ba42653ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:8',
      address: '2N1Z9U3PmyfEhEADsJXEetqtiLkbX9bypN2',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1697,
      redeemScript: '52210257ef986184e758865db72b6ddf118e82855648a09cb497216fe7639fe22aa6d22103342bcef2c8f531736a85074e853cb3a3a93c6c8ab5ecca2c0bfeb8bd7b8129f421021be19096250493e4d025b645f3595229f10cef290d7b1285b0f5cb331f46b27153ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:9',
      address: '2N8akjKUwjT65fSg6heQPci1MTSp8VuWmkv',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1688,
      redeemScript: '5221030ebadbe7625c28d313226dd0da4e83da4c900da549125e384979791510fb5ef02102fbbaeb7ef5ca0632ca19f777d3952c74206aa4d3cbc899b341dc4b828c23f2d72102f60098c69824d514943a62407d3cb8dc8941ae838b099e44a31c1355fc901afa53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:10',
      address: '2N3KHNKk4g6Nuy9aK7RhHqbhuvCGgvNxydL',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1691,
      redeemScript: '5221026a410a02792a8365a1d846cc83cdecac04e583cfd4c6308b8e03b39f0828a1e62102538138e49bdd391e0f18b259688c9086c0fff32b679752c693a45c1bad308daf21038f14c62c99a872d3bcf6a13f69b3e948e059fe585e65f27f77132e0fb9d2041f53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:11',
      address: '2N3yjJig2indn26y93wyKG2XsoyA6Xdrf8V',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1700,
      redeemScript: '5221039b020c036732c62a9516b5f0cf588b06a51f108245bcc0373f724d1d29da1f692103a2a6d0c72db5c2c502479ea92a0fb38c54c431d42ae4d6c9a82f79f4f71854fe2102968008552363a96c5454bda3bed829df71c7e850bd1f21e4c25e51936c31fe2b53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:12',
      address: '2MwcCpDmehVNSokAcwpvBF43QPpqTWrYWgk',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1696,
      redeemScript: '5221031d917919375e74ee7654ba4c525847e97f013e1c8473aab830691605af9c8669210353396542b4abbf7d3463b1e514ea4d2a2b673584196d807efc299aa84bd5e0e0210249587e80e3ce9a6b795ae8a71029f8522be66b6f8c260cb8bdd969734b5d9f1b53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:13',
      address: '2NDUxbD6cR3kWUngoUMNBUu62UqNoF2TmD9',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1684,
      redeemScript: '522102c68fd25a0d95b3752d0193550759e8175b242d7a07b56ee9c1a1145b9fd7070d210360c9f707e0d203f55bebe6f32978d5e93923cd43a76618d6033268eac2543e822103f5cc80e2ca2c9f52aff4b06b364d385ed0cd9fcfa8e6c0615232d6e9206c9bfc53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:14',
      address: '2N6YL5miku2WBKABkpTQ5HMuTzMVRiNf4ZV',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1693,
      redeemScript: '52210247f2bf6c16c84603752729adf51718bce98d8a797632fca6a3a250b7d5ded847210260902a4b8971c42f43ffbf63ab019e74b7976c2a7ee615878d13e97c1fee44802103033c1587c36ae1220411f98d4dbe05a4fa79b23e94988f1d2b229f270e8a114b53ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:15',
      address: '2N8S8kTkFMcMccyVjeyapfoSJ5m1aDUghgm',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1699,
      redeemScript: '522102bb151e11adb4722e799493086472c05bfa371dd7e67caf3bf52525350d67b0832103d96afe099a68d1654a7d7e24f52530c8c8bcf9770ed10fff921772f5b35b7b362103bb451100671f7680412ecbf25c0107b8f538336ed322a0c7a790256bfd8a9a4953ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:16',
      address: '2NBLfbysChjFKpeiaPThMEcvAtxtk9ozSXf',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1695,
      redeemScript: '522102cd15ccca809e5af5404b16557ca49fc40c3c109d18a885c3245a60fe0c312a2021030123767d282ee81b811d254056b36d9ebb880b498007700dbac9bbae45fc1e91210365cd3ffbfff5f2bd1319a8f488104ffffa0a232db7c1120ed231255212c4fbc653ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:17',
      address: '2NCVfz7JEzBHQQYWtEF2qwAWDdbce8ad7Me',
      value: 5279833,
      valueString: '5279833',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1698,
      redeemScript: '52210236dc2e590fdfa2e31a9ec89145c8af584ceb1417a791ea16d1a0a876762be951210238360d350389d80a1b869d790c02b6e41881abeac6021cbbafa2c1fc84d511872103a002bceaec98391b6db698e70f80a9a01155bf0d260ff6f2940a99106dde7cd453ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:18',
      address: '2NFHfyJ4aQ5sLbZ51mGWsNAjbzUC9A1H4ST',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1687,
      redeemScript: '522102beaaa23227c38662a74404610ec3b95f94afa65a4000832bb0707c2a659178b0210365f4f192fffdf977818dee6cf097b8665a6a98fae09966b0f64dda1bee97983821021bd935e2b935999543010d48f8302a45e8063087b1f434644a180e275cdc4c7953ae',
      isSegwit: false
    },
    {
      id: '783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3:19',
      address: '2N76jVwQ9Uo8xmL47BHUDggeJo5GWckrTRL',
      value: 5279834,
      valueString: '5279834',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1689,
      redeemScript: '5221020b9c233c3c7a4eb429a12254e09047a02a78e5189876f94c98320c4a7b02082f210268991f4bbebc8c7c49511bf8780c1844345e6cbbfc9a6ef677db098dd633b3ed2103f92b0b6cadd7910c67eb7a41f516d07767c874c3f18f5cc2dfd03eea9301499053ae',
      isSegwit: false
    }
  ],
  inputs: [
    {
      id: '12cda6a880008bc5eb26a5e34cb512059aec05a7c252bf63b732aa005dc6065f:0',
      address: '2N3WSBVUduYbLtfZER2TMnBtvGa1QsA7Wty',
      value: 105599624,
      valueString: '105599624',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1680,
      redeemScript: '52210351d1bd40c86328c173ba19ed82bbb384db5ac2077de212f5f4cf78727747fa722102daceca3cc9184fdc3b6f5c9a7d4133b03c43decf2e20191aef104c36c9b9a2822102e6d96b35c362a2150861a521ae96ed8ac46c9ac90a6b323005a3ace402a92fa753ae',
      isSegwit: false
    }
  ]
};

exports.getTransferIdOutput =
  '\nTransfer:           5a555811a240c3e807d53b2ef0f50d94\n' +
  'Coin:               TBTC\n' +
  'TXID:               783cbc53efcd772258d2a82cabbcda2f68b73f2ba1e7c81cd51335d8a09ec5c3\n' +
  'Date:               2018-01-10T00:10:51.781Z\n' +
  'Confirmations:      508\n' +
  'State:              confirmed\n';

exports.getUnspentsResponse = {
  unspents: [
    {
      id: '74a9c032eeafaeb94c3c30902bebada73873d05e18de7bd49613e6981ea28ace:0',
      address: '2NGXkmQ1EEqKj19zbQk1PRNuRmVe3GLMAdU',
      value: 105433328,
      valueString: '105433328',
      blockHeight: 1259313,
      date: '2018-01-16T23:08:37.257Z',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      fromWallet: '5a1341e7c8421dc90710673b3166bbd5',
      chain: 1,
      index: 1868,
      redeemScript: '5221026c290862b5b204f70cebc9a501f2590eeb25c11e05fa8c3dd62a79c92d9d096e21024d64c876eea1649c2432b8cb3580d628460859147d8bbfc6142c36ad764874fd2103f05d8aa8ccd6fa4624bd20ccee2b80e5c9a4c10585bff5d11f35e91d33689eb153ae',
      isSegwit: false
    }
  ],
  coin: 'tbtc'
};

exports.getUnspentsOutput =
  'INDEX  AMOUNT         ID                                                                     ADDRESS                                 \n' +
  '0      1.05433328     74a9c032eeafaeb94c3c30902bebada73873d05e18de7bd49613e6981ea28ace:0     2NGXkmQ1EEqKj19zbQk1PRNuRmVe3GLMAdU     \n' +
  'Count (this list): 1\n' +
  'Total amount (this list): 1.05433328\n';

exports.getUserResponse = {
  id: '543c11ed356d00cb7600000b98794503',
  username: 'tester@bitgo.com',
  name: {
    full: 'tester@bitgo.com'
  },
  email: {
    email: 'tester@bitgo.com',
    verified: true
  },
  phone: {
    phone: '+5555551234',
    verified: true
  },
  identity: {
    verified: false
  },
  otpDevices: [
    {
      id: '55e648e990e645e2257f8d94a4bec6f6',
      type: 'authy',
      label: 'Authy',
      verified: true,
      phone: '555-555-1234'
    }
  ],
  rateLimits: {},
  disableReset2FA: false,
  currency: {
    currency: 'USD',
    bitcoinUnit: 'BTC'
  },
  timezone: 'US/Pacific',
  isActive: true,
  ecdhKeychain: 'xpub661MyMwAqRbcFkiN8QJXCytQqPyDPW1cfnuG6RGCVFnVyiSQL1b6ZS2iiVJHH7UZYwLbN2ayWsaRVhnBFKYvLz956PTRH2SuuurpEcNGLKv',
  referrer: {},
  forceResetPassword: false,
  allowedCoins: [],
  agreements: {
    termsOfUse: 1,
    termsOfUseAcceptanceDate: '2017-11-20T20:53:19.627Z'
  },
  enterprises: [
    {
      id: '5578ebc76eb47487743b903166e6543a'
    },
    {
      id: '57057916c03b4a5d0644e2ad94a9e070'
    }
  ]
};

exports.getLoginResponse = {
  access_token: '6d6edf6173a497179b1408268a6948db5f23c59fa53db78e9efca3f65b9890d0',
  token_type: 'bearer',
  expires_in: 3600,
  expires_at: 1515800580,
  scope: [
    'user_manage',
    'openid',
    'profile',
    'wallet_create',
    'wallet_freeze_all',
    'wallet_manage_all',
    'wallet_approve_all',
    'wallet_spend_all',
    'wallet_edit_all',
    'wallet_view_all'
  ],
  user: {
    id: '543c11ed356d00cb7600000b98794503',
    username: 'tester@bitgo.com',
    name: {
      full: 'tester@bitgo.com'
    },
    email: {
      email: 'tester@bitgo.com',
      verified: true
    },
    phone: {
      phone: '+15555551234',
      verified: true
    },
    identity: {
      verified: false
    },
    otpDevices: [
      {
        id: '55e648e990e645e2257f8d94a4bec6f6',
        type: 'authy',
        label: 'Authy',
        verified: true,
        phone: '555-555-1234'
      }
    ],
    rateLimits: {
      user: {
        limit: -1,
        window: -1
      }
    },
    disableReset2FA: false,
    currency: {
      currency: 'USD',
      bitcoinUnit: 'BTC'
    },
    timezone: 'US/Pacific',
    isActive: true,
    ecdhKeychain: 'xpub661MyMwAqRbcFkiN8QJXCytQqPyDPW1cfnuG6RGCVFnVyiSQL1b6ZS2iiVJHH7UZYwLbN2ayWsaRVhnBFKYvLz956PTRH2SuuurpEcNGLKv',
    referrer: {},
    forceResetPassword: false,
    allowedCoins: [],
    agreements: {
      termsOfUse: 1,
      termsOfUseAcceptanceDate: '2017-11-20T20:53:19.627Z'
    },
    enterprises: [
      {
        id: '5578ebc76eb47487743b903166e6543a'
      },
      {
        id: '57057916c03b4a5d0644e2ad94a9e070'
      }
    ]
  },
  encryptedToken: '{"iv":"fq5o0n53q8YkHMK2yD5j/g==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"4uUGMXZUusY=","ct":"xE4x2CXdrz7SXRQLZ4Rn9RSKKGWUWfFsgiOLFceIGkmGyQdjPz2vNqCaFmR/8Rj6ci9HKystbpXp062zbH+keb7s9rhCz7FUad6D"}',
  derivationPath: 'm/999999/127817856/71170878',
  encryptedECDHXprv: '{"iv":"WGZvnRYDD202r7HIpdtdIw==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"LvZcOyOtQQk=","ct":"1z4nS3G604Q2OtaeugTSBiFI6dggqH2IN9w3iin+nxeMy19SYQ8tfyG1VEguhJs3TqgILo10lujT3oO3Nn5QSf9xIwX3Foct3F32EEUmpyqXGJyp7/8WhO084Fh76GnfI95Fqd113+p1ND1FQ1JlFRRrAitb45g="}'
};

// bg wallet sendtoaddress -a 10000 -d 2NFfxvXpAWjKng7enFougtvtxxCJ2hQEMo4 -p fakepass -c message --confirm
exports.sendToAddressResponse = {
  txid: '47393f92cc61d5e805c3c694db91e27b09995aa314b078136c2f7d52e7dc2168',
  tx: '01000000017eb050bbe70e8b3cf9680474d6961dd963c5cf20474d47db172b400c52013c7301000000fdfe0000483045022100da1fb7ffd7d303b970aa5ceb934193d9b467512133e063df65b38b61b27757e40220471fec37e680c402ab2574a2bb7ec0bbfc9dd93b5e4b2d3efca46b62237d7e0201483045022100f7cebf69f3d5aab314934fa31340e7f2d0ea120774f9974d225979ce1201cdaf02203d81e165f9714cc3f03fb8968ab4304a0da43ba5be118a55c73eca0339657d24014c695221022c3e899182fe6893ce54dfa3b60a4698e13abe1b1a23663a1ef7c476ab4965312102270dd4776970def64ef5a363502140f913d45dbf12b1744e1c94e5abd81f126b2103d314ace4555ebbdecc31f6be5552a73b10ca60170f69c8faeb6083e34b838c4953aeffffffff0250c300000000000017a914ba51ea4ab0a6704b119297d8de51330168da1a23877d4ac4010000000017a91498ef083d01a51be16fd315ea9fb1eb723d010e3d8700000000',
  status: 'signed'
};

exports.sendToAddressOutput =
  'Sending 150000 to 2NFfxvXpAWjKng7enFougtvtxxCJ2hQEMo4\n' +
  '\n' +
  'txid:      47393f92cc61d5e805c3c694db91e27b09995aa314b078136c2f7d52e7dc2168';

// bg address list -l 3
exports.addressListResponse = {
  coin: 'tbtc',
  nextBatchPrevId: '5a1daa9c20bea6b8070b2a42e9f89c32',
  addresses: [
    {
      id: '5a1341e7c8421dc90710673fa655e20a',
      address: '2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez',
      chain: 0,
      index: 0,
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      coinSpecific: {
        redeemScript: '5221029001bd3688eb68a67a67814f0b5a72a68cb9abdf3b79896a7d3d84893f845ba72102a63702069d62a598953ed2aea92461a1e598f99b8f6eb3acf58e845cea80eb1d2103df8056e25ba8d603a053f6a59bc4f7f3f8e44240438e803fccbcfc85ea01c3d953ae'
      }
    },
    {
      id: '5a1342d9aaf5f7c8079d206ac6285f5a',
      address: '2N1rbp3VZbqvDpmHAGS9gfoh6c4pLeWYQJt',
      chain: 0,
      index: 1,
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      coinSpecific: {
        redeemScript: '5221035b4af7cf69bf21951e2c7a7e466162c88646b41807e4c2c4b28d73672c7be5fa2103d6f7f846ebdbfcf716758549cd27e320e93afb3bce32e13e56cead6b074813da21031c9174adbd276567be8785647a6f27ad27995bb4615ded8a602ea75bc8390f7953ae'
      }
    },
    {
      id: '5a1daa9c20bea6b8070b2a42e9f89c32',
      address: '2N3khVXnj37FzWczpiyUATbFxdKVWNCLBKF',
      chain: 1,
      index: 0,
      coin: 'tbtc',
      wallet: '5a1341e7c8421dc90710673b3166bbd5',
      coinSpecific: {
        redeemScript: '522102001f99c8cae6ba818b0346774b1fe3338b5bbcdc8ae711c70b08eb0eb9178096210373389a009cf0ec3970350a76602e623bb3b798ede634b89fb555b0192372ab5a210314ff53cd8d26c23668e108fbdf0bb7ab7b8d413cec0a1080856d0c372f14e07153ae'
      }
    }
  ],
  count: 3
};

exports.addressListOutput =
  'INDEX  ADDRESS                                  ID                                  CHAIN\n' +
  '0      2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez      5a1341e7c8421dc90710673fa655e20a    0    \n' +
  '1      2N1rbp3VZbqvDpmHAGS9gfoh6c4pLeWYQJt      5a1342d9aaf5f7c8079d206ac6285f5a    0    \n' +
  '2      2N3khVXnj37FzWczpiyUATbFxdKVWNCLBKF      5a1daa9c20bea6b8070b2a42e9f89c32    1    \n';

exports.addressGetResponse = {
  id: '5a1341e7c8421dc90710673fa655e20a',
  address: '2MuUXDK2sRKdBTrruXi9kZNBymrAmBsqhez',
  chain: 0,
  index: 0,
  coin: 'tbtc',
  wallet: '5a1341e7c8421dc90710673b3166bbd5',
  coinSpecific: {
    redeemScript: '5221029001bd3688eb68a67a67814f0b5a72a68cb9abdf3b79896a7d3d84893f845ba72102a63702069d62a598953ed2aea92461a1e598f99b8f6eb3acf58e845cea80eb1d2103df8056e25ba8d603a053f6a59bc4f7f3f8e44240438e803fccbcfc85ea01c3d953ae'
  },
  balance: {
    updated: '2017-11-28T18:28:16.786Z',
    numTx: 2,
    numUnspents: 0,
    totalReceived: 130000000,
    totalSent: 130000000
  }
};


exports.newAddressResponse = {
  id: '5a6a26fe9a51b5ef068a658e1c61d4da',
  address: '2NAcbJ97tEEc39jyrveXY55frqM2wVca2Tw',
  chain: 1,
  index: 2751,
  coin: 'tbtc',
  wallet: '5a1341e7c8421dc90710673b3166bbd5',
  coinSpecific: {
    redeemScript: '52210262789f56670426cd2f57f6eb1aff503cb3a24b80c25751099cc3604903d8c7f021023198c03c7a1e048c63cb3eecd3afe722d50c2fe868517f2c57ab496f456f03582102b9066451167938717b7c13fb90a0c6c218df44152dc6078ceb9dacc65a84160d53ae'
  },
  keychains: [
    {
      id: '5a1341cf5f98bed007d7a41aa60a8cfa',
      users: [
        '543c11ed356d00cb7600000b98794503'
      ],
      pub: 'xpub661MyMwAqRbcGH8mVjYMKdrpjxaeqJEnFkN8yaGUyy8rKMTbina7aVZzCutcFF5wU5WwEDGmzbM5FhxQMv15oFoMohiGQn2RBUMkeFz4Jz3',
      ethAddress: '0xfb9a4c2b3756d2a772ecf8254b02a582b9fd3f67',
      encryptedPrv: '{"iv":"/RFY54Qfj/yLPueY18M27g==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"0sZzcms8wbQ=","ct":"jLSixtfyMT3vtToNjOpvxM7Y5TSBh4hgCAdBDBV6ax4J7WKdXC5kai6T/DDnXAlYAUAXuID8ZMXH42040kq+JvTT/KjEmj6UqmynEJoT4AO5Qc750+zQhGAvLQMHqhqTeE7ZOvKUwpVCcgQHk9xvhh3fTHDnFeE="}'
    },
    {
      id: '5a1341d05f98bed007d7a43effc3e391',
      users: [
        '543c11ed356d00cb7600000b98794503'
      ],
      pub: 'xpub661MyMwAqRbcEdbchFu8Y8UBw6sVqQMDrDYrK8aBXaMAfqN3u9Rt8PRy5vuuAZrrCcrnGVRUwMvcw2vCxX46gmufgLyfad55KYcPF88zntP',
      ethAddress: '0x3539278f17043104fea42f005e97faddf3e60896',
      encryptedPrv: '{"iv":"F8VC8uq7ny4lLAXoi33y6A==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"/adNMwu0QXg=","ct":"wFa0i1DwiFU/QgaHU8P6au3fxyiwR9Dj/tdU/JLf5Y8gFxtm+/A1RAQ1GCcRJcxECTrrWSsVGMM5pXJM8nNBFdcKyy2gzVDKhD93jGynWFSrRbOArmIVvaUyff0SxOhh28iOsgxD/gjOgaQXxlb1bbI6+myQyW0="}'
    },
    {
      id: '5a1341d05f98bed007d7a4422e36b919',
      users: [
        '543c11ed356d00cb7600000b98794503'
      ],
      pub: 'xpub661MyMwAqRbcFeeMZtyLiqECMeek7QD6X9NLX2ydBN2DutiBQqLw8nsMnnL9hk3CSWGXZgW1PLV96opu8NzuXwJjK57PuNBqe85jSN6Abm6',
      ethAddress: '0xbf1019a84b6950652002529a7cc18a2fee8f0edf',
      isBitGo: true
    }
  ]
};

exports.userGetOutput =
  'Id:                 543c11ed356d00cb7600000b98794503\n' +
  'Username:           tester@bitgo.com\n';

exports.walletListResponse = {
  coin: 'tltc',
  nextBatchPrevId: '5935da2d79dac2c407c16cc6b7fa6535',
  wallets: [
    {
      id: '5935d50167a315cb075ddebabd9fa628',
      users: [
        {
          user: '543c11ed356d00cb7600000b98794503',
          permissions: [
            'admin',
            'view',
            'spend'
          ]
        }
      ],
      coin: 'tltc',
      label: 'Test tltc wallet',
      m: 2,
      n: 3,
      keys: [
        '5935d5015041afc707f87acbd29c8c4b',
        '5935d50167a315cb075ddeb5e1dca202',
        '5935d50179dac2c407c13aebd24042be'
      ],
      tags: [
        '5935d50167a315cb075ddebabd9fa628'
      ],
      disableTransactionNotifications: false,
      freeze: {},
      deleted: false,
      approvalsRequired: 1,
      isCold: false,
      coinSpecific: {},
      admin: {},
      clientFlags: [],
      balance: 0,
      confirmedBalance: 0,
      spendableBalance: 0,
      balanceString: '0',
      confirmedBalanceString: '0',
      spendableBalanceString: '0'
    },
    {
      id: '5935d6f55041afc707f88094bee6e277',
      users: [
        {
          user: '543c11ed356d00cb7600000b98794503',
          permissions: [
            'admin',
            'view',
            'spend'
          ]
        }
      ],
      coin: 'tltc',
      label: 'Test tltc wallet',
      m: 2,
      n: 3,
      keys: [
        '5935d6f567a315cb075df4f90919012e',
        '5935d6f5695ba5d307327663f5d7e7d8',
        '5935d6f579dac2c407c150fb55ee29a4'
      ],
      tags: [
        '5935d6f55041afc707f88094bee6e277'
      ],
      disableTransactionNotifications: false,
      freeze: {},
      deleted: false,
      approvalsRequired: 1,
      isCold: false,
      coinSpecific: {},
      admin: {},
      clientFlags: [],
      balance: 0,
      confirmedBalance: 0,
      spendableBalance: 0,
      balanceString: '0',
      confirmedBalanceString: '0',
      spendableBalanceString: '0'
    },
    {
      id: '5935da2d79dac2c407c16cc6b7fa6535',
      users: [
        {
          user: '543c11ed356d00cb7600000b98794503',
          permissions: [
            'admin',
            'view',
            'spend'
          ]
        }
      ],
      coin: 'tltc',
      label: 'Test tltc wallet',
      m: 2,
      n: 3,
      keys: [
        '5935da2d79dac2c407c16cbee6cf8565',
        '5935da2d67a315cb075e1125c3851fa5',
        '5935da2c5041afc707f891f1cd1d2b6f'
      ],
      tags: [
        '5935da2d79dac2c407c16cc6b7fa6535'
      ],
      disableTransactionNotifications: false,
      freeze: {},
      deleted: false,
      approvalsRequired: 1,
      isCold: false,
      coinSpecific: {},
      admin: {},
      clientFlags: [],
      balance: 0,
      confirmedBalance: 0,
      spendableBalance: 0,
      balanceString: '0',
      confirmedBalanceString: '0',
      spendableBalanceString: '0'
    }
  ]
};

exports.walletListOutput =
  'INDEX  ID                                   LABEL                                    BALANCE       \n' +
  '0      5935da2d79dac2c407c16cc6b7fa6535     Test tltc wallet                         0             \n' +
  '1      5935d6f55041afc707f88094bee6e277     Test tltc wallet                         0             \n' +
  '2      5935d50167a315cb075ddebabd9fa628     Test tltc wallet                         0             \n';

