'use strict'
import suite from '../node_modules/token-test-suite/suite';

const StandardTokenMock = artifacts.require('./mocks/StandardTokenMock.sol');

contract('StandardToken', function (accounts) {
  const owner = accounts[0];

  suite({
    initialSupply: 100,
    initialBalances: [[owner, 100]],
    increaseDecreaseApproval: true,
    accounts: accounts,
    create: async function () {
      return await StandardTokenMock.new(owner, 100);
    },
    transfer: async function (token, to, amount) {
      return await token.transfer(to, amount, { from: owner });
    }
  });
});
