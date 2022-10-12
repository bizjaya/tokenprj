import loadable from "@loadable/component";
import "bootstrap-daterangepicker/daterangepicker.css";
import pMinDelay from "p-min-delay";
import React, { Fragment, useContext, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import btc from "../../../images/svg/btc.svg";
import desh from "../../../images/svg/dash.svg";
import eth from "../../../images/svg/eth.svg";
import ltc from "../../../images/svg/ltc.svg";

const MarketOverview = loadable(() =>
  pMinDelay(import("../kripton/CoinDetails/MarketOverview"), 1000)
);

const MarketOverviewDark = loadable(() =>
  pMinDelay(import("../kripton/CoinDetails/MarketOverviewDark"), 1000)
);
const CoinDetails = () => {
  const { background } = useContext(ThemeContext);
  const [crrency1, setCrrency1] = useState("USD ($ US Dollar)");
  const [crrency2, setCrrency2] = useState("USD ($ US Dollar)");
  const [crrency3, setCrrency3] = useState("USD ($ US Dollar)");
  const [crrency4, setCrrency4] = useState("USD ($ US Dollar)");
  return (
    <Fragment>
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            <Link to="/coin-details">Crypto</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/coin-details">Coin Details</Link>
          </li>
        </ol>
      </div>

      <Tab.Container defaultActiveKey="Dash">
        <div className="d-flex flex-wrap mb-3">
          <h4 className="fs-24 text-black mr-auto font-w600 mb-3">
            Coin Details
          </h4>
          <div className="card-action coin-tabs mb-3">
            <Nav as="ul" className="nav nav-tabs" role="tablist">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer bg-warning"
                  data-toggle="tab"
                  eventKey="Bitcoin"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    width={24}
                    className="mr-1"
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z"
                      fill="#FFAB2D"
                    />
                    <path
                      d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z"
                      fill="#FFAB2D"
                    />
                  </svg>
                  Bitcoin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer bg-secondary"
                  data-toggle="tab"
                  eventKey="Ethereum"
                  role="tab"
                  aria-selected="false"
                >
                  <svg
                    width={24}
                    className="mr-1"
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3269 13.7554C12.1177 13.839 11.8846 13.839 11.6753 13.7554L9.42969 12.8571L12.0011 18L14.5725 12.8571L12.3269 13.7554Z"
                      fill="#DC3CCC"
                    />
                    <path
                      d="M11.9989 12L15.4275 10.8001L11.9989 6L8.57031 10.8001L11.9989 12Z"
                      fill="#DC3CCC"
                    />
                    <path
                      d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0V0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263V11.5263Z"
                      fill="#DC3CCC"
                    />
                  </svg>
                  Ethereum
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer   bg-info"
                  data-toggle="tab"
                  eventKey="Dash"
                  role="tab"
                  aria-selected="true"
                >
                  <svg
                    width={24}
                    className="mr-1"
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0V0ZM7.04462 11.1428H10.4732C10.9466 11.1428 11.3304 11.5265 11.3304 12C11.3304 12.4735 10.9466 12.8572 10.4732 12.8572H7.04462C6.57116 12.8572 6.18742 12.4735 6.18742 12C6.18742 11.5265 6.57142 11.1428 7.04462 11.1428ZM17.7624 9.92331L16.7315 15.0812C16.4887 16.2784 15.4374 17.1401 14.2158 17.1429H7.04462C6.57116 17.1429 6.18742 16.7592 6.18742 16.2857C6.18742 15.8123 6.57142 15.4285 7.04462 15.4285H14.2158C14.621 15.4275 14.9697 15.1418 15.0503 14.7448L16.0814 9.58692C16.173 9.12654 15.8743 8.67924 15.4141 8.58768C15.3595 8.57696 15.304 8.57147 15.2486 8.57147H8.75902C8.28556 8.57147 7.90182 8.18773 7.90182 7.71427C7.90182 7.24081 8.28556 6.85707 8.75902 6.85707H15.2486C16.6648 6.85759 17.8123 8.00567 17.8121 9.42186C17.8121 9.59006 17.7953 9.75799 17.7624 9.92331V9.92331Z"
                      fill="#3693FF"
                    />
                  </svg>
                  Dash
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer  bg-primary"
                  data-toggle="tab"
                  eventKey="Litecoin"
                  role="tab"
                  aria-selected="true"
                >
                  <svg
                    width={24}
                    className="mr-1"
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0V0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z"
                      fill="#374C98"
                    />
                  </svg>
                  Litecoin
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <Tab.Content className="tab-content">
          <Tab.Pane className="tab-pane fade" eventKey="Bitcoin">
            <div className="row">
              <div className="col-xl-3 col-xxl-4">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h4 className="mb-0 text-black fs-20">About</h4>
                    <Dropdown className="dropdown ml-auto">
                      <Dropdown.Toggle
                        variant=""
                        className="i-false p-0 btn-link"
                        data-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={12} cy={5} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={19} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item">Edit</Link>
                        <Link className="dropdown-item">Delete</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img className="mb-3" src={btc} alt="" />
                      <h2 className="fs-24 font-w600 text-black mb-0">
                        Digital Cash
                      </h2>
                      <p className="fs-14 font-w600 text-black">BTC</p>
                      <span className="text-primary fs-14">
                        1 BTC = 68.48 USD
                      </span>
                    </div>
                    <p className="fs-14">
                      Dash is an open source cryptocurrency. It is an altcoin
                      that was forked from the Bitcoin protocol. It is also a
                      decentralized autonomous organization (DAO) run by a
                      subset of its users, which are called "masternodes". The
                      currency permits transactions that can be untraceable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-xxl-8">
                <div className="card">
                  <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                    <div className="mr-auto mb-3">
                      <h4 className="fs-20 text-black">Coin Chart</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Link
                      to="/coin-details"
                      className="btn btn-primary light btn-rounded mr-3  mb-3"
                    >
                      <i className="las la-download scale5 mr-2" />
                      Get Report
                    </Link>
                    <div className="input-group detault-daterange mr-3  mb-3 coinDetails-datepiker">
                      <span className="input-group-text">
                        <i className="las la-calendar" />
                      </span>
                      <DateRangePicker>
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                    </div>

                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="form-control style-1 default-select  mb-3"
                      >
                        {crrency1}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setCrrency1("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency1("BTC ($ US Dollar)")}
                        >
                          BTC ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency1("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0 pt-sm-3 pt-0">
                    <div className="row sp20 mb-4 align-items-center">
                      <div className="col-lg-8 col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="px-2 info-group">
                          <p className="fs-18 mb-1">Price</p>
                          <h2 className="fs-28 font-w600 text-black">
                            $11,898.15
                          </h2>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">24h% change</p>
                          <h3 className="fs-20 font-w600 text-success">
                            1.64%
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                                fill="#2BC155"
                              />
                            </svg>
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Volume (24h)</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $47.22B
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Market Cap</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $219.24B
                          </h3>
                        </div>
                      </div>
                      <div className="d-flex col-lg-4 col-xxl-12 align-items-center mt-sm-0 mt-3 justify-content-center">
                        <div className="fs-18 font-w600 mr-4">
                          <span className="text-success pr-3">BUY</span>
                          <span className="text-black">$5,673</span>
                        </div>
                        <div className="fs-18 font-w600">
                          <span className="text-danger pr-3">SELL</span>
                          <span className="text-black">$5,982</span>
                        </div>
                      </div>
                    </div>
                    {/* <div id="chartBarRunning" className="bar-chart" /> */}
                    {background.value === "dark" ? (
                      <MarketOverviewDark />
                    ) : (
                      <MarketOverview />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-warning-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-warning-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Quick Transfer</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                      <Dropdown.Toggle
                        variant=""
                        className="btn btn-rounded i-false border border-warning btn-sm d-flex align-items-center svg-btn"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z"
                            fill="#FFAB2D"
                          />
                          <path
                            d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z"
                            fill="#FFAB2D"
                          />
                          <path
                            d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z"
                            fill="#FFAB2D"
                          />
                        </svg>
                        <div className="text-left mr-3 ml-3">
                          <span className="d-block fs-16 text-black">
                            45,662.05 BTC
                          </span>
                        </div>
                        <i className="fa fa-angle-down scale5 ml-3 mr-3" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item" to="/coin-details">
                          345,455 BTC
                        </Link>
                        <Link className="dropdown-item" to="/coin-details">
                          789,123 BTC
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form className="form-wrapper">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Amount BTC
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text ">
                                Price BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Total BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-success"
                            >
                              BUY
                              <svg
                                className="ml-4 scale3"
                                width={16}
                                height={16}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-danger"
                            >
                              SELL
                              <svg
                                className="ml-4 scale5"
                                width={16}
                                height={16}
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <div className="custom-control custom-checkbox mr-3 mt-1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox1"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox1"
                            />
                          </div>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane className="tab-pane fade" eventKey="Ethereum">
            <div className="row">
              <div className="col-xl-3 col-xxl-4">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h4 className="mb-0 text-black fs-20">About</h4>
                    <Dropdown className="dropdown ml-auto">
                      <Dropdown.Toggle
                        variant=""
                        className="i-false p-0 btn-link"
                        data-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={12} cy={5} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={19} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item">Edit</Link>
                        <Link className="dropdown-item">Delete</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img className="mb-3" src={eth} alt="" />
                      <h2 className="fs-24 font-w600 text-black mb-0">
                        Digital Cash
                      </h2>
                      <p className="fs-14 font-w600 text-black">ETH</p>
                      <span className="text-primary fs-14">
                        1 ETH = 68.48 USD
                      </span>
                    </div>
                    <p className="fs-14">
                      Dash is an open source cryptocurrency. It is an altcoin
                      that was forked from the Bitcoin protocol. It is also a
                      decentralized autonomous organization (DAO) run by a
                      subset of its users, which are called "masternodes". The
                      currency permits transactions that can be untraceable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-xxl-8">
                <div className="card">
                  <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                    <div className="mr-auto mb-3">
                      <h4 className="fs-20 text-black">Coin Chart</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Link
                      to="/coin-details"
                      className="btn btn-primary light btn-rounded mr-3  mb-3"
                    >
                      <i className="las la-download scale5 mr-2" />
                      Get Report
                    </Link>
                    <div className="input-group detault-daterange mr-3  mb-3">
                      <DateRangePicker>
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="form-control style-1 default-select  mb-3"
                      >
                        {crrency2}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setCrrency2("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency2("BTC ($ US Dollar)")}
                        >
                          BTC ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency2("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0 pt-sm-3 pt-0">
                    <div className="row sp20 mb-4 align-items-center">
                      <div className="col-lg-8 col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="px-2 info-group">
                          <p className="fs-18 mb-1">Price</p>
                          <h2 className="fs-28 font-w600 text-black">
                            $11,898.15
                          </h2>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">24h% change</p>
                          <h3 className="fs-20 font-w600 text-success">
                            1.64%
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                                fill="#2BC155"
                              />
                            </svg>
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Volume (24h)</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $47.22B
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Market Cap</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $219.24B
                          </h3>
                        </div>
                      </div>
                      <div className="d-flex col-lg-4 col-xxl-12 align-items-center mt-sm-0 mt-3 justify-content-center">
                        <div className="fs-18 font-w600 mr-4">
                          <span className="text-success pr-3">BUY</span>
                          <span className="text-black">$5,673</span>
                        </div>
                        <div className="fs-18 font-w600">
                          <span className="text-danger pr-3">SELL</span>
                          <span className="text-black">$5,982</span>
                        </div>
                      </div>
                    </div>
                    {/* <div id="chartBarRunning1" className="bar-chart" /> */}
                    {background.value === "dark" ? (
                      <MarketOverviewDark />
                    ) : (
                      <MarketOverview />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-secondary-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-secondary-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Quick Transfer</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                      <Dropdown.Toggle
                        variant=""
                        className="btn btn-rounded i-false border border-secondary btn-sm d-flex align-items-center svg-btn"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5711 24.072C21.2049 24.2183 20.797 24.2183 20.4309 24.072L16.501 22.5L21.001 31.5L25.501 22.5L21.5711 24.072Z"
                            fill="#DC3CCC"
                          />
                          <path
                            d="M20.999 21L26.999 18.9001L20.999 10.5L14.999 18.9001L20.999 21Z"
                            fill="#DC3CCC"
                          />
                          <path
                            d="M21 0C9.40205 0 0 9.40205 0 21C0 32.598 9.40205 42 21 42C32.598 42 42 32.598 42 21C41.9872 9.40754 32.5925 0.0128174 21 0V0ZM29.8417 20.171L22.3417 35.1711C21.9714 35.9122 21.07 36.2125 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.1711L12.1583 20.171C11.9253 19.7032 11.9518 19.1479 12.2283 18.7043L19.7283 6.70444C20.2268 6.00222 21.1996 5.83651 21.9018 6.33502C22.0451 6.43664 22.17 6.56116 22.2717 6.70444L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171V20.171Z"
                            fill="#DC3CCC"
                          />
                        </svg>
                        <div className="text-left mr-3 ml-3">
                          <span className="d-block fs-16 text-black">
                            45,662.05 ETH
                          </span>
                        </div>
                        <i className="fa fa-angle-down scale5 mr-3 ml-3" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item" to="/coin-details">
                          345,455 BTC
                        </Link>
                        <Link className="dropdown-item" to="/coin-details">
                          789,123 BTC
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form className="form-wrapper">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Amount BTC
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text ">
                                Price BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Total BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-success"
                            >
                              BUY
                              <svg
                                className="ml-4 scale3"
                                width={16}
                                height={16}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-danger"
                            >
                              SELL
                              <svg
                                className="ml-4 scale5"
                                width={16}
                                height={16}
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <div className="custom-control custom-checkbox mr-3 mt-1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox12"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox12"
                            />
                          </div>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane className="tab-pane fade" eventKey="Dash">
            <div className="row">
              <div className="col-xl-3 col-xxl-4">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h4 className="mb-0 text-black fs-20">About</h4>
                    <Dropdown className="dropdown ml-auto">
                      <Dropdown.Toggle
                        variant=""
                        className="i-false p-0 btn-link"
                        data-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={12} cy={5} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={19} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item">Edit</Link>
                        <Link className="dropdown-item">Delete</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img className="mb-3" src={desh} alt="" />
                      <h2 className="fs-24 font-w600 text-black mb-0">
                        Digital Cash
                      </h2>
                      <p className="fs-14 font-w600 text-black">DASH</p>
                      <span className="text-primary fs-14">
                        1 DASH = 68.48 USD
                      </span>
                    </div>
                    <p className="fs-14">
                      Dash is an open source cryptocurrency. It is an altcoin
                      that was forked from the Bitcoin protocol. It is also a
                      decentralized autonomous organization (DAO) run by a
                      subset of its users, which are called "masternodes". The
                      currency permits transactions that can be untraceable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-xxl-8">
                <div className="card">
                  <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                    <div className="mr-auto mb-3">
                      <h4 className="fs-20 text-black">Coin Chart</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Link
                      to="/coin-details"
                      className="btn btn-primary light btn-rounded mr-3  mb-3"
                    >
                      <i className="las la-download scale5 mr-2" />
                      Get Report
                    </Link>
                    <div className="input-group detault-daterange mr-3  mb-3">
                      <span className="input-group-text">
                        <i className="las la-calendar" />
                      </span>
                      <DateRangePicker>
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="form-control style-1 default-select  mb-3"
                      >
                        {crrency3}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setCrrency3("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency3("BTC ($ US Dollar)")}
                        >
                          BTC ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency3("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0 pt-sm-3 pt-0">
                    <div className="row sp20 mb-4 align-items-center">
                      <div className="col-lg-8 col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="px-2 info-group">
                          <p className="fs-18 mb-1">Price</p>
                          <h2 className="fs-28 font-w600 text-black">
                            $11,898.15
                          </h2>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">24h% change</p>
                          <h3 className="fs-20 font-w600 text-success">
                            1.64%
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                                fill="#2BC155"
                              />
                            </svg>
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Volume (24h)</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $47.22B
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Market Cap</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $219.24B
                          </h3>
                        </div>
                      </div>
                      <div className="d-flex col-lg-4 col-xxl-12 align-items-center mt-sm-0 mt-3 justify-content-center">
                        <div className="fs-18 font-w600 mr-4">
                          <span className="text-success pr-3">BUY</span>
                          <span className="text-black">$5,673</span>
                        </div>
                        <div className="fs-18 font-w600">
                          <span className="text-danger pr-3">SELL</span>
                          <span className="text-black">$5,982</span>
                        </div>
                      </div>
                    </div>
                    {/* <div id="chartBarRunning2" className="bar-chart" /> */}
                    {background.value === "dark" ? (
                      <MarketOverviewDark />
                    ) : (
                      <MarketOverview />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-info-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-info-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Quick Transfer</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                      <Dropdown.Toggle
                        variant=""
                        className="btn btn-rounded i-false border border-info btn-sm d-flex align-items-center svg-btn"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 0C9.40205 0 0 9.40205 0 21C0 32.5979 9.40205 42 21 42C32.5979 42 42 32.5979 42 21C41.9872 9.40754 32.5925 0.0128174 21 0ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1714 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4995 22.5001 10.828 21.8286 10.828 21C10.828 20.1714 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.2801 26.392C28.8553 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4995 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7771C28.3027 15.9714 27.78 15.1887 26.9748 15.0284C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4997 15.0001 13.8282 14.3285 13.8282 13.5C13.8282 12.6714 14.4997 11.9999 15.3283 11.9999H26.685C29.1633 12.0008 31.1716 14.0099 31.1711 16.4883C31.1711 16.7826 31.1418 17.0765 31.0841 17.3658Z"
                            fill="#3693FF"
                          />
                        </svg>
                        <div className="text-left mr-3 ml-3">
                          <span className="d-block fs-16 text-black">
                            45,662.05 DASH
                          </span>
                        </div>
                        <i className="fa fa-angle-down scale5 mr-3 ml-3" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item" to="/coin-details">
                          345,455 DASH
                        </Link>
                        <Link className="dropdown-item" to="/coin-details">
                          789,123 DASH
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form className="form-wrapper">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Amount BTC
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text ">
                                Price BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Total BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-success"
                            >
                              BUY
                              <svg
                                className="ml-4 scale3"
                                width={16}
                                height={16}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-danger"
                            >
                              SELL
                              <svg
                                className="ml-4 scale5"
                                width={16}
                                height={16}
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <div className="custom-control custom-checkbox mr-3 mt-1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox13"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox13"
                            />
                          </div>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane className="tab-pane fade" eventKey="Litecoin">
            <div className="row">
              <div className="col-xl-3 col-xxl-4">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h4 className="mb-0 text-black fs-20">About</h4>
                    <Dropdown className="dropdown ml-auto">
                      <Dropdown.Toggle
                        variant=""
                        className="i-false p-0 btn-link"
                        data-toggle="dropdown"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <circle fill="#000000" cx={12} cy={5} r={2} />
                            <circle fill="#000000" cx={12} cy={12} r={2} />
                            <circle fill="#000000" cx={12} cy={19} r={2} />
                          </g>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item">Edit</Link>
                        <Link className="dropdown-item">Delete</Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <img className="mb-3" src={ltc} alt="" />
                      <h2 className="fs-24 font-w600 text-black mb-0">
                        Digital Cash
                      </h2>
                      <p className="fs-14 font-w600 text-black">LTC</p>
                      <span className="text-primary fs-14">
                        1 LTC = 68.48 USD
                      </span>
                    </div>
                    <p className="fs-14">
                      Dash is an open source cryptocurrency. It is an altcoin
                      that was forked from the Bitcoin protocol. It is also a
                      decentralized autonomous organization (DAO) run by a
                      subset of its users, which are called "masternodes". The
                      currency permits transactions that can be untraceable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-xxl-8">
                <div className="card">
                  <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                    <div className="mr-auto mb-3">
                      <h4 className="fs-20 text-black">Coin Chart</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Link
                      to="/coin-details"
                      className="btn btn-primary light btn-rounded mr-3  mb-3"
                    >
                      <i className="las la-download scale5 mr-2" />
                      Get Report
                    </Link>
                    <div className="input-group detault-daterange mr-3  mb-3">
                      <span className="input-group-text">
                        <i className="las la-calendar" />
                      </span>
                      <DateRangePicker>
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=""
                        className="form-control style-1 default-select  mb-3"
                      >
                        {crrency4}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => setCrrency4("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency4("BTC ($ US Dollar)")}
                        >
                          BTC ($ US Dollar)
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => setCrrency4("USD ($ US Dollar)")}
                        >
                          USD ($ US Dollar)
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0 pt-sm-3 pt-0">
                    <div className="row sp20 mb-4 align-items-center">
                      <div className="col-lg-8 col-xxl-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="px-2 info-group">
                          <p className="fs-18 mb-1">Price</p>
                          <h2 className="fs-28 font-w600 text-black">
                            $11,898.15
                          </h2>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">24h% change</p>
                          <h3 className="fs-20 font-w600 text-success">
                            1.64%
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                                fill="#2BC155"
                              />
                            </svg>
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Volume (24h)</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $47.22B
                          </h3>
                        </div>
                        <div className="px-2 info-group">
                          <p className="fs-14 mb-1">Market Cap</p>
                          <h3 className="fs-20 font-w600 text-black">
                            $219.24B
                          </h3>
                        </div>
                      </div>
                      <div className="d-flex col-lg-4 col-xxl-12 align-items-center mt-sm-0 mt-3 justify-content-center">
                        <div className="fs-18 font-w600 mr-4">
                          <span className="text-success pr-3">BUY</span>
                          <span className="text-black">$5,673</span>
                        </div>
                        <div className="fs-18 font-w600">
                          <span className="text-danger pr-3">SELL</span>
                          <span className="text-black">$5,982</span>
                        </div>
                      </div>
                    </div>
                    {/* <div id="chartBarRunning3" className="bar-chart" /> */}
                    {background.value === "dark" ? (
                      <MarketOverviewDark />
                    ) : (
                      <MarketOverview />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-primary-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-header border-0 pb-0">
                        <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                        <Dropdown className="dropdown ml-auto">
                          <Dropdown.Toggle
                            variant=""
                            className="i-false p-0 btn-link"
                            data-toggle="dropdown"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x={0} y={0} width={24} height={24} />
                                <circle fill="#000000" cx={12} cy={5} r={2} />
                                <circle fill="#000000" cx={12} cy={12} r={2} />
                                <circle fill="#000000" cx={12} cy={19} r={2} />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-right"
                            alignRight={true}
                          >
                            <Link className="dropdown-item">Edit</Link>
                            <Link className="dropdown-item">Delete</Link>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="card-body p-3">
                        <div className="table-responsive">
                          <table className="table text-center bg-primary-hover tr-rounded">
                            <thead>
                              <tr>
                                <th className="text-left">Price</th>
                                <th className="text-center">Amount</th>
                                <th className="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-left">82.3</td>
                                <td>0.15</td>
                                <td className="text-right">$134,12</td>
                              </tr>
                              <tr>
                                <td className="text-left">83.9</td>
                                <td>0.18</td>
                                <td className="text-right">$237,31</td>
                              </tr>
                              <tr>
                                <td className="text-left">84.2</td>
                                <td>0.25</td>
                                <td className="text-right">$252,58</td>
                              </tr>
                              <tr>
                                <td className="text-left">86.2</td>
                                <td>0.35</td>
                                <td className="text-right">$126,26</td>
                              </tr>
                              <tr>
                                <td className="text-left">91.6</td>
                                <td>0.75</td>
                                <td className="text-right">$46,92</td>
                              </tr>
                              <tr>
                                <td className="text-left">92.6</td>
                                <td>0.21</td>
                                <td className="text-right">$123,27</td>
                              </tr>
                              <tr>
                                <td className="text-left">93.9</td>
                                <td>0.55</td>
                                <td className="text-right">$212,56</td>
                              </tr>
                              <tr>
                                <td className="text-left">94.2</td>
                                <td>0.18</td>
                                <td className="text-right">$129,26</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0 text-center">
                        <Link to="/coin-details" className="btn-link">
                          Show more{" "}
                          <i className="fa fa-caret-right ml-2 scale-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-12">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Quick Transfer</h4>
                      <p className="mb-0 fs-12">
                        Lorem ipsum dolor sit amet, consectetur
                      </p>
                    </div>
                    <Dropdown className="dropdown custom-dropdown d-block mt-3 mt-sm-0 mb-0">
                      <Dropdown.Toggle
                        variant=""
                        className="btn i-false btn-rounded border border-primary btn-sm d-flex align-items-center svg-btn"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={42}
                          height={42}
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.001 -1.52588e-05C9.40303 -1.52588e-05 0.000976562 9.40203 0.000976562 21C0.000976562 32.5979 9.40303 42 21.001 42C32.5989 42 42.001 32.5979 42.001 21C41.9877 9.40753 32.5934 0.0132599 21.001 -1.52588e-05V-1.52588e-05ZM28.501 31.5002H16.5011C15.6726 31.5002 15.001 30.8287 15.001 30.0001C15.001 29.9292 15.0061 29.8582 15.0161 29.7877L16.145 21.8844L13.8649 22.4548C13.7458 22.485 13.6236 22.5001 13.5009 22.5001C12.6724 22.4992 12.0018 21.8272 12.0022 20.9986C12.0031 20.311 12.471 19.7123 13.1379 19.5447L16.6028 18.6787L18.0159 8.78725C18.1331 7.96694 18.893 7.39748 19.7133 7.51467C20.5336 7.63185 21.1031 8.39175 20.9859 9.21206L19.7453 17.8931L25.1373 16.545C25.9398 16.3404 26.756 16.8252 26.9602 17.6276C27.1648 18.4301 26.68 19.2463 25.8776 19.4509C25.873 19.4518 25.8684 19.4532 25.8638 19.4541L19.2866 21.0984L18.2297 28.5H28.501C29.3296 28.5 30.0011 29.1716 30.0011 30.0001C30.0011 30.8282 29.3296 31.5002 28.501 31.5002Z"
                            fill="#374C98"
                          />
                        </svg>
                        <div className="text-left mr-3 ml-3">
                          <span className="d-block fs-16 text-black">
                            45,662.05 LTC
                          </span>
                        </div>
                        <i className="fa fa-angle-down scale5 mr-3 ml-3" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-right"
                        alignRight={true}
                      >
                        <Link className="dropdown-item" to="/coin-details">
                          345,455 LTC
                        </Link>
                        <Link className="dropdown-item" to="/coin-details">
                          789,123 LTC
                        </Link>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="basic-form">
                      <form className="form-wrapper">
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Amount BTC
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text ">
                                Price BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Total BPL
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="0,000000"
                            />
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-success"
                            >
                              BUY
                              <svg
                                className="ml-4 scale3"
                                width={16}
                                height={16}
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="/coin-details"
                              className="btn d-block btn-lg btn-danger"
                            >
                              SELL
                              <svg
                                className="ml-4 scale5"
                                width={16}
                                height={16}
                                viewBox="0 0 29 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z"
                                  fill="white"
                                  stroke="white"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <div className="custom-control custom-checkbox mr-3 mt-1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox14"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox14"
                            />
                          </div>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Fragment>
  );
};

export default CoinDetails;
