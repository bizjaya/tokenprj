import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import { utils } from 'ethers';

import React, { useContext, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TOKEN, SALES } from '../../../jsx/constants';
// import TokenSale from '../../../contracts/TokenSale.json';
import { tokenAddr } from '../../contract';

import { Dropdown, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import QuickTransferSlider from '../kripton/Home/QuickTransferSlider';
import Token from '../../../contracts/Token.json';
import * as tokenActions from '../../../redux/tokenActions.js';
import * as walletActions from '../../../redux/walletActions.js';
import DashTop from '../../components/Staking/DashTop';

const Home = () => {
  const pckRouterAbi = require('../../../abi/' +
    process.env.REACT_APP_PCKAROUTERBI);
  const env = process.env.REACT_APP_ENV;

  const bnbRef = useRef(null);
  const reflink = useRef('');
  const contlink = useRef('');

  const pckRouterAddr = process.env.REACT_APP_PCKROUTER;
  const pckWBNBAddr = process.env.REACT_APP_WBNB;
  const pckBUSDAddr = process.env.REACT_APP_BUSD;
  const saleNum = process.env.REACT_APP_CURSALE;
  const SALE = SALES.find((x) => x.num == saleNum);

  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: 'light', label: 'Light' });
  }, []);
  // console.log(background.value === "dark");
  const sta = useSelector((state) => state);

  const dispatch = useDispatch();
  const { updAcct, updDetails, updContract, updSaleCon } = bindActionCreators(
    tokenActions,
    dispatch
  );
  // console.log(sta.wallet);
  const wallet = useSelector((state) => state.wallet);
  const token = useSelector((state) => state.token);

  console.log(wallet);
  console.log(token);

  const web3 = useSelector((state) => state.wallet.Web3);
  //console.log(web3);

  const [amtTKN, setAmtTKN] = useState(0);
  const [amtBNB, setAmtBNB] = useState(0);
  const [uncTKN, setUncTKN] = useState(0);
  const [preUnc, setPreUnc] = useState(0);
  const [BnbPrc, setBnbPrc] = useState(0);
  const [TknPrc, setTknPrc] = useState(0);
  const [ContAddr, setContAddr] = useState('');

  const [loading, setLoading] = useState(parseFloat(0));

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // const networkId = await web3.eth.net.getId();
  const getTknBalance = async () => {
    var TknBal = await token.Contract.balanceOf(wallet.Acct);
    TknBal = window
      .frwei(parseFloat(TknBal.toString()), TOKEN.DECIMAL)
      .toFixed(0);
    console.log(TknBal);
    updDetails({ TknBal });
  };

  const getStkBalance = async () => {
    var staked = await token.Contract.getStake(wallet.Acct);
    let StkAmt = window.frwei(parseFloat(staked[0].toString()), TOKEN.DECIMAL);
    let StkUnc = window.frwei(parseFloat(staked[1].toString()), TOKEN.DECIMAL);
    let StkTime = staked[2].toNumber();
    console.log(`Stkamt:${StkAmt}, StkUnc:${StkUnc}, StkTime:${StkTime}, `);
    updDetails({ StkAmt, StkUnc, StkTime });
    setPreUnc(StkUnc);
  };

  const getTotalSupply = async () => {
    var totalSupply = await token.Contract.totalSupply();
    console.log(totalSupply);
  };

  const getBNBPrice = async () => {
    console.log(env);
    if (env == 'development') {
      setBnbPrc(500);
      return;
    }
    setLoading(true);
    sleep(1000).then(async () => {
      var data = await token.PcsContract.getAmountsOut(
        utils.parseEther('1', 'ether'),
        [pckWBNBAddr, pckBUSDAddr]
      );

      // console.log(data);
      if (window.valid(data)) {
        // console.log(data);
        let prc = window.frwei(parseFloat(data[1].toString()), TOKEN.ETHDEC);
        // utils.fromWei(data[1], 'ether');
        // console.log(prc);
        setBnbPrc(prc);
      }
    });

    sleep(1000).then(() => {
      setLoading(false);
    });

    // var data = contract.methods.swapExactETHForTokens(
    //     web3.utils.toHex(amountOutMin),
    //     [WBNBAddress,
    //      tokenAddress],
    //     targetAccount.address,
    //     web3.utils.toHex(Math.round(Date.now()/1000)+60*20),
    // );
  };

  //...

  useEffect(async () => {
    if (token.PcsContract == null) return;
    bnbRef.current = setInterval(async () => {
      await getBNBPrice();
    }, 10000);
    return () => {
      clearInterval(bnbRef.current);
    };
  }, [token.PcsContract]);

  // useEffect(async () => {
  //   if (web3 == null) return;
  //   const timer = setInterval(async () => {
  //     // console.log(rwdPerSec);
  //     await getBNBPrice();
  //   }, 10000);
  //   // return () => {
  //   //   clearInterval(timer);
  //   // };
  // }, [web3]);

  //console.log(Token);
  /* 
  useEffect(async () => {
    if (web3 != null && wallet.Valid) {
      let saleContract = new web3.eth.Contract(
        TokenSale.abi,
        TokenSale.networks[wallet.NetId].address
      );
      await updSaleCon(saleContract);
    }
  }, [wallet.Valid, web3]);
 */
  useEffect(async () => {
    if (token.Contract != null) {
      getTknBalance();
      getStkBalance();
      // getBNBPrice();
      setContAddr(tokenAddr);
      // test();
    }
  }, [token.Contract]);

  useEffect(async () => {
    if (token.PcsContract != null) {
      getBNBPrice();
      // test();
    }
  }, [token.PcsContract]);

  useEffect(() => {
    if (token.StkAmt > 0) {
      let duration = Math.round(new Date().getTime() / 1000) - token.StkTime;
      let rwdPerSec = token.StkAmt / TOKEN.RWDFRAC;
      let prevUncAmt = duration * rwdPerSec;
      prevUncAmt += preUnc;

      setUncTKN(prevUncAmt);

      const timer = setTimeout(() => {
        // console.log(rwdPerSec);
        console.log(`uncTKN: ${uncTKN}`);
        setUncTKN(uncTKN + rwdPerSec + 0.000000000001);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      if (token.StkUnc > 0) {
        setUncTKN(token.StkUnc);
      }
    }
  }, [uncTKN, token.StkAmt, token.StkUnc]);

  const buyTKN = async () => {
    console.log(token.SaleContract);
    /* */
    console.log(
      'GAS:',
      gasFee,
      'sale:',
      saleNum,
      ' amt:',
      amtBNB,
      'towei: ',
      window.towei(amtBNB, TOKEN.ETHDEC),
      'bnbPrc: ',
      BnbPrc
    );

    var gasFee = await token.SaleContract.estimateGas.purchase(saleNum, {
      from: wallet.Acct,
      value: utils.parseEther(amtBNB),
    });

    const gasAmt = parseFloat(gasFee.toString());
    console.log(gasAmt);

    console.log('GAS:', gasAmt, 'sale:', saleNum, ' amt:', amtBNB);

    var stakeres;

    await token.SaleContract.purchase(saleNum, {
      from: wallet.Acct,
      value: utils.parseEther(amtBNB),
      gasLimit: gasAmt,
    })
      .then((res) => {
        setTimeout(getTknBalance, 3000);
        console.log(res);
        stakeres = res;
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(stakeres);
  };

  const test = async () => {
    console.log(token.Contract);

    var data = await token.Contract.methods.getStkCol(5).call();
    console.log(JSON.stringify(data));

    // data = window.frwei(data, TOKEN.DECIMAL).toFixed(0);
    // console.log(data);
    // updDetails({ TknBal: data });

    //console.log(purchase);
  };

  // const bord = {
  //   border: "1px solid rgba(0, 0, 0, 0.5)",
  // };

  useEffect(async () => {
    // const script = document.createElement("script");
    // script.src =
    //   "https://files.coinmarketcap.com/static/widget/coinPriceBlock.js";
    // script.async = true;

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      overflow: 'auto',
      height: '100%',
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'light',
      locale: 'en',
      isTransparent: true,
    });
    document.getElementById('myContainer').appendChild(script);
  }, []);

  return (
    <>
      <div className="row">
        <div className="text-left form-group col-lg-6 col-sm-12">
          {/* <Link to="/ref-rewards" className="btn btn-primary btn-rounded">
            + Gt Wallet
          </Link> */}

          <div className="input-group mb-3">
            <div className="input-group-prepend input-primary">
              {/* <span className="input-group-text">Referral Link</span> */}
              <button className="btn btn-primary" type="button">
                Referral Link
              </button>
            </div>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder=""
              // value="lolol"
              value={wallet.IsReg ? `${TOKEN.WEBLINK}/ref/${wallet.UsrId}` : ``}
              readOnly
              ref={reflink}
              // onClick={() =>
              //   navigator.clipboard.writeText("Copy this text to clipboard")
              // }
              onFocus={(e) => {
                e.target.select();
                navigator.clipboard.writeText(e.target.value);
              }}
            />
            <div className="input-group-append input-primary">
              {/* <span className="input-group-text">Referral Link</span> */}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(reflink.current.value);
                }}
              >
                <i className="flaticon-381-paperclip"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="text-right form-group col-lg-6 col-sm-12">
          {/* <Link to="/ref-rewards" className="btn btn-primary btn-rounded">
            + Gt Wallet
          </Link> */}
          <Button className="mr-2" variant="primary">
            Your Level: {wallet.Level}
          </Button>
        </div>
      </div>
      <div className="row">
        <DashTop wallet={wallet} token={token} uncTKN={uncTKN} />

        <div className="col-xl-6 col-xxl-12">
          <div className="card">
            <div className="card-header d-sm-flex d-block pb-0 border-0">
              <div>
                <h4 className="fs-20 text-black">
                  {SALE['name']} ${TOKEN.CODE}
                </h4>
                <p className="mb-0 fs-12">Perform and atomic swap</p>
              </div>
              <Row className="d-flex justify-content-between mx-2">
                <div>1 BNB = ${parseFloat(BnbPrc).toFixed(2)} &nbsp; </div>
                <div style={{ width: '32px', height: '32px' }}>
                  {loading ? <div className="loading"></div> : <></>}
                </div>
                <div>
                  1 {TOKEN.CODE} = ${SALE['rate']}
                </div>
              </Row>
            </div>

            <div className="card-body">
              <div className="basic-form">
                <form className="form-wrapper">
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Amount BNB</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0,000000"
                        value={amtBNB}
                        step="any"
                        onChange={async (e) => {
                          let BNB = e.target.value;
                          setAmtBNB(BNB);
                          setAmtTKN((BNB * BnbPrc) / SALE['rate']);
                        }}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => {
                            setAmtBNB(wallet.Bal);
                            setAmtTKN((wallet.Bal * BnbPrc) / SALE['rate']);
                          }}
                        >
                          Max
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Total {TOKEN.CODE}
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0,000000"
                        value={amtTKN}
                        onChange={async (e) => {
                          console.log(e);
                          let tkn = e.target.value;
                          setAmtTKN(tkn);
                          setAmtBNB((tkn * SALE['rate']) / BnbPrc);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="d-flex justify-content-between pb-0 border-0 col-12">
                      <div className="d-block mt-3 mt-sm-0 mb-0">
                        <p className="mb-0">
                          Token quantity may differ slightly due to slippage
                        </p>
                      </div>

                      <div className=" d-block mt-3 mt-sm-0 mb-0">
                        <Button
                          className="mr-2"
                          variant="primary btn-rounded"
                          onClick={buyTKN}
                        >
                          <span className="btn-icon-left text-primary">
                            <i className="fa fa-plus color-info" />
                          </span>
                          BUY ${TOKEN.CODE}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div
                      className="input-group input-group-lg"
                      style={{ marginTop: '15px' }}
                    >
                      <div className="input-group-prepend">
                        <span className="input-group-text">Contract:</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={ContAddr}
                        readOnly
                        ref={contlink}
                        onFocus={(e) => {
                          e.target.select();
                          navigator.clipboard.writeText(e.target.value);
                        }}
                        style={{ height: 'auto' }}
                      />
                      <div className="input-group-append input-primary">
                        {/* <span className="input-group-text">Referral Link</span> */}
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              contlink.current.value
                            );
                          }}
                        >
                          <i className="flaticon-381-paperclip"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div className="custom-control custom-checkbox mr-3 mt-1"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-xxl-12">
          <div
            id="myContainer"
            style={{ height: '450px', overflowX: 'scroll' }}
          >
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
