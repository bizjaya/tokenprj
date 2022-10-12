import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import PageTitle from '../../layouts/PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TOKEN } from '../../../jsx/constants';
import { utils } from 'ethers';

import * as statzActions from '../../../redux/statzActions.js';

const Statz = () => {
  const sta = useSelector((state) => state);
  const web3 = useSelector((state) => state.wallet.Web3);
  const wallet = useSelector((state) => state.wallet);
  const OWNZER = process.env.REACT_APP_OWNZER;

  const token = useSelector((state) => state.token);

  const [Sale1, setSale1] = useState(0);
  const [Sale2, setSale2] = useState(0);
  const [Sale3, setSale3] = useState(0);
  const [Sale4, setSale4] = useState(0);

  const [Active, setActive] = useState(false);
  const [CapAdd, setCapAdd] = useState(false);
  const [CapAmt, setCapAmt] = useState(0);
  const [Password, setPassword] = useState('');

  const [LimAdd, setLimAdd] = useState(false);
  const [LimAmt, setLimAmt] = useState(0);

  const [PrcAmt, setPrcAmt] = useState(0);

  const [StkAdd, setStkAdd] = useState(false);
  const [StkAmt, setStkAmt] = useState(0);

  const [RwdAdd, setRwdAdd] = useState(false);
  const [RwdAmt, setRwdAmt] = useState(0);

  const [StkDis, setStkDis] = useState(false);
  const [ClmDis, setClmDis] = useState(false);

  const statz = useSelector((state) => state.statz);

  const st = statz.Stat;

  const dispatch = useDispatch();
  const { updStatz, updSaleCon, updDetails } = bindActionCreators(
    statzActions,
    dispatch
  );

  useEffect(async () => {
    // console.log(token.SaleContract);

    if (token.SaleContract != null) {
      await getStatz();
      await getSpclBal();
    }
  }, [token.SaleContract]);

  const getStatz = async () => {
    var data = await token.SaleContract.stats();
    // console.log(data);

    var objs = data.map(function (x) {
      return {
        num: parseFloat(x[0].toString()),
        name: utils.parseBytes32String(x[1]).replace(/\0/g, ''),
        rate: parseFloat(
          1 / (parseInt(parseFloat(x[2].toString())) / Math.pow(10, 2))
        ),
        cap: parseFloat(x[3].toString()),
        active: parseFloat(x[4].toString()),
        sold: parseFloat(x[5].toString()),
        lim: parseFloat(x[6].toString()),
      };
    });
    // console.log(objs);
    updStatz(objs);
    setSale1(1);
    setSale2(1);
    setSale3(1);
    setSale4(1);
  };

  const getSpclBal = async () => {
    var data = await token.Contract.getSpclBal({ from: wallet.Acct });
    // console.log(data);
    let StakerBal = window.frwei(parseFloat(data[0].toString()), TOKEN.DECIMAL);
    let RewarderBal = window.frwei(
      parseFloat(data[1].toString()),
      TOKEN.DECIMAL
    );
    let FeeAddrBal = window.frwei(
      parseFloat(data[2].toString()),
      TOKEN.DECIMAL
    );

    // console.log(StakerBal, ' ', RewarderBal);
    let StkDisabled = data[3];
    let ClmDisabled = data[4];

    setStkDis(StkDisabled);
    setClmDis(ClmDisabled);

    updDetails({
      StakerBal,
      RewarderBal,
      FeeAddrBal,
      StkDisabled,
      ClmDisabled,
    });
  };

  const startStop = async () => {
    console.log(Sale1);
    if (Sale1 == 0) return;

    var gasFee = await statz.SaleContract.estimateGas.startStop(Sale1, Active, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await statz.SaleContract.startStop(Sale1, Active, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStatz, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addMinCap = async () => {
    if (Sale2 == 0 || CapAmt == 0) return;

    var gasFee = await statz.SaleContract.estimateGas.addMinCap(
      Sale2,
      CapAmt,
      CapAdd,
      { from: wallet.Acct }
    );
    const gasAmt = parseFloat(gasFee.toString());

    console.log('GAS:', gasAmt);

    var exec = await statz.SaleContract.addMinCap(Sale2, CapAmt, CapAdd, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStatz, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addMinLim = async () => {
    if (Sale3 == 0 || LimAmt == 0) return;

    var gasFee = await statz.SaleContract.estimateGas.addMinLim(
      Sale3,
      LimAmt,
      LimAdd,
      { from: wallet.Acct }
    );
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await statz.SaleContract.addMinLim(Sale3, LimAmt, LimAdd, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStatz, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const stakerAdj = async () => {
    console.log(StkAmt, ' ', StkAdd);
    if (StkAmt == 0) return;

    var gasFee = await token.Contract.estimateGas.stakerAdj(StkAmt, StkAdd, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await token.Contract.stakerAdj(StkAmt, StkAdd, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getSpclBal, 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rewarderAdj = async () => {
    if (RwdAmt == 0) return;

    var gasFee = await token.Contract.estimateGas.rewarderAdj(RwdAmt, RwdAdd, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await token.Contract.rewarderAdj(RwdAmt, RwdAdd, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getSpclBal, 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const stkStatus = async () => {
    var gasFee = await token.Contract.estimateGas.stkStatus(StkDis, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await token.Contract.stkStatus(StkDis, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getSpclBal, 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const clmStatus = async () => {
    var gasFee = await token.Contract.estimateGas.clmStatus(ClmDis, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await token.Contract.clmStatus(ClmDis, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getSpclBal, 3000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const chgPrc = async () => {
    if (Sale4 == 0 || PrcAmt == 0) return;

    var gasFee = await statz.SaleContract.estimateGas.chgPrc(Sale4, PrcAmt, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await statz.SaleContract.chgPrc(Sale4, PrcAmt, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStatz, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const endSale = async () => {
    var gasFee = await statz.SaleContract.estimateGas.endSale(Password, {
      from: wallet.Acct,
    });
    const gasAmt = parseFloat(gasFee.toString());
    console.log('GAS:', gasAmt);

    var exec = await statz.SaleContract.endSale(Password, {
      from: wallet.Acct,
      gasLimit: gasAmt,
    })
      .then((res) => {
        console.log(res);
        setTimeout(getStatz, 5000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const canShow = OWNZER.toUpperCase() === wallet?.Acct.toUpperCase();
  return (
    <Fragment>
      <PageTitle activeMenu="Statz" pageContent="Statz" motherMenu="Statz" />
      {!canShow ? (
        <></>
      ) : (
        <div className="btn-page">
          <Row>
            <Col lg="12">
              <Card>
                <Card.Header className="d-block">
                  <Card.Title>Statistics</Card.Title>
                  <Card.Text className="mb-0 subtitle">Statistics</Card.Text>
                </Card.Header>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-1">
                      <h4 className="text-black">No</h4>
                      <h4 className="">{st[0]['num']}</h4>
                      <h4 className="">{st[1]['num']}</h4>
                      <h4 className="">{st[2]['num']}</h4>
                      <h4 className="">{st[3]['num']}</h4>
                      <h4 className="">{st[4]['num']}</h4>
                    </div>
                    <div className="col-lg-2">
                      <h4 className="text-black">Name</h4>
                      <h4 className="">{st[0]['name']}</h4>
                      <h4 className="">{st[1]['name']}</h4>
                      <h4 className="">{st[2]['name']}</h4>
                      <h4 className="">{st[3]['name']}</h4>
                      <h4 className="">{st[4]['name']}</h4>
                    </div>
                    <div className="col-lg-3">
                      <h4 className="text-black">Rate</h4>
                      <h4 className="">{st[0]['rate']}</h4>
                      <h4 className="">{st[1]['rate']}</h4>
                      <h4 className="">{st[2]['rate']}</h4>
                      <h4 className="">{st[3]['rate']}</h4>
                      <h4 className="">{st[4]['rate']}</h4>
                    </div>

                    <div className="col-lg-2">
                      <h4 className="text-black">MaxCap</h4>
                      <h4 className="">{st[0]['cap']}</h4>
                      <h4 className="">{st[1]['cap']}</h4>
                      <h4 className="">{st[2]['cap']}</h4>
                      <h4 className="">{st[3]['cap']}</h4>
                      <h4 className="">{st[4]['cap']}</h4>
                    </div>
                    <div className="col-lg-1">
                      <h4 className="text-black">Live</h4>
                      <h4 className="">{st[0]['active'] ? 'True' : 'False'}</h4>
                      <h4 className="">{st[1]['active'] ? 'True' : 'False'}</h4>
                      <h4 className="">{st[2]['active'] ? 'True' : 'False'}</h4>
                      <h4 className="">{st[3]['active'] ? 'True' : 'False'}</h4>
                      <h4 className="">{st[4]['active'] ? 'True' : 'False'}</h4>
                    </div>
                    <div className="col-lg-2">
                      <h4 className="text-black">Sold</h4>
                      <h4 className="">
                        {st[0]['sold']} ($) {st[0]['rate'] * st[0]['sold']}
                      </h4>
                      <h4 className="">
                        {st[1]['sold']} ($) {st[1]['rate'] * st[1]['sold']}
                      </h4>
                      <h4 className="">
                        {st[2]['sold']} ($) {st[2]['rate'] * st[2]['sold']}
                      </h4>
                      <h4 className="">
                        {st[3]['sold']} ($) {st[3]['rate'] * st[3]['sold']}
                      </h4>
                      <h4 className="">
                        {st[4]['sold']} ($) {st[4]['rate'] * st[4]['sold']}
                      </h4>
                    </div>
                    <div className="col-lg-1">
                      <h4 className="text-black">Limit</h4>
                      <h4 className="">{st[0]['lim']}</h4>
                      <h4 className="">{st[1]['lim']}</h4>
                      <h4 className="">{st[2]['lim']}</h4>
                      <h4 className="">{st[3]['lim']}</h4>
                      <h4 className="">{st[4]['lim']}</h4>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Start/Stop Sale</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Sale:</label>
                        <div className="col-sm-9">
                          <select
                            defaultValue={Sale1}
                            onChange={(e) => {
                              setSale1(e.target.value);
                            }}
                            className="form-control"
                            id="sel1"
                          >
                            <option value={st[0]['num']}>
                              {st[0]['name']}
                            </option>
                            <option value={st[1]['num']}>
                              {st[1]['name']}
                            </option>
                            <option value={st[2]['num']}>
                              {st[2]['name']}
                            </option>
                            <option value={st[3]['num']}>
                              {st[3]['name']}
                            </option>
                            <option value={st[4]['num']}>
                              {st[4]['name']}
                            </option>
                          </select>
                        </div>
                      </div>
                      <fieldset className="form-group">
                        <div className="row">
                          <label className="col-form-label col-sm-3 pt-0">
                            Start / Stop
                          </label>
                          <div className="col-sm-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                value={false}
                                defaultChecked
                                onChange={(e) => {
                                  setActive(false);
                                }}
                              />
                              <label className="form-check-label">Stop</label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                value={true}
                                onChange={(e) => {
                                  setActive(true);
                                }}
                              />
                              <label className="form-check-label">Start</label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div className="form-group row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                          <button
                            type="submit"
                            onClick={() => startStop()}
                            className="btn btn-primary"
                          >
                            {Active ? 'START' : 'STOP'}{' '}
                            {st.find((x) => x.num == Sale1)?.['name']}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add/Minus Max Cap</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Sale:</label>
                      <div className="col-sm-9">
                        <select
                          defaultValue={Sale2}
                          onChange={(e) => {
                            setSale2(e.target.value);
                          }}
                          className="form-control"
                          id="sel1"
                        >
                          <option value={st[0]['num']}>{st[0]['name']}</option>
                          <option value={st[1]['num']}>{st[1]['name']}</option>
                          <option value={st[2]['num']}>{st[2]['name']}</option>
                          <option value={st[3]['num']}>{st[3]['name']}</option>
                          <option value={st[4]['num']}>{st[4]['name']}</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amt"
                          value={CapAmt}
                          step="any"
                          onChange={(e) => {
                            setCapAmt(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Add / Minus
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="MaxCapAdd"
                              value={false}
                              defaultChecked
                              onChange={(e) => {
                                setCapAdd(false);
                              }}
                            />
                            <label className="form-check-label">Minus</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="MaxCapAdd"
                              value={true}
                              onChange={(e) => {
                                setCapAdd(true);
                              }}
                            />
                            <label className="form-check-label">Add</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => addMinCap()}
                          className="btn btn-primary"
                        >
                          {CapAdd ? 'ADD' : 'MINUS'}{' '}
                          {st.find((x) => x.num == Sale2)?.['name']}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add/Minus Max Limit</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Sale:</label>
                      <div className="col-sm-9">
                        <select
                          defaultValue={Sale3}
                          onChange={(e) => {
                            setSale3(e.target.value);
                          }}
                          className="form-control"
                          id="sel1"
                        >
                          <option value={st[0]['num']}>{st[0]['name']}</option>
                          <option value={st[1]['num']}>{st[1]['name']}</option>
                          <option value={st[2]['num']}>{st[2]['name']}</option>
                          <option value={st[3]['num']}>{st[3]['name']}</option>
                          <option value={st[4]['num']}>{st[4]['name']}</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amt"
                          value={LimAmt}
                          step="any"
                          onChange={(e) => {
                            setLimAmt(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Add / Minus
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="MaxLimAdd"
                              value={false}
                              defaultChecked
                              onChange={(e) => {
                                setLimAdd(false);
                              }}
                            />
                            <label className="form-check-label">Minus</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="MaxLimAdd"
                              value={true}
                              onChange={(e) => {
                                setLimAdd(true);
                              }}
                            />
                            <label className="form-check-label">Add</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => addMinLim()}
                          className="btn btn-primary"
                        >
                          {LimAdd ? 'ADD' : 'MINUS'}{' '}
                          {st.find((x) => x.num == Sale3)?.['name']}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Chg Prc</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Sale:</label>
                      <div className="col-sm-9">
                        <select
                          defaultValue={Sale4}
                          onChange={(e) => {
                            setSale4(e.target.value);
                          }}
                          className="form-control"
                          id="sel1"
                        >
                          <option value={st[0]['num']}>{st[0]['name']}</option>
                          <option value={st[1]['num']}>{st[1]['name']}</option>
                          <option value={st[2]['num']}>{st[2]['name']}</option>
                          <option value={st[3]['num']}>{st[3]['name']}</option>
                          <option value={st[4]['num']}>{st[4]['name']}</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amt"
                          value={PrcAmt}
                          step="any"
                          onChange={(e) => {
                            setPrcAmt(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => chgPrc()}
                          className="btn btn-primary"
                        >
                          Chg Price
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Adjust Staker Balance</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Balance:
                      </label>
                      <div className="col-sm-9">{statz.StakerBal}</div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amt"
                          value={StkAmt}
                          step="any"
                          onChange={(e) => {
                            setStkAmt(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Add / Minus
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="StkAdd"
                              value={false}
                              defaultChecked
                              onChange={(e) => {
                                setStkAdd(false);
                              }}
                            />
                            <label className="form-check-label">Minus</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="StkAdd"
                              value={true}
                              onChange={(e) => {
                                setStkAdd(true);
                              }}
                            />
                            <label className="form-check-label">Add</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => stakerAdj()}
                          className="btn btn-primary"
                        >
                          {StkAdd ? 'ADD' : 'MINUS'} STAKER BAL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Adjust Rewarder Balance</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Balance:
                      </label>
                      <div className="col-sm-9">{statz.RewarderBal}</div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Amount</label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amt"
                          value={RwdAmt}
                          step="any"
                          onChange={(e) => {
                            setRwdAmt(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Add / Minus
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="RwdAdd"
                              value={false}
                              defaultChecked
                              onChange={(e) => {
                                setRwdAdd(false);
                              }}
                            />
                            <label className="form-check-label">Minus</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="RwdAdd"
                              value={true}
                              onChange={(e) => {
                                setRwdAdd(true);
                              }}
                            />
                            <label className="form-check-label">Add</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => rewarderAdj()}
                          className="btn btn-primary"
                        >
                          {RwdAdd ? 'ADD' : 'MINUS'} REWARDER BAL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Staking / Claiming Status</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Staking Status
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="StkDis"
                              value={true}
                              checked={StkDis}
                              onChange={(e) => {
                                setStkDis(true);
                              }}
                            />
                            <label className="form-check-label">Disabled</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="StkDis"
                              checked={!StkDis}
                              value={false}
                              onChange={(e) => {
                                setStkDis(false);
                              }}
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => stkStatus()}
                          className="btn btn-primary"
                        >
                          Change Staking Status
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="basic-form">
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          Claiming Status
                        </label>
                        <div className="col-sm-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="ClmDis"
                              value={true}
                              checked={ClmDis}
                              onChange={(e) => {
                                setClmDis(true);
                              }}
                            />
                            <label className="form-check-label">Disabled</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="ClmDis"
                              checked={!ClmDis}
                              value={false}
                              onChange={(e) => {
                                setClmDis(false);
                              }}
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => clmStatus()}
                          className="btn btn-primary"
                        >
                          Change Claiming Status
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="basic-form">
                    <fieldset className="form-group">
                      <div className="row">
                        <label className="col-form-label col-sm-3 pt-0">
                          End Sale
                        </label>
                      </div>
                    </fieldset>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">
                        Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          value={Password}
                          step="any"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => endSale()}
                          className="btn btn-primary"
                        >
                          END SALE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Col lg="12">
            <Card>
              <Card.Header className="d-block">
                <Card.Title>Buttons</Card.Title>
                <Card.Text className="mb-0 subtitle">
                  Button Light style
                </Card.Text>
              </Card.Header>
              <div className="card-body">
                <Button className="mr-2" variant="primary light">
                  Primary
                </Button>
                <Button className="mr-2" variant="secondary light">
                  Secondary
                </Button>
                <Button className="mr-2" variant="success light btn-sm">
                  Success
                </Button>
                <Button className="mr-2" variant="danger light">
                  Danger
                </Button>
                <Button className="mr-2" variant="warning light">
                  Warning
                </Button>
                <Button className="mr-2" variant="info light">
                  Info
                </Button>
                <Button className="mr-2" variant="light light">
                  Light
                </Button>
                <Button variant="dark light">Dark</Button>
              </div>
            </Card>
          </Col> */}
          </Row>
        </div>
      )}
    </Fragment>
  );
};

export default Statz;
