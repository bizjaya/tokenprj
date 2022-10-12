import { Contract } from '@ethersproject/contracts';
import Token from '../contracts/Token.json';
import Sale from '../contracts/TokenSale.json';

import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export const tokenAbi = Token.abi;
export const tokenAddr = Token.networks[process.env.REACT_APP_NETID].address;

export const getTokenContract = async (library, account) => {
  const signer = await library.getSigner(account).connectUnchecked();
  var contract = new Contract(tokenAddr, tokenAbi, signer);
  return contract;
};

export const saleAbi = Sale.abi;
export const saleAddr = Sale.networks[process.env.REACT_APP_NETID].address;

export const getSaleContract = async (library, account) => {
  const signer = await library.getSigner(account).connectUnchecked();
  var contract = new Contract(saleAddr, saleAbi, signer);

  return contract;
};

const pckRouterAbi = require('../abi/' + process.env.REACT_APP_PCKAROUTERBI);
const pckRouterAddr = process.env.REACT_APP_PCKROUTER;

export const getPcsContract = async (library, account) => {
  //   console.log(pckRouterAbi, ' ', pckRouterAddr);

  const signer = await library.getSigner(account).connectUnchecked();
  var contract = new Contract(pckRouterAddr, pckRouterAbi, signer);
  return contract;
};

const RPC_URLS = {
  // 1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
  // 4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
  56: 'https://bsc-dataseed.binance.org',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
};

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    56: RPC_URLS[56],
    97: RPC_URLS[97],
  },
  chainId: parseInt(process.env.REACT_APP_CHNID),
  qrcode: true,
  pollingInterval: 15000,
});

export function resetWalletConnector(connector) {
  if (
    connector &&
    connector instanceof WalletConnectConnector &&
    connector.walletConnectProvider?.wc?.uri
  ) {
    connector.walletConnectProvider = undefined;
  }
}

//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[56],
  appName: 'demo-app',
  supportedChainIds: [56, 97],
});
