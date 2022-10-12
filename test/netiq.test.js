const Token = artifacts.require("Token");
const { assert } = require("chai");
const truffleAssert = require("truffle-assertions");

contract("Token", async (accounts) => {
  it("Staking 100x2", async () => {
    let token = await Token.deployed();

    // Stake 100 is used to stake 100 tokens twice and see that stake is added correctly and money burned
    let owner = accounts[0];
    // Set owner, user and a stake_amount
    let stake_amount = 100;
    // Add som tokens on account 1 asweel
    await token.mint(accounts[1], 1000);
    // Get init balance of user
    balance = await token.balanceOf(owner);

    // Stake the amount, notice the FROM parameter which specifes what the msg.sender address will be

    stakeID = await token.stake(stake_amount, { from: owner });
    // Assert on the emittedevent using truffleassert
    // This will capture the event and inside the event callback we can use assert on the values returned
    truffleAssert.eventEmitted(
      stakeID,
      "Staked",
      (ev) => {
        // In here we can do our assertion on the ev variable (its the event and will contain the values we emitted)
        assert.equal(
          ev.amount,
          stake_amount,
          "Stake amount in event was not correct"
        );
        assert.equal(ev.index, 1, "Stake index was not correct");
        return true;
      },
      "Stake event should have triggered"
    );
  });

  it("cannot stake more than owning", async () => {
    // Stake too much on accounts[2]
    token = await Token.deployed();

    try {
      await token.stake(1000000000, { from: accounts[2] });
    } catch (error) {
      assert.equal(error.reason, "token: Cannot stake more than you own");
    }
  });
});
