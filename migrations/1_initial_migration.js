const Token = artifacts.require('Token');
const TokenSale = artifacts.require('TokenSale');
const initialSupply = 10000000000;
const decimals = 18;
const saleCap = '3000000000' + '0'.repeat(decimals).toString();

const minStakeInSecs = 86400 * 14;
const minStakeInTest = 1800;

module.exports = async function (deployer, network, accounts) {
  // deployer.deploy(Token);

  console.log('Network:', network);
  const minStakeDur =
    network == 'development'
      ? minStakeInTest
      : network == 'testnet'
      ? minStakeInTest
      : minStakeInSecs;

  await deployer.deploy(
    Token,
    'NETIQ',
    'NIQ',
    decimals,
    initialSupply,
    minStakeDur
  );
  const tkn = await Token.deployed();

  /*      */
  const net = network == 'development' ? 0 : network == 'testnet' ? 1 : 2;

  console.log('Network:', net);

  await deployer.deploy(
    TokenSale,
    tkn.address,
    await tkn.getOwner(),
    decimals,
    saleCap,
    net
  );
  const tknSale = await TokenSale.deployed();
  await tkn.approve(tknSale.address, saleCap);

  //  tkn.transfer(tknSale.address, saleCap); //NO NEED AS OWNER HAS THE BALANCE
};
