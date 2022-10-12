import Web3 from 'web3';
import { useEffect, useState, useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import {
  injected,
  walletconnect,
  resetWalletConnector,
  walletlink,
  getTokenContract,
  getSaleContract,
  getPcsContract,
} from '../../contract';
import { ethers } from 'ethers';

// import { useMoralis, useChain } from 'react-moralis';
// import { MoralisProvider } from 'react-moralis';

import { useDispatch } from 'react-redux';
import Token from '../../../contracts/Token.json';
import {
  updContract,
  updPcsCon,
  updSaleCon,
} from '../../../redux/tokenActions.js';
import { chgWallet } from '../../../redux/walletActions.js';
import { TOKEN } from '../../constants';

const valNetid = TOKEN.NETID;
const valChnid = TOKEN.CHNID;
const signingMessage = `${TOKEN.SITE} Authentication`;
const valid = (obj) => typeof obj !== 'undefined' && obj != null;

function useWeb3Modal() {
  // const [provider, setProvider] = useState(null);
  //const [web3, setWeb3] = useState(null);

  const { account, activate, deactivate, active, chainId, error, library } =
    useWeb3React();

  const [IsMM, setIsMM] = useState(false);
  const [balance, setBalance] = useState(0);
  const [chnid, setChnid] = useState(0);
  const [netid, setNetid] = useState(0);
  const [actid, setActid] = useState('');
  const dispatch = useDispatch();

  // const {
  //   web3,
  //   enableWeb3,
  //   isWeb3Enabled,
  //   isWeb3EnableLoading,
  //   web3EnableError,
  //   authenticate,
  //   isAuthenticated,
  //   user,
  //   Moralis,
  //   logout,
  //   isAuthenticating,
  // } = useMoralis();
  // const { switchNetwork, chainId, chain, account } = useChain();

  const connect = useCallback(() => {
    activate(walletconnect, undefined, true).catch((err) => {
      // console.error(`Failed to activate account using walletConnect`, err);
      resetWalletConnector(walletconnect);
      // if (err instanceof NoEthereumProviderError) {}
    });
  }, [activate]);

  let wallet;
  const [isWeb3Enabled, isAuthenticated, user, web3] = [
    false,
    false,
    null,
    null,
  ];
  const [enableWeb3, authenticate, logout] = Array(4).fill(null);

  useEffect(async () => {
    //  await authenticate({ signingMessage: `${TOKEN.SITE} Authentication` });
    // if (!isWeb3Enabled && isAuthenticated) {
    //   //  enableWeb3({ chainId: valChnid });
    //   console.log("web3 activated");
    // }
    console.log(user);

    //  if (isWeb3Enabled && isAuthenticated && user != null) {
    if (active && account != undefined) {
      let bal, net, chn, act;
      act = account; // IsMM ? account : user.get('accounts')[0];
      bal = await library?.getBalance(account); //ethers.utils.formatEther(await library?.getBalance(account)); // await web3.eth.getBalance(act);
      net = chainId; //await web3.eth.net.getId();
      chn = chainId; //await web3.eth.getChainId();

      const data = await Promise.all([act, bal, net, chn]).then((v) => {
        chn = parseInt(v[3]);
        net = parseInt(v[2]);
        bal = v[1].toString(); //// BigNumber.toBigInt(v[1]);
        act = v[0];

        setActid(act);
        setChnid(chn);
        setNetid(net);
        console.log(`bal: ${bal}, net: ${net}, chn: ${chn}, act: ${act}`);

        popWallet({ bal, net, chn, act });
      });
    }
  }, [
    // isWeb3Enabled,
    // isAuthenticated,
    // enableWeb3,
    chainId,
    account,
    active,
    // web3,
    // user,
  ]);

  //   useEffect(async ()=>{

  //   },[account,chainId]);

  //   console.log("isMM: ", IsMM);
  //   console.log("isacct: ", account);
  //   console.log("isauth: ", isAuthenticated);
  //   console.log("isweb3: ", isWeb3Enabled);
  if (user != null) {
    ///  console.log(user);
    //   console.log(user.get("accounts")[0]);
  }

  //   console.log(parseInt(chainId, 16));
  //   console.log(account);

  //   if (isWeb3Enabled) {
  //     var bal = web3.eth.getBalance(account).then((res) => {
  //       console.log(res);
  //     });

  //     var nex = web3.eth.net.getId().then((res) => {
  //       console.log(res);
  //     });
  //   }
  //   console.log(user);

  const popWallet = async (p) => {
    console.log(p);
    wallet = {
      Acct: p.act,
      ChnId: p.chn,
      NetId: p.net,
      Web3: web3,
      Bal: window.frwei(p.bal, TOKEN.ETHDEC).toFixed(4),
      Valid: valNetid == p.net && valChnid == p.chn,
      IsChg: true,
      //   IsReg: false,
      //   UsrId: null,
      //   RefId: null,
    };
    await dispatch(chgWallet(wallet));

    const TknContract = await getTokenContract(library, account);
    const SaleContract = await getSaleContract(library, account);
    const PcsContract = await getPcsContract(library, account);
    // console.log(PcsContract);

    dispatch(updContract(TknContract));
    dispatch(updSaleCon(SaleContract));
    dispatch(updPcsCon(PcsContract));

    // if (web3 != null && wallet.Valid) {
    //   let contract = new web3.eth.Contract(
    //     Token.abi,
    //     Token.networks[wallet.NetId].address
    //   );
    //   console.log(contract);
    //   await dispatch(updContract(contract));
    // }
  };

  const conMM = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }

    // console.log(account);

    // await authenticate({ signingMessage });
    // await enableWeb3({ chainId: valChnid });

    // setIsMM(true);

    // return account;
  };

  const conWC = async () => {
    console.log('hello chnid:' + valChnid);

    try {
      // resetWalletConnector(walletconnect);
      activate(walletconnect, undefined, true).catch((e) => {
        resetWalletConnector(walletconnect);
      });
    } catch (ex) {
      resetWalletConnector(walletconnect);

      console.log(ex);
    }

    // await enableWeb3({ provider: 'walletconnect', chainId: valChnid });

    // const u = await authenticate({
    //   provider: 'walletconnect',
    //   chainId: valChnid,
    //   mobileLinks: [
    //     'metamask',
    //     'trust',
    //     // "rainbow",
    //     // "argent",
    //     // "imtoken",
    //     // "pillar",
    //   ],
    //   signingMessage,
    // });
    // setIsMM(false);
    // return user?.get('accounts')[0];
  };

  const isValid = async () => {
    /*
    if (valid(provider)) {
      web3 = new Web3(provider);
      var chx = await provider.request({ method: "eth_chainId" });
      var nex = await web3.eth.net.getId();
      let cid = parseInt(chx, 16);
      let nid = parseInt(nex);
      setChnid(cid);
      setNetid(nid);

      // console.log(`CHAIN ${cid}`);
      // console.log(`NETWORK ${nid}`);

      dispatch(
        chgWallet({
          Valid: valNetid == nid && valChnid == cid,
        })
      );
    }
*/
  };

  const logoff = async () => {
    logout();
    setActid('');
  };

  return {
    conMM,
    conWC,
    active,
    account: actid,
    logoff: deactivate,
    chainId,
  };
}

export default useWeb3Modal;
