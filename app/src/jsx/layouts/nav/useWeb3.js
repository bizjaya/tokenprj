import { useEffect, useState } from "react";
import Web3 from "web3";
import { useDispatch } from "react-redux";
import { chgWallet } from "../../../redux/walletActions.js";
import { TOKEN } from "../../constants";

const valNetid = TOKEN.NETID;
const valChnid = TOKEN.CHNID;

function useWeb3(state) {
  const [provider, setProvider] = useState(null);
  // const [web3, setWeb3] = useState(null);
  var web3;
  const [acct, setAcct] = useState("");
  const [chnid, setChnid] = useState(0);
  const [netid, setNetid] = useState(0);

  const dispatch = useDispatch();

  const promisify = (inner) =>
    new Promise((resolve, reject) =>
      inner((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    );

  useEffect(async () => {
    setProvider(window.ethereum);

    var acx = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(acx);

    window.ethereum.on("accountsChanged", function (accounts) {
      setAcct(accounts[0]);
      console.log(`Selected account is ${accounts[0]}`);

      connect();
    });

    window.ethereum.on("chainChanged", function (chainid) {
      // setSelAcct(chain[0]);
      setChnid(parseInt(chainid, 16));

      connect();
      // console.log(`Selected chain is ${chain}`);
    });

    window.ethereum.on("networkChanged", function (netid) {
      // setSelAcct(chain[0]);
      setNetid(parseInt(netid));

      connect();
      // console.log(`Selected chain is ${chain}`);
    });

    //connect();
    isValid();

    /*
    //setWeb3(new Web3(provider));
    web3 = new Web3(window.ethereum);

    // const { chainId } = await provider.getNetwork();

    let cid = 0;
    let aid = "";
    let nid = 0;

    if (valid(provider)) {
      var chx = await provider.request({ method: "eth_chainId" });
      var acx = await provider.request({ method: "eth_requestAccounts" });
      var nex = await web3.eth.net.getId();

      const data = await Promise.all([chx, acx[0], nex]).then((v) => {
        cid = parseInt(v[0], 16);
        aid = v[1];
        nid = parseInt(v[2]);
        console.log(`CHAIN ${cid}`);
        console.log(`NETWORK ${nid}`);

        setAcct(aid);
        setChnid(cid);
        setNetid(nid);
        dispatch(
          chgWallet({
            Acct: aid,
            ChnId: cid,
            NetId: nid,
            Web3: web3,
            Valid: valNetid == nid && valChnid == cid,
          })
        );
        // console.log(`lole ${chx} ${acx[0]}`);
      });

    }
    */

    // console.log(chainId); // 42

    // window.ethereum.on('chainChanged', (_chainId) => checkChainID());
    // window.ethereum.on('accountsChanged', (_accounts) => loadBlockchainData());
    // checkChainID();

    // return () => {
    //   // remove the 'chainChanged' and 'accountsChanged' event listeners
    // }
  }, [window.ethereum, provider, chnid, netid, acct]);

  const isValid = async () => {
    if (valid(provider)) {
      web3 = new Web3(window.ethereum);
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
  };

  const connect = async () => {
    if (valid(provider)) {
      web3 = new Web3(provider);
      var chx = await provider.request({ method: "eth_chainId" });
      var acx = await provider.request({ method: "eth_requestAccounts" });
      var nex = await web3.eth.net.getId();
      var bal = await web3.eth.getBalance(acx[0]);

      let wallet;
      const data = await Promise.all([chx, acx[0], nex, bal]).then((v) => {
        let cid = parseInt(v[0], 16);
        let aid = v[1];
        let nid = parseInt(v[2]);

        // console.log(`CHAIN ${cid}`);
        // console.log(`NETWORK ${nid}`);
        // console.log(`BAL ${bal}`);

        setAcct(aid);
        setChnid(cid);
        setNetid(nid);
        wallet = {
          Acct: aid,
          ChnId: cid,
          NetId: nid,
          Web3: web3,
          Bal: window.frwei(bal, TOKEN.ETHDEC).toFixed(4),
          Valid: valNetid == nid && valChnid == cid,
          IsReg: false,
          UsrId: null,
          RefId: null,
        };
        dispatch(chgWallet(wallet));
      });

      return wallet;

      // provider
      //   .request({ method: "eth_requestAccounts" })
      //   .then((accounts) => {
      //     setAcct(accounts[0]);
      //     console.log(`Selected account changed to ${acct}`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  const valid = (obj) => typeof obj !== "undefined" && obj != null;

  return {
    connect,
    chnid,
    netid,
    acct,
    web3,
    provider,
  };
}

export default useWeb3;
