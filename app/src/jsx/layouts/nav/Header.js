import React, { useState, useEffect } from 'react';
// import Web3 from "web3";
// import Web3 from "web3";
// import { useWeb3React } from '@web3-react/core';

// import useWeb3 from "./useWeb3";
import useWeb3Modal from './useWeb3Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import * as walletActions from '../../../redux/walletActions.js';
import * as tokenActions from '../../../redux/tokenActions.js';

import apiService from '../../../services/ApiService';
import { URL, setCookie, getCookie } from '../../../services/API';
import { TOKEN } from '../../constants';

import { Link } from 'react-router-dom';
/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar';

/// Image
import profile from '../../../images/profile/pic1.jpg';
import avatar from '../../../images/avatar/1.jpg';
import { Alert, Dropdown, Button, Modal } from 'react-bootstrap';

const Header = ({ onNote }) => {
  var pathname = window.location.pathname;
  var path = pathname.split('/');
  var name = path[path.length - 1].split('-');
  // var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = !path.includes('ref') ? name : [];

  // const [provider, setProvider] = useState(null);
  // const [web3, setWeb3] = useState(null);

  // const providerUrl = process.env.PROVIDER_URL || "http://localhost:7545";
  //const { connect, chnid, netid, acct, web3, provider } = useWeb3();
  const { conMM, conWC, active, account, logoff, chainId } = useWeb3Modal();

  // const { account, activate, active, chainId, error, library } = useWeb3React();

  const dispatch = useDispatch();
  const { usrDetails, delWallet, getUsrDetails, regUser } = bindActionCreators(
    walletActions,
    dispatch
  );
  const { delToken } = bindActionCreators(tokenActions, dispatch);

  const wallet = useSelector((state) => state.wallet);
  const token = useSelector((state) => state.token);

  //console.log(wallet);
  // console.log(token);

  const [regModal, setRegModal] = useState(false);
  const [refId, setRefId] = useState(0);
  const [noRef, setNoRef] = useState(false);
  const [regErrorTxt, setRegErrorTxt] = useState(null);

  const ckeRef = getCookie(TOKEN.COOKIE);
  useEffect(() => {
    if (window.valid(ckeRef)) {
      setRefId(ckeRef);
    }
  }, []);

  var ref = pathname.match(/ref\/([\d]*)\/*$/);
  if (
    (window.valid(ref?.[1]) && window.invalid(ckeRef)) ||
    (window.valid(ref?.[1]) && window.valid(ckeRef) && ckeRef != ref?.[1])
  ) {
    console.log(ref[1]);
    setCookie(TOKEN.COOKIE, ref[1], 1000);
    setRefId(ref[1]);
  }

  const connectMM = async () => {
    await conMM();

    // .then((res) => {
    //   // setAcct(accounts[0]);
    //   console.log("ACCOUNT:", res);
    //   if (window.valid(res) && res !== "") {
    //     getUsrDetails({ Id: res }, setRegModal);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  useEffect(() => {
    if (window.valid(account) && account !== '') {
      getUsrDetails({ Id: account }, setRegModal);
    }
  }, [account]);

  const connectWC = async () => {
    console.log('wtf ');

    await conWC().catch((x) => {
      console.log('wtf ');
    });

    // .then((res) => {
    //   console.log("ACCOUNT:", res);

    //   if (window.valid(res) && res !== "") {
    //     getUsrDetails({ Id: res }, setRegModal);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  const disconnect = () => {
    logoff();
    delWallet();
    delToken();
  };

  const register = () => {
    console.log(refId, ' ', wallet.Acct);

    regUser({ RefId: noRef ? null : refId, Addr: wallet.Acct }, setRegModal);
  };

  const trunc = (str, s, e) =>
    str.substring(0, s).toUpperCase() + '...' + str.slice(-e).toUpperCase();

  // console.log(wallet.Acct);
  // console.log(wallet.Valid);

  // console.log(finalName.join(" "));

  const showLogin = wallet.Valid && !active;
  const showLogout = wallet.Acct != '' && wallet.Valid && wallet.IsReg;
  const showNoAcct = wallet.Acct != '' && wallet.Valid && !wallet.IsReg;

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: 'capitalize' }}
              >
                {finalName.join(' ').length === 0
                  ? 'Dashboard'
                  : finalName.join(' ') === 'dashboard dark'
                  ? 'Dashboard'
                  : finalName.join(' ')}
              </div>
            </div>

            <ul className="navbar-nav header-right">
              {/* <li className="nav-item">
                <div className="input-group search-area d-xl-inline-flex d-none">
                  <div className="input-group-append">
                    <button className="input-group-text">
                      <i className="flaticon-381-search-2" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search lol..."
                  />
                </div>
              </li> */}

              <li className="nav-item">
                {showLogout ? (
                  <>
                    {/* {chnid} {netid}
                    {acct} */}
                    <Button
                      className="mr-2"
                      variant="success light btn-sm"
                      onClick={() => disconnect()}
                    >
                      {trunc(wallet.Acct, 6, 6)}{' '}
                      <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                    </Button>

                    {/* <Button
                      className="mr-2"
                      variant="info light btn-sm"
                      onClick={() => disconnect()}
                    >
                      <svg
                        id="icon-logout"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-danger"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span className="ml-2"></span>
                    </Button> */}
                  </>
                ) : showLogin ? (
                  <>
                    <Button
                      className="mr-2"
                      variant="info light btn-sm"
                      onClick={() => connectMM()}
                    >
                      MM
                    </Button>
                    <Button
                      className="mr-2"
                      variant="info light btn-sm"
                      onClick={() => connectWC()}
                    >
                      WC
                    </Button>
                  </>
                ) : showNoAcct ? (
                  <Button
                    className="mr-2"
                    variant="alert light btn-sm"
                    onClick={() => setRegModal(true)}
                  >
                    No Acct
                  </Button>
                ) : !wallet.Valid ? (
                  <Button
                    className="mr-2"
                    variant="danger light btn-sm"
                    onClick={connectMM}
                  >
                    Wrong Network
                  </Button>
                ) : (
                  <></>
                )}
              </li>

              <Modal className="fade" show={regModal}>
                <Modal.Header>
                  <Modal.Title>Registration</Modal.Title>
                  <Button
                    onClick={() => setRegModal(false)}
                    variant=""
                    className="close"
                  >
                    <span>&times;</span>
                  </Button>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group input-group-lg input-primary">
                    {/* {regErrorTxt !== "" ? (
                      <Alert
                        variant="danger"
                        className="alert-dismissible fade show"
                      >
                        <strong>{regErrorTxt}</strong>
                        <Button
                          variant=""
                          className={`close h-100`}
                          ata-dismiss="alert"
                          aria-label="Close"
                          onClick={() => {}}
                        >
                          <span>
                            <i className="mdi mdi-close"></i>
                          </span>
                        </Button>
                      </Alert>
                    ) : (
                      <></>
                    )} */}

                    <div className="input-group-prepend">
                      <span className="input-group-text">Your Referrer: </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Referral ID"
                      value={noRef ? '' : refId}
                      onChange={async (e) => {
                        setRefId(e.target.value);
                      }}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="custom-control custom-checkbox checkbox-warning check-xl">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheckBox9"
                      required
                      value={noRef}
                      onChange={async (e) => {
                        setNoRef(!noRef);
                      }}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckBox9"
                    >
                      No Referrer
                    </label>
                  </div>
                  <Button
                    onClick={() => setRegModal(false)}
                    variant="danger light"
                  >
                    Close
                  </Button>
                  <Button variant="primary" onClick={register}>
                    Link Account
                  </Button>
                </Modal.Footer>
              </Modal>

              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link i-false c-pointer"
                  // href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  {' '}
                  {wallet.IsReg ? (
                    <Button className="mr-2" variant="info light btn-sm">
                      <b className="text-black">{wallet.UsrId}</b>
                    </Button>
                  ) : (
                    <>
                      <span>{wallet.UsrId}</span>
                      <small>unknown</small>
                    </>
                  )}
                  {/* <img
                    src={profile}
                    width={20}
                    alt
                    className="d-xl-block d-lg-block d-md-none d-sm-none d-xs-none d-none"
                  /> */}
                  <div className="header-info"></div>
                </Dropdown.Toggle>
              </Dropdown>
              {/* <Dropdown
                as="li"
                className="nav-item dropdown notification_dropdown "
              >
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link  ai-icon i-false c-pointer"
                  // href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="flaticon-381-ring" />
                  <div className="pulse-css" />
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" className="mt-2">
                  <PerfectScrollbar className="widget-media dz-scroll p-3 height380 ps">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <img alt="images" width={50} src={avatar} />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-info">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-success">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <img alt="image" width={50} src={avatar} />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-danger">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-primary">
                            <i className="fa fa-home" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </PerfectScrollbar>
                  <Link className="all-notification" to="#">
                    See all notifications <i className="ti-arrow-right" />
                  </Link>
                </Dropdown.Menu>
              </Dropdown> */}

              {/*<Dropdown
                as="li"
                className="nav-item dropdown notification_dropdown "
              >
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link bell bell-link i-false c-pointer"
                  onClick={() => onNote()}
                >
                  <i className="flaticon-381-pad" />

                  <div className="pulse-css" />
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown
                as="li"
                className="nav-item dropdown notification_dropdown "
              >
                <Dropdown.Toggle
                  className="nav-link i-false c-pointer"
                  variant=""
                  as="a"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="flaticon-381-gift" />

                  <div className="pulse-css" />
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" className="mt-2">
                  <PerfectScrollbar className="widget-timeline dz-scroll style-1 ps p-3 height370">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge primary" />
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>10 minutes ago</span>
                          <h6 className="mb-0">
                            Youtube, a video-sharing website, goes live{" "}
                            <strong className="text-primary">$500</strong>.
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge info"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            New order placed{" "}
                            <strong className="text-info">#XF-2356.</strong>
                          </h6>
                          <p className="mb-0">
                            Quisque a consequat ante Sit amet magna at
                            volutapt...
                          </p>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge danger"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>30 minutes ago</span>
                          <h6 className="mb-0">
                            john just buy your product{" "}
                            <strong className="text-warning">Sell $250</strong>
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge success"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>15 minutes ago</span>
                          <h6 className="mb-0">
                            StumbleUpon is acquired by eBay.{" "}
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge warning"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge dark"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </Link>
                      </li>
                    </ul>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </PerfectScrollbar>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link i-false c-pointer"
                  // href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <img src={profile} width={20} alt />
                  <div className="header-info">
                    <span>Johndoe</span>
                    <small>Super Admin</small>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu align="right" className="mt-2">
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ml-2">Profile </span>
                  </Link>
                  <Link to="/email-inbox" className="dropdown-item ai-icon">
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="ml-2">Inbox </span>
                  </Link>
                  <Link to="/page-login" className="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>
                    <span className="ml-2">Logout </span>
                  </Link>
                </Dropdown.Menu>
              </Dropdown> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
