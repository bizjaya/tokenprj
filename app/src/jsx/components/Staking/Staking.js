import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TOKEN } from '../../../jsx/constants';

import { Dropdown, Button, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import QuickTransferSlider from '../kripton/Home/QuickTransferSlider';
import DashTop from './DashTop';

import Token from '../../../contracts/Token.json';
import * as tokenActions from '../../../redux/tokenActions.js';

const Staking = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: 'light', label: 'Light' });
  }, []);
  // console.log(background.value === "dark");
  const sta = useSelector((state) => state);
  const [StkError, setStkError] = useState(false);

  // console.log(sta);
  const wallet = useSelector((state) => state.wallet);
  const token = useSelector((state) => state.token);
  const web3 = useSelector((state) => state.wallet.Web3);

  const dispatch = useDispatch();
  const {
    updAcct,
    updDetails,
    updContract,
    trigStake,
    trigUnstake,
    trigClaim,
  } = bindActionCreators(tokenActions, dispatch);

  // console.log(token);
  const [stkTKN, setStkTKN] = useState(0);
  const [utkTKN, setUtkTKN] = useState(0);
  const [uncTKN, setUncTKN] = useState(0);
  const [preUnc, setPreUnc] = useState(0);

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

  // useEffect(async () => {
  //   if (web3 != null && wallet.Valid) {
  //     let contract = new web3.eth.Contract(
  //       Token.abi,
  //       Token.networks[wallet.NetId].address
  //     );
  //     await updContract(contract);
  //   }
  // }, [wallet.Valid, web3]);

  useEffect(async () => {
    if (token.Contract != null) {
      getTknBalance();
      getStkBalance();
    }
  }, [token.Contract]);

  //   setInterval(function () {
  //     setUncTKN((uncTKN) => uncTKN + 1);
  //   }, 1000);

  useEffect(() => {
    if (token.StkAmt > 0) {
      let duration = Math.round(new Date().getTime() / 1000) - token.StkTime;
      let rwdPerSec = token.StkAmt / TOKEN.RWDFRAC;
      let prevUncAmt = duration * rwdPerSec;
      prevUncAmt += preUnc;

      setUncTKN(prevUncAmt);

      const timer = setTimeout(() => {
        // console.log(rwdPerSec);
        // console.log(`uncTKN: ${uncTKN}`);
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

  //console.log(Token);

  // console.log("BNB:", window.towei(amtBNB, 18));

  /*
  const buyTKN = async () => {
    var gasFee = await token.Contract.methods
      .Purchase()
      .estimateGas({ from: wallet.Acct, value: window.towei(amtBNB, 18) });

    console.log("GAS:", gasFee);

    await token.Contract.methods
      .Purchase()
      .send({
        from: wallet.Acct,
        value: window.towei(amtBNB, 18),
        gas: gasFee,
      })
      .then((res) => {
        setTimeout(getTknBalance, 3000);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    //console.log(purchase);
  };
  */

  const stakeTKN = async () => {
    try {
      if (stkTKN < TOKEN.MINSTAKE) {
        setStkError(true);
        return;
      } else {
        setStkError(false);
      }

      var gasFee = await token.Contract.estimateGas.stake(stkTKN, {
        from: wallet.Acct,
      });
      const gasAmt = parseFloat(gasFee.toString());

      console.log('GAS:', gasAmt);

      var stake = await token.Contract.stake(stkTKN, {
        from: wallet.Acct,
        gasLimit: gasAmt,
      })
        .then((res) => {
          console.log(res);
          setTimeout(getStkBalance, 3000);
          setTimeout(() => trigStake({ Addr: wallet.Acct }), 3000);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      alert('Try Again Later!');
    }
  };

  const unstakeTKN = async () => {
    var gasFee = await token.Contract.estimateGas.unstake(utkTKN, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());

    console.log('GAS:', gasAmt);

    var stake = await token.Contract.unstake(utkTKN, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStkBalance, 3000);
        setTimeout(() => trigUnstake({ Addr: wallet.Acct }), 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const claimTKN = async () => {
    try {
      var gasFee = await token.Contract.estimateGas.claim({
        from: wallet.Acct,
      });
      const gasAmt = parseFloat(gasFee.toString());

      console.log('GAS:', gasAmt);

      var claim = await token.Contract.claim({
        from: wallet.Acct,
        gasLimit: gasAmt,
      })
        .then((res) => {
          console.log(res);
          setTimeout(getStkBalance, 3000);
          setTimeout(() => trigClaim({ Addr: wallet.Acct }), 3000);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      alert('Try again later!');
    }
  };

  // const bord = {
  //   border: "1px solid rgba(0, 0, 0, 0.5)",
  // };

  return (
    <div className="row">
      <DashTop wallet={wallet} token={token} uncTKN={uncTKN} />

      <div className="col-xl-4 col-xxl-12">
        <div className="card">
          <div className="card-header d-sm-flex d-block pb-0 border-0">
            <div>
              <h4 className="fs-20 text-black">Stake ${TOKEN.CODE}</h4>
              <p className="mb-0 fs-12">
                Staked amount will generate rewards immediately
              </p>
              {/* <p className="mb-0 fs-12">{TOKEN.RWDTXT}</p> */}
            </div>
            <div className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
              {TOKEN.RWDTXT}
            </div>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form className="form-wrapper">
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {TOKEN.CODE} Balance
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="0,000000"
                      value={token.TknBal}
                      readOnly
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Fee (1%)</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0,000000"
                    />
                  </div>
                </div> */}
                <div className="form-group">
                  <div
                    className="input-group input-group-lg"
                    style={{ border: StkError ? '1px solid red' : null }}
                  >
                    <div className="input-group-prepend">
                      <span className="input-group-text">Amount to Stake</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0,000000"
                      value={stkTKN}
                      onChange={async (e) => {
                        let tkn = parseInt(e.target.value);
                        setStkTKN(tkn);
                        setStkError(tkn < TOKEN.MINSTAKE ? true : false);
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => {
                          setStkTKN(parseInt(token.TknBal));
                        }}
                      >
                        Max
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="d-flex justify-content-between pb-0 border-0 col-12">
                    {StkError ? (
                      <div className="d-block mt-3 mb-0 text-danger">
                        Minimum is {TOKEN.MINSTAKE}
                      </div>
                    ) : (
                      <div className="d-block mt-3 mb-0">{TOKEN.RWDTXT}</div>
                    )}

                    <div className=" d-block mt-3 mt-sm-0 mb-0">
                      <Button
                        className="mr-2"
                        variant="primary btn-rounded"
                        onClick={stakeTKN}
                      >
                        <span className="btn-icon-left text-primary">
                          <i className="fa fa-plus color-success" />
                        </span>
                        STAKE ${TOKEN.CODE}
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex mt-3">
                  <div className="custom-control custom-checkbox mr-3 mt-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox1"
                      required
                    />
                    <label
                      className="custom-control-label"
                      ap
                      htmlFor="customCheckBox1"
                    />
                  </div>
                  <p className="mb-0">Agree to terms of Staking</p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-4 col-xxl-12">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-sm-flex d-block pb-0 border-0">
                <div>
                  <h4 className="fs-20 text-black">Current Info</h4>
                  {/* <p className="mb-0 fs-12">
                    Unstaked amount will be available immediately
                  </p> */}
                </div>
                <div className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                  Staking
                </div>
              </div>
              <div className="card-body">
                {/* <div className="testimonial-one px-4 owl-right-nav owl-carousel owl-loaded owl-drag">
                  <QuickTransferSlider />
                </div> */}
                <div className="amount-bx">
                  <label>Amount Staked</label>
                  <input
                    type="number"
                    className="form-control"
                    value={token.StkAmt.toFixed(TOKEN.DECSHOW)}
                    // placeholder={token.StkAmt.toFixed(TOKEN.DECSHOW)}
                    readOnly
                  />
                  {/* </div>
                <div className="amount-bx"> */}
                  <label>Reward Unclaimed</label>
                  <input
                    type="number"
                    className="form-control"
                    value={uncTKN.toFixed(TOKEN.DECSHOW)}
                    // placeholder={token.UncAmt + uncTKN}
                    readOnly
                  />
                </div>
                <Link
                  to="#"
                  className="btn btn-primary d-block btn-lg text-uppercase"
                  onClick={claimTKN}
                >
                  CLAIM ${TOKEN.CODE} REWARDS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-xxl-12">
        <div className="card">
          <div className="card-header d-sm-flex d-block pb-0 border-0">
            <div>
              <h4 className="fs-20 text-black">UnStake ${TOKEN.CODE}</h4>
              <p className="mb-0 fs-12">
                Unstaked amount will be available immediately
              </p>
            </div>
            <div className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
              Unstake
            </div>
          </div>
          <div className="card-body">
            <div className="basic-form">
              <form className="form-wrapper">
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {TOKEN.CODE} Staked
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="0,000000"
                      value={token.StkAmt.toFixed(TOKEN.DECSHOW)}
                      readOnly
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Fee (1%)</span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0,000000"
                    />
                  </div>
                </div> */}
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        Amount to Unstake
                      </span>
                    </div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0,000000"
                      value={utkTKN}
                      onChange={async (e) => {
                        let tkn = parseInt(
                          parseFloat(e.target.value).toFixed(TOKEN.DECSHOW)
                        );
                        setUtkTKN(tkn);
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => {
                          setUtkTKN(
                            parseInt(token.StkAmt.toFixed(TOKEN.DECSHOW))
                          );
                        }}
                      >
                        Max
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="d-flex justify-content-between pb-0 border-0 col-12">
                    <div className="d-block mt-3 mb-0">
                      <p className="mb-0 fs-12">
                        5% fee if staking less than 2 weeks
                      </p>
                    </div>

                    <div className=" d-block mt-3 mt-sm-0 mb-0">
                      <Button
                        className="mr-2"
                        variant="primary btn-rounded"
                        onClick={unstakeTKN}
                      >
                        <span className="btn-icon-left text-primary">
                          <i className="fa fa-plus color-success" />
                        </span>
                        UNSTAKE ${TOKEN.CODE}
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex mt-3">
                  <div className="custom-control custom-checkbox mr-3 mt-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox1"
                      required
                    />
                    <label
                      className="custom-control-label"
                      ap
                      htmlFor="customCheckBox1"
                    />
                  </div>
                  <p className="mb-0">Agree to terms of Staking</p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
