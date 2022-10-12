import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import emojis from "./emojis";

import { Dropdown, Nav, Tab, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import Donut from "./Donut";
import RewardSlider from "./RewardSlider";
import * as referralActions from "../../../redux/referralActions.js";
import { TOKEN, SALES } from "../../constants";

const PieChart = loadable(() =>
  pMinDelay(import("../kripton/MyWallets/PieChart"), 1000)
);
const CoinChart = loadable(() =>
  pMinDelay(import("../kripton/MyWallets/CoinChart"), 1000)
);

const RefRewards = () => {
  const saleNum = process.env.REACT_APP_CURSALE;
  const SALE = SALES.find((x) => x.num == saleNum);

  const reflink = useRef("");

  const { background } = useContext(ThemeContext);
  const [activeToggle, setActiveToggle] = useState("primary");
  const [crrency1, setCrrency1] = useState("Monthly (2021)");
  const [crrency2, setCrrency2] = useState("Monthly (2021)");
  const [crrency3, setCrrency3] = useState("Monthly (2021)");
  const [crrency4, setCrrency4] = useState("Monthly (2021)");

  const sta = useSelector((state) => state);
  console.log(sta);

  const wallet = useSelector((state) => state.wallet);
  const ref = useSelector((state) => state.referral.Comm);
  // console.log(ref);

  const [RefUnc, setRefUnc] = useState(ref.RefUnc);
  const [RefClaimed, setRefClaimed] = useState(false);

  const [PoolUnc, setPoolUnc] = useState(ref.PoolUnc);
  const [PoolClaimed, setPoolClaimed] = useState(false);

  const dispatch = useDispatch();
  const { getComm, claimRef, claimPool } = bindActionCreators(
    referralActions,
    dispatch
  );

  const [Lev1ComPct, setLev1ComPct] = useState(0);
  const [Lev2ComPct, setLev2ComPct] = useState(0);
  const [Lev3ComPct, setLev3ComPct] = useState(0);
  const [Lev4ComPct, setLev4ComPct] = useState(0);
  const [Lev5ComPct, setLev5ComPct] = useState(0);

  useEffect(async () => {
    if (window.notempty(wallet.Acct)) {
      getComm({ Id: wallet.Acct });
    }
  }, [wallet.Acct]);

  useEffect(async () => {
    let lev1 = ((ref.TQ_1 / ref.TA_1) * 100).toFixed(2);
    let lev2 = ((ref.TQ_2 / ref.TA_2) * 100).toFixed(2);
    let lev3 = ((ref.TQ_3 / ref.TA_3) * 100).toFixed(2);
    let lev4 = ((ref.TQ_4 / ref.TA_4) * 100).toFixed(2);
    let lev5 = ((ref.TQ_5 / ref.TA_5) * 100).toFixed(2);

    setLev1ComPct(isNaN(lev1) ? 0 : lev1);
    setLev2ComPct(isNaN(lev2) ? 0 : lev2);
    setLev3ComPct(isNaN(lev3) ? 0 : lev3);
    setLev4ComPct(isNaN(lev4) ? 0 : lev4);
    setLev5ComPct(isNaN(lev5) ? 0 : lev5);

    setRefUnc(ref.RefUnc);
    setPoolUnc(ref.PoolUnc);
  }, [ref]);

  const claimRefCom = async () => {
    claimRef({ Addr: wallet.Acct, Amount: RefUnc }).then((res) => {
      if (res === 1) {
        setRefClaimed(true);
        refresh();
        setTimeout(() => setRefClaimed(false), 5000);
      } else {
        alert(res);
      }
    });
  };

  const claimPoolCom = async () => {
    claimPool({ Addr: wallet.Acct, Amount: PoolUnc }).then((res) => {
      if (res === 1) {
        setPoolClaimed(true);
        refresh();
        setTimeout(() => setPoolClaimed(false), 5000);
      } else {
        alert(res);
      }
    });
  };

  const refresh = () => {
    getComm({ Id: wallet.Acct });
  };

  return (
    <Fragment>
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

      <div className="cards-slider owl-carousel mb-4">
        <RewardSlider />
      </div>
      <div className="row">
        <div className="col-xl-12 mb-5">
          <div className="card">
            {/* <div className="card-header d-block d-sm-flex border-0 pb-0"></div> */}
            <div className="row px-4 pt-5 mb-0 pb-0">
              <div className="form-group col-lg-6 col-sm-12">
                <h3 className="mb-0 ml-3 text-black fs-30">
                  Referral Rewards by Levels
                </h3>
                <p className="mb-0 ml-3 fs-15">
                  Minimum withdrawal is USD10 equivalent {TOKEN.CODE} tokens &
                  subject to 10% withdrawal charges
                </p>
              </div>

              <div className="form-group col-lg-6 col-sm-12">
                {RefClaimed ? (
                  <Alert
                    variant="success"
                    className="alert-dismissible fade show text-left"
                  >
                    {emojis.success}
                    <strong>Transaction Sent</strong>
                    <Button
                      variant=""
                      className={`close ${true ? "h-100" : ""}`}
                      ata-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setRefClaimed(false)}
                    >
                      <span>
                        <i className="mdi mdi-close"></i>
                      </span>
                    </Button>
                  </Alert>
                ) : (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value={RefUnc}
                      onChange={(e) => {
                        setRefUnc(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-light" type="button">
                        ~ ${(SALE.rate * RefUnc).toFixed(2)}
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={claimRefCom}
                      >
                        Claim Rewards
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <hr />

            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">
                        Level 1 Commission
                      </p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Staking Value</h4>
                            <h4 className="">{ref.TS_1}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Accrued</h4>
                            <h4 className="">{ref.TA_1}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Qualified</h4>
                            <h4 className="">{ref.TQ_1}</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_1}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_1}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_1}</h4>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev1ComPct}
                              backgroundColor="#f04b47"
                            />
                            <small className="text-black">{Lev1ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                          {/* <span>$10,000</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">
                        Level 2 Commission
                      </p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Staking Value</h4>
                            <h4 className="">{ref.TS_2}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Accrued</h4>
                            <h4 className="">{ref.TA_2}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Qualified</h4>
                            <h4 className="">{ref.TQ_2}</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_2}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_2}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_2}</h4>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev2ComPct}
                              backgroundColor="#ff7214"
                            />

                            <small className="text-black">{Lev2ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">
                        Level 3 Commission
                      </p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Staking Value</h4>
                            <h4 className="">{ref.TS_3}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Accrued</h4>
                            <h4 className="">{ref.TA_3}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Qualified</h4>
                            <h4 className="">{ref.TQ_3}</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_3}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_3}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_3}</h4>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev3ComPct}
                              backgroundColor="#ffd014"
                            />

                            <small className="text-black">{Lev3ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">
                        Level 4 Commission
                      </p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Staking Value</h4>
                            <h4 className="">{ref.TS_4}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Accrued</h4>
                            <h4 className="">{ref.TA_4}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Qualified</h4>
                            <h4 className="">{ref.TQ_4}</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_4}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_4}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_4}</h4>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev4ComPct}
                              backgroundColor="#0dc966"
                            />
                            <small className="text-black">{Lev4ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">
                        Level 5 Commission
                      </p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Staking Value</h4>
                            <h4 className="">{ref.TS_5}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Accrued</h4>
                            <h4 className="">{ref.TA_5}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Qualified</h4>
                            <h4 className="">{ref.TQ_5}</h4>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_5}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_5}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_5}</h4>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev5ComPct}
                              backgroundColor="#00e3db"
                            />
                            <small className="text-black">{Lev5ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row px-4 pt-4 mb-0 pb-0">
              <div className="form-group col-lg-6 col-sm-12">
                <h3 className="mb-0 ml-3 text-black fs-30">Pool Rewards</h3>
                <p className="mb-0 ml-3 fs-15">
                  Stake 2,000,000 {TOKEN.CODE} tokens and above to enjoy Pool
                  Rewards (Subject to 10% withdrawal charges)
                </p>
              </div>

              <div className="form-group col-lg-6 col-sm-12">
                {PoolClaimed ? (
                  <Alert
                    variant="success"
                    className="alert-dismissible fade show text-left"
                  >
                    {emojis.success}
                    <strong>Transaction Sent</strong>
                    <Button
                      variant=""
                      className={`close ${true ? "h-100" : ""}`}
                      ata-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setPoolClaimed(false)}
                    >
                      <span>
                        <i className="mdi mdi-close"></i>
                      </span>
                    </Button>
                  </Alert>
                ) : (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value={PoolUnc}
                      onChange={(e) => {
                        setPoolUnc(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-light" type="button">
                        ~ ${(SALE.rate * PoolUnc).toFixed(2)}
                      </button>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={claimPoolCom}
                      >
                        Claim Rewards
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <hr />
            <div className="card-body">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-12">
                  <div className="card">
                    <div className="card-header d-block d-sm-flex border-0 pb-0">
                      <p className="mb-2 text-black fs-20">Pool Rewards</p>
                    </div>
                    <div className="card-body text-left ai-icon text-primary">
                      <div className="row">
                        <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed</h4>
                            <h4 className="">{ref.PoolUnc}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Total Rewards</h4>
                            <h4 className="">{ref.PoolRwd}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Total Paid</h4>
                            <h4 className="">{ref.PoolPaid}</h4>
                          </div>
                        </div>
                        {/* <div className="col-lg-4 col-sm-6">
                          <div className="mb-2">
                            <h4 className="text-black">Members </h4>
                            <h4 className="">{ref.TM_1}</h4>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-black">Unclaimed </h4>
                            <h4 className="">{ref.TU_1}</h4>
                          </div>

                          <div className="mb-2">
                            <h4 className="text-black">Paid </h4>
                            <h4 className="">{ref.TP_1}</h4>
                          </div>
                        </div> */}
                        {/* <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                          <div className="d-inline-block position-relative donut-chart-sale mb-3">
                            <Donut
                              value={Lev1ComPct}
                              backgroundColor="#f04b47"
                            />
                            <small className="text-black">{Lev1ComPct}%</small>
                          </div>
                          <h5 className="fs-18 text-black">
                            Qualified/Accrued
                          </h5>
                          <span>$10,000</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RefRewards;
