 /*global contract, config, it, assert*/

const Test = require('Embark/contracts/Test');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "Test": {
      
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Test", function () {

  this.timeout(0);
  it("Test was deployed", async function () {
    let address=Test.options.address
    
    assert.ok(address)
    
  });

  it("should set constructor value", async function () {
    let result = await Test.methods.getInteger().call();
    assert.equal(result,0);
  });

  it("set storage value", async function () {
    await Test.methods.setInteger(150).send();
    let result = await Test.methods.getInteger().call();
    assert.equal(result, 150);
  });

  // it("should have account with balance", async function() {
  //   let balance = await web3.eth.getBalance(accounts[0]);
  //   assert.ok(parseInt(balance, 10) > 0);
  // });
}
)
