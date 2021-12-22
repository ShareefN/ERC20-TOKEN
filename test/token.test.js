const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  before(async () => {
    token = await Token.deployed();
  });

  it(`Give owner ${process.env.TOKEN_SUPPLY} tokens`, async () => {
    let balance = await token.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      process.env.TOKEN_SUPPLY,
      `Balance should be ${process.env.TOKEN_SUPPLY} tokens for contract owner`
    );
  });

  it("Should transfer half total supply between accounts", async () => {
    let balance = await token.balanceOf(accounts[0]);
    let transferAmount = web3.utils.fromWei(balance, "ether") / 2;

    await token.transfer(accounts[1], transferAmount, { from: accounts[0] });

    let _balance0 = await token.balanceOf(accounts[1]);
    assert.equal(
      _balance0,
      transferAmount,
      `Balance should be ${transferAmount} tokens`
    );
  });
});
