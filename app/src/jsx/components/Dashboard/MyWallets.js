import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { Fragment, useContext, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import Donut from "../kripton/MyWallets/Donut";
import MyWalletsSlider from "../kripton/MyWallets/MyWalletsSlider";

const PieChart = loadable(() =>
  pMinDelay(import("../kripton/MyWallets/PieChart"), 1000)
);
const CoinChart = loadable(() =>
  pMinDelay(import("../kripton/MyWallets/CoinChart"), 1000)
);

const MyWallets = () => {
  const { background } = useContext(ThemeContext);
  const [activeToggle, setActiveToggle] = useState("primary");
  const [crrency1, setCrrency1] = useState("Monthly (2021)");
  const [crrency2, setCrrency2] = useState("Monthly (2021)");
  const [crrency3, setCrrency3] = useState("Monthly (2021)");
  const [crrency4, setCrrency4] = useState("Monthly (2021)");

  return (
    <Fragment>
      <div className="text-right mb-4">
        <Link to="/my-wallets" className="btn btn-primary btn-rounded">
          + Add Wallet
        </Link>
      </div>
      <div className="cards-slider owl-carousel mb-4">
        <MyWalletsSlider />
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header d-block d-sm-flex border-0 pb-0">
              <h4 className="mb-0 text-black fs-20">Card Details</h4>
              <div className="d-flex mt-sm-0 mt-2">
                <Link to="/my-wallets" className="btn-link mr-3 underline">
                  Generate Number
                </Link>
                <Link to="/my-wallets" className="btn-link underline">
                  Edit
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-end">
                <div className="col-xl-4 col-xxl-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <p className="mb-2">Card Name</p>
                        <h4 className="text-black">Main Balance</h4>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Valid Date</p>
                        <h4 className="text-black">08/21</h4>
                      </div>
                      <div>
                        <p className="mb-2">Card Number</p>
                        <h4 className="text-black">**** **** **** 1234</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <p className="mb-2">Bank Name</p>
                        <h4 className="text-black">ABC Center Bank</h4>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2">Card Holder</p>
                        <h4 className="text-black">Marquezz Silalahi</h4>
                      </div>
                      <div>
                        <p className="mb-2">Card Theme</p>
                        <div
                          className="btn-group theme-colors"
                          data-toggle="buttons"
                        >
                          <label
                            className={`btn btn-primary btn-sm ${
                              activeToggle === "primary" ? "active" : ""
                            }`}
                            onClick={() => setActiveToggle("primary")}
                          >
                            <input
                              type="radio"
                              className="position-absolute invisible"
                              name="options"
                              id="option5"
                            />{" "}
                            <i className="las la-check-circle" />
                          </label>
                          <label
                            className={`btn btn-warning btn-sm ${
                              activeToggle === "warning" ? "active" : ""
                            }`}
                            onClick={() => setActiveToggle("warning")}
                          >
                            <input
                              type="radio"
                              className="position-absolute invisible"
                              name="options"
                              id="option1"
                              defaultChecked
                            />
                            <i className="las la-check-circle" />
                          </label>
                          <label
                            className={`btn btn-success btn-sm ${
                              activeToggle === "success" ? "active" : ""
                            }`}
                            onClick={() => setActiveToggle("success")}
                          >
                            <input
                              type="radio"
                              className="position-absolute invisible"
                              name="options"
                              id="option2"
                            />{" "}
                            <i className="las la-check-circle" />
                          </label>
                          <label
                            className={`btn btn-info btn-sm ${
                              activeToggle === "info" ? "active" : ""
                            }`}
                            onClick={() => setActiveToggle("info")}
                          >
                            <input
                              type="radio"
                              className="position-absolute invisible"
                              name="options"
                              id="option3"
                            />{" "}
                            <i className="las la-check-circle" />
                          </label>
                          <label
                            className={`btn btn-secondary btn-sm ${
                              activeToggle === "secondary" ? "active" : ""
                            }`}
                            onClick={() => setActiveToggle("secondary")}
                          >
                            <input
                              type="radio"
                              className="position-absolute invisible"
                              name="options"
                              id="option4"
                            />{" "}
                            <i className="las la-check-circle" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-xxl-6 col-lg-6 mb-lg-0 mb-3">
                  <p>Monthly Limits</p>
                  <div className="row">
                    <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        {background.value === "dark" ? (
                          <Donut
                            value={66}
                            backgroundColor="#FF6826"
                            backgroundColor2="#F0F0F0"
                          />
                        ) : (
                          <Donut value={66} backgroundColor="#FF6826" />
                        )}

                        <small className="text-black">66%</small>
                      </div>
                      <h5 className="fs-18 text-black">Main Limits</h5>
                      <span>$10,000</span>
                    </div>
                    <div className="col-sm-4 mb-sm-0 mb-4 text-center">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        {background.value === "dark" ? (
                          <Donut
                            value={31}
                            backgroundColor="#1DC624"
                            backgroundColor2="#F0F0F0"
                          />
                        ) : (
                          <Donut value={31} backgroundColor="#1DC624" />
                        )}

                        <small className="text-black">31%</small>
                      </div>
                      <h5 className="fs-18 text-black">Seconds</h5>
                      <span>$500</span>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="d-inline-block position-relative donut-chart-sale mb-3">
                        {background.value === "dark" ? (
                          <Donut
                            value={7}
                            backgroundColor="#9E9E9E"
                            backgroundColor2="#F0F0F0"
                          />
                        ) : (
                          <Donut value={7} backgroundColor="#9E9E9E" />
                        )}
                        <small className="text-black">7%</small>
                      </div>
                      <h5 className="fs-18 text-black">Others</h5>
                      <span>$100</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-xxl-6 col-lg-6">
                  <div className="d-flex align-items-end">
                    {/* <div id="pieChart" /> */}
                    <PieChart />
                    <div>
                      <div className="d-flex mb-4">
                        <svg
                          className="mr-2 mr-sm-3 mt-1"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#5EE173" />
                        </svg>
                        <div>
                          <p className="fs-14 text-black mb-0">Installment</p>
                          <span className="fs-20 text-black font-w600">
                            24%
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <svg
                          className="mr-2 mr-sm-3 mt-1"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#3A82EF" />
                        </svg>
                        <div>
                          <p className="fs-14 text-black mb-0">Rent</p>
                          <span className="fs-20 text-black font-w600">
                            28%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="d-flex mr-2 mr-sm-3">
                      <svg
                        className="mr-3 mt-1"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={14} height={14} rx={4} fill="#FF495F" />
                      </svg>
                      <div>
                        <p className="fs-14 text-black mb-0">Food</p>
                        <span className="fs-20 text-black font-w600">18%</span>
                      </div>
                    </div>
                    <div className="d-flex mr-2 mr-sm-3">
                      <svg
                        className="mr-3 mt-1"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={14} height={14} rx={4} fill="#FFB038" />
                      </svg>
                      <div>
                        <p className="fs-14 text-black mb-0">Restaurant</p>
                        <span className="fs-20 text-black font-w600">21%</span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <svg
                        className="mr-3 mt-1"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={14} height={14} rx={4} fill="#EE3CD2" />
                      </svg>
                      <div>
                        <p className="fs-14 text-black mb-0">Investment</p>
                        <span className="fs-20 text-black font-w600">9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-block d-sm-flex border-0 pb-sm-0 pb-0 align-items-center">
                  <div className="mr-auto mb-sm-0 mb-3">
                    <h4 className="fs-20 text-black">Coin Chart</h4>
                    <p className="mb-0 fs-12">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      className="form-control style-1 default-select"
                    >
                      {crrency1}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => setCrrency1("Monthly (2021)")}
                      >
                        Monthly (2021)
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setCrrency1("Daily (2021)")}
                      >
                        Daily (2021)
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setCrrency1("Weekly (2021)")}
                      >
                        Weekly (2021)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-3">
                  <div className="d-flex flex-wrap mb-sm-4 mb-2 align-items-center">
                    <p className="mb-0 text-black mr-auto">
                      Last Week <span className="text-success">$563,443</span>
                    </p>
                    <div className="d-flex align-items-center">
                      <span className="fs-28 text-black font-w600 pr-3">
                        $557,235.31
                      </span>
                      <span className="fs-22 text-success">
                        7%{" "}
                        <i
                          className="fa fa-caret-up scale5 ml-2 text-success"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                  {/* <div id="chartTimeline" className="timeline-chart" /> */}
                  <CoinChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <Tab.Container defaultActiveKey="monthly">
              <div className="card-header pb-2 d-block d-sm-flex flex-wrap border-0">
                <div className="mb-3">
                  <h4 className="fs-20 text-black">Wallet Activity</h4>
                  <p className="mb-0 fs-13">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <div className="card-action card-tabs mb-3">
                  <Nav as="ul" className="nav nav-tabs" role="tablist">
                    <Nav.Item as="li">
                      <Nav.Link
                        as="a"
                        className="nav-link c-pointer"
                        data-toggle="tab"
                        eventKey="monthly"
                        role="tab"
                      >
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        as="a"
                        className="nav-link c-pointer"
                        data-toggle="tab"
                        eventKey="Weekly"
                        role="tab"
                      >
                        Weekly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        as="a"
                        className="nav-link c-pointer"
                        data-toggle="tab"
                        eventKey="Today"
                        role="tab"
                      >
                        Today
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Tab.Content className="card-body tab-content p-0">
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="monthly"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="table shadow-hover short-one card-table border-no">
                      <tbody>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Withdraw
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-light float-right"
                              to="/my-wallets"
                            >
                              Pending
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.9375 6.232L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66718C13.8269 8.10702 13.8288 7.19681 13.2689 6.63421L12.9145 6.98691L13.2689 6.63421L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.17281 6.92186 1.17469 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63426L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66239L3.51891 8.66236L5.9375 6.232Z"
                                  fill="#363062"
                                  stroke="#363062"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Topup</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="/my-wallets"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Wihtdraw
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$912</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-danger float-right"
                              to="/my-wallets"
                            >
                              Canceled
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.9375 6.232L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66718C13.8269 8.10702 13.8288 7.19681 13.2689 6.63421L12.9145 6.98691L13.2689 6.63421L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.17281 6.92186 1.17469 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63426L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66239L3.51891 8.66236L5.9375 6.232Z"
                                  fill="#363062"
                                  stroke="#363062"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Topup</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$7,762
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="/my-wallets"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.9375 6.232L5.9375 24.875C5.9375 25.6689 6.58107 26.3125 7.375 26.3125C8.16892 26.3125 8.8125 25.6689 8.8125 24.875L8.8125 6.23202L11.2311 8.66232L11.2311 8.66234C11.7911 9.22504 12.7013 9.2272 13.264 8.66718C13.8269 8.10702 13.8288 7.19681 13.2689 6.63421L12.9145 6.98691L13.2689 6.63421L8.3939 1.73558L8.38872 1.73037L8.38704 1.72878C7.82626 1.17281 6.92186 1.17469 6.36301 1.72877L6.36136 1.73033L6.35609 1.73563L1.48109 6.63426L1.48108 6.63426C0.921124 7.19695 0.9232 8.10709 1.48597 8.6672C2.04868 9.22725 2.95884 9.22509 3.51889 8.66239L3.51891 8.66236L5.9375 6.232Z"
                                  fill="#363062"
                                  stroke="#363062"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Topup</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="/my-wallets"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Wihtdraw
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$912</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-danger float-right"
                              to="/my-wallets"
                            >
                              Canceled
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className="tab-pane"
                  eventKey="Weekly"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="table shadow-hover short-one  card-table  border-no">
                      <tbody>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Bitcoin
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="#"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Ethereum
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$542</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-dark float-right"
                              to="#"
                            >
                              Pending
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Ripple</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$912</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-danger float-right"
                              to="#"
                            >
                              Canceled
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Ripple</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$912</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-danger float-right"
                              to="#"
                            >
                              Canceled
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane" eventKey="Today" role="tabpanel">
                  <div className="table-responsive">
                    <table className="table shadow-hover short-one card-table  border-no">
                      <tbody>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Bitcoin
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="#"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Ethereum
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$542</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-dark float-right"
                              to="#"
                            >
                              Pending
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">Ripple</span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">-$912</span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-danger float-right"
                              to="#"
                            >
                              Canceled
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Litecoin
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$7,762
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="#"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="activity-icon">
                              <svg
                                width={15}
                                height={27}
                                viewBox="0 0 15 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.81299 21.393L8.81299 2.74998C8.81299 1.95606 8.16942 1.31248 7.37549 1.31248C6.58157 1.31248 5.93799 1.95606 5.93799 2.74998L5.93799 21.393L3.5194 18.9627L3.51938 18.9627C2.95934 18.4 2.0492 18.3978 1.48649 18.9578C0.923597 19.518 0.921712 20.4282 1.48158 20.9908L1.83599 20.6381L1.48158 20.9908L6.35659 25.8894L6.36177 25.8946L6.36345 25.8962C6.92422 26.4522 7.82863 26.4503 8.38748 25.8962L8.38912 25.8947L8.3944 25.8894L13.2694 20.9907L13.2694 20.9907C13.8294 20.428 13.8273 19.5179 13.2645 18.9578C12.7018 18.3977 11.7917 18.3999 11.2316 18.9626L11.2316 18.9626L8.81299 21.393Z"
                                  fill="#61C277"
                                  stroke="#61C277"
                                />
                              </svg>
                            </span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              Bitcoin
                            </span>
                          </td>
                          <td>
                            <span className="text-black">06:24:45 AM</span>
                          </td>
                          <td>
                            <span className="font-w600 text-black">
                              +$5,553
                            </span>
                          </td>
                          <td>
                            <Link
                              className="btn-link text-success float-right"
                              to="/my-wallets"
                            >
                              Completed
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyWallets;
