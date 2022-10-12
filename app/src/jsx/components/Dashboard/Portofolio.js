import React from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import profile from "../../../images/profile/11.jpg";
import LineChart from "../kripton/Portofolio/LineChart1";

const CurrentGraph = loadable(() =>
  pMinDelay(import("../kripton/Portofolio/CurrentGraph"), 1000)
);

const Portofolio = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-xxl-4">
        <div className="card">
          <div className="card-header pb-0 border-0">
            <h5 className="mb-0 text-black fs-20">My Profile</h5>
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
                <Link className="dropdown-item" to="#">
                  Edit
                </Link>
                <Link className="dropdown-item" to="#">
                  Delete
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img src={profile} alt="" className="rounded" />
              <h4 className="fs-26 mt-3 font-w600 text-black">Johndoe</h4>
              <p className="mb-0 text-black ">Join on 24 March 2017</p>
              <Link
                to="/portofolio"
                className="btn btn-rounded button-style btn-outline-primary mt-4"
              >
                <i className="fa fa-pencil scale5 mr-3" />
                Edit prorfile
              </Link>
            </div>
            <ul className="d-flex justify-content-center share-icon mt-5">
              <li>
                <Link to="/portofolio">
                  <i className="las la-phone button-style" />
                </Link>
              </li>
              <li>
                <Link to="/portofolio">
                  <i className="las la-envelope button-style" />
                </Link>
              </li>
              <li>
                <Link to="/portofolio">
                  <i className="lab la-facebook-f button-style" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-xxl-8">
        <div className="card">
          <div className="card-header border-0 pb-0">
            <h5 className="mb-0 text-black fs-20">Coin Holding</h5>
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
                <Link className="dropdown-item" to="#">
                  Edit
                </Link>
                <Link className="dropdown-item" to="#">
                  Delete
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="card border coin-holding-card border-secondary">
                  <div className="card-body bg-secondary rounded">
                    <div className="d-flex align-items-center">
                      <svg
                        className="mr-3"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5567 23.893C21.1992 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21.0001 31.1454L25.3937 22.3582L21.5567 23.893Z"
                          fill="white"
                        />
                        <path
                          d="M20.9998 20.8846L26.2769 18.7739L20.9998 10.3304L15.7227 18.7739L20.9998 20.8846Z"
                          fill="white"
                        />
                        <path
                          d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.987 9.40762 32.5923 0.0129395 20.9999 0.00012207ZM29.8416 20.171L22.3416 35.171C21.9713 35.9121 21.0699 36.2124 20.3293 35.8421C20.0386 35.697 19.8033 35.4617 19.6582 35.171L12.1582 20.171C11.9252 19.7032 11.9518 19.1479 12.2282 18.7043L19.7282 6.70453C20.2267 6.00232 21.1995 5.83661 21.9017 6.33511C22.045 6.43674 22.17 6.56125 22.2716 6.70453L29.7711 18.7043C30.0481 19.1479 30.0746 19.7032 29.8416 20.171Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Ethereum
                        </h4>
                        <span className="text-white fs-14 op7">ETH</span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <svg
                          className="mr-3"
                          width={42}
                          height={26}
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.42856"
                            height="25.1428"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 24 0)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="18.2856"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 17.1431 6.85712)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="7.99997"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 10.2861 17.1428)"
                            fill="white"
                          />
                          <rect
                            width="3.86812"
                            height="15.4725"
                            rx="1.93406"
                            transform="matrix(-1 0 0 1 3.86816 9.67029)"
                            fill="white"
                          />
                        </svg>
                        <h4 className="font-w500 text-white amount mb-0">
                          $168,331.09
                        </h4>
                      </div>
                      <div className="mb-2">
                        <svg
                          width={14}
                          height={8}
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.707108 6.06712C0.0771426 6.69709 0.523309 7.77423 1.41421 7.77423L12.3601 7.77423C13.251 7.77423 13.6972 6.69709 13.0672 6.06712L7.59426 0.594186C7.20373 0.203662 6.57057 0.203662 6.18005 0.594186L0.707108 6.06712Z"
                            fill="#61C277"
                          />
                        </svg>
                        <span className="text-white fs-14 px-1">45% This Week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between border-0">
                    <div className="footer-info font-w600">
                      <span className="text-success px-1">BUY</span>
                      <span className="text-black px-1 d-block">$5,673</span>
                    </div>
                    <div className="footer-info font-w600">
                      <span className="text-danger px-1">SELL</span>
                      <span className="text-black px-1 d-block">$5,982</span>
                    </div>
                    <Link
                      to="/portofolio"
                      className="underline text-primary font-w500 footer-info"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border coin-holding-card border-warning">
                  <div className="card-body bg-warning rounded">
                    <div className="d-flex align-items-center">
                      <svg
                        className="mr-3"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.4998 16.5002C28.4984 14.844 27.1558 13.5018 25.5001 13.5H16.5V19.4999H25.5001C27.1558 19.4985 28.4984 18.1559 28.4998 16.5002Z"
                          fill="white"
                        />
                        <path
                          d="M16.5 28.5H25.5001C27.1567 28.5 28.4998 27.157 28.4998 25.5003C28.4998 23.8432 27.1567 22.5001 25.5001 22.5001H16.5V28.5Z"
                          fill="white"
                        />
                        <path
                          d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.9865 9.40762 32.5923 0.0133972 20.9999 0.00012207ZM31.5001 25.4998C31.496 28.8122 28.8121 31.4961 25.5002 31.4998V32.9998C25.5002 33.8284 24.8282 34.4999 24.0001 34.4999C23.1715 34.4999 22.5 33.8284 22.5 32.9998V31.4998H19.5003V32.9998C19.5003 33.8284 18.8283 34.4999 18.0002 34.4999C17.1716 34.4999 16.5001 33.8284 16.5001 32.9998V31.4998H12.0003C11.1717 31.4998 10.5002 30.8282 10.5002 30.0001C10.5002 29.1716 11.1717 28.5 12.0003 28.5H13.4999V13.5H12.0003C11.1717 13.5 10.5002 12.8285 10.5002 11.9999C10.5002 11.1714 11.1717 10.4998 12.0003 10.4998H16.5001V9.00021C16.5001 8.17166 17.1716 7.50012 18.0002 7.50012C18.8287 7.50012 19.5003 8.17166 19.5003 9.00021V10.4998H22.5V9.00021C22.5 8.17166 23.1715 7.50012 24.0001 7.50012C24.8286 7.50012 25.5002 8.17166 25.5002 9.00021V10.4998C28.7997 10.4861 31.4859 13.1494 31.5001 16.4489C31.5074 18.1962 30.7498 19.8593 29.4264 21C30.7375 22.128 31.4941 23.77 31.5001 25.4998Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Bitcoin
                        </h4>
                        <span className="text-white fs-14 op7">BTC</span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <svg
                          className="mr-3"
                          width={42}
                          height={26}
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.42856"
                            height="25.1428"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 24 0)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="18.2856"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 17.1431 6.85712)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="7.99997"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 10.2861 17.1428)"
                            fill="white"
                          />
                          <rect
                            width="3.86812"
                            height="15.4725"
                            rx="1.93406"
                            transform="matrix(-1 0 0 1 3.86816 9.67029)"
                            fill="white"
                          />
                        </svg>
                        <h4 className="font-w500 text-white amount mb-0">
                          $168,331.09
                        </h4>
                      </div>
                      <div className="mb-2">
                        <svg
                          width={14}
                          height={8}
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.707108 6.06712C0.0771426 6.69709 0.523309 7.77423 1.41421 7.77423L12.3601 7.77423C13.251 7.77423 13.6972 6.69709 13.0672 6.06712L7.59426 0.594186C7.20373 0.203662 6.57057 0.203662 6.18005 0.594186L0.707108 6.06712Z"
                            fill="#61C277"
                          />
                        </svg>
                        <span className="text-white fs-14 px-1">45% This Week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between border-0">
                    <div className="footer-info font-w600">
                      <span className="text-success px-1">BUY</span>
                      <span className="text-black px-1 d-block">$5,673</span>
                    </div>
                    <div className="footer-info font-w600">
                      <span className="text-danger px-1 ">SELL</span>
                      <span className="text-black px-1 d-block">$5,982</span>
                    </div>
                    <Link
                      to="/portofolio"
                      className="underline text-primary font-w500 footer-info"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border coin-holding-card border-info">
                  <div className="card-body bg-info rounded">
                    <div className="d-flex align-items-center">
                      <svg
                        className="mr-3"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.987 9.40762 32.5923 0.0129395 20.9999 0.00012207ZM12.328 19.4999H18.3279C19.1565 19.4999 19.828 20.1715 19.828 21C19.828 21.8286 19.1565 22.5001 18.3279 22.5001H12.328C11.4995 22.5001 10.8279 21.8286 10.8279 21C10.8279 20.1715 11.4999 19.4999 12.328 19.4999ZM31.084 17.3658L29.2799 26.392C28.8551 28.4872 27.0154 29.9951 24.8776 30.0001H12.328C11.4995 30.0001 10.8279 29.3286 10.8279 28.5C10.8279 27.6715 11.4999 26.9999 12.328 26.9999H24.8776C25.5867 26.9981 26.1969 26.4982 26.3379 25.8033L28.1424 16.7772C28.3026 15.9715 27.7798 15.1887 26.9746 15.0285C26.879 15.0097 26.7819 15.0001 26.6849 15.0001H15.3282C14.4997 15.0001 13.8281 14.3286 13.8281 13.5C13.8281 12.6715 14.4997 11.9999 15.3282 11.9999H26.6849C29.1632 12.0009 31.1714 14.01 31.171 16.4883C31.171 16.7827 31.1417 17.0765 31.084 17.3658Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Digital Cash
                        </h4>
                        <span className="text-white fs-14 op7">DASH</span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <svg
                          className="mr-3"
                          width={42}
                          height={26}
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.42856"
                            height="25.1428"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 24 0)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="18.2856"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 17.1431 6.85712)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="7.99997"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 10.2861 17.1428)"
                            fill="white"
                          />
                          <rect
                            width="3.86812"
                            height="15.4725"
                            rx="1.93406"
                            transform="matrix(-1 0 0 1 3.86816 9.67029)"
                            fill="white"
                          />
                        </svg>
                        <h4 className="font-w500 text-white amount mb-0">
                          $168,331.09
                        </h4>
                      </div>
                      <div className="mb-2">
                        <svg
                          width={14}
                          height={8}
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.707108 6.06712C0.0771426 6.69709 0.523309 7.77423 1.41421 7.77423L12.3601 7.77423C13.251 7.77423 13.6972 6.69709 13.0672 6.06712L7.59426 0.594186C7.20373 0.203662 6.57057 0.203662 6.18005 0.594186L0.707108 6.06712Z"
                            fill="#61C277"
                          />
                        </svg>
                        <span className="text-white fs-14 px-1">45% This Week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between border-0">
                    <div className="footer-info font-w600">
                      <span className="text-success px-1 ">BUY</span>
                      <span className="text-black px-1 d-block ">$5,673</span>
                    </div>
                    <div className="footer-info font-w600">
                      <span className="text-danger px-1 ">SELL</span>
                      <span className="text-black px-1 d-block">$5,982</span>
                    </div>
                    <Link
                      to="/portofolio"
                      className="underline text-primary font-w500 footer-info"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-body bg-primary rounded">
                    <div className="d-flex align-items-center">
                      <svg
                        className="mr-3"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9999 0.00012207C9.40201 0.00012207 0 9.40213 0 21C0 32.5979 9.40201 41.9999 20.9999 41.9999C32.5978 41.9999 41.9998 32.5979 41.9998 21C41.987 9.40762 32.5923 0.0129395 20.9999 0.00012207ZM26.9998 30.0001H22.5V34.4999C22.5 35.3285 21.8285 36 20.9999 36C20.1714 36 19.4998 35.3285 19.4998 34.4999V30.0001H15C14.1714 30.0006 13.4995 29.3295 13.499 28.5009C13.499 28.1599 13.6148 27.8289 13.8281 27.5625L23.8783 15.0001H15C14.1714 15.0001 13.4999 14.3286 13.4999 13.5C13.4999 12.6715 14.1714 11.9999 15 11.9999H19.4998V7.50012C19.4998 6.67157 20.1714 6.00003 20.9999 6.00003C21.8285 6.00003 22.5 6.67203 22.5 7.50012V11.9999H26.9998C27.8293 12.0013 28.5004 12.6747 28.4995 13.5037C28.499 13.8429 28.3832 14.1725 28.1717 14.4375L18.1215 26.9999H26.9998C27.8284 26.9999 28.4999 27.6719 28.4999 28.5C28.4999 29.3286 27.8284 30.0001 26.9998 30.0001Z"
                          fill="white"
                        />
                      </svg>
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Zcash
                        </h4>
                        <span className="text-white fs-14 op7">ZEC</span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <svg
                          className="mr-3"
                          width={42}
                          height={26}
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="3.42856"
                            height="25.1428"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 24 0)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="18.2856"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 17.1431 6.85712)"
                            fill="white"
                          />
                          <rect
                            width="3.42856"
                            height="7.99997"
                            rx="1.71428"
                            transform="matrix(-1 0 0 1 10.2861 17.1428)"
                            fill="white"
                          />
                          <rect
                            width="3.86812"
                            height="15.4725"
                            rx="1.93406"
                            transform="matrix(-1 0 0 1 3.86816 9.67029)"
                            fill="white"
                          />
                        </svg>
                        <h4 className="font-w500 text-white amount mb-0">
                          $168,331.09
                        </h4>
                      </div>
                      <div className="mb-2">
                        <svg
                          width={14}
                          height={8}
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.707108 6.06712C0.0771426 6.69709 0.523309 7.77423 1.41421 7.77423L12.3601 7.77423C13.251 7.77423 13.6972 6.69709 13.0672 6.06712L7.59426 0.594186C7.20373 0.203662 6.57057 0.203662 6.18005 0.594186L0.707108 6.06712Z"
                            fill="#61C277"
                          />
                        </svg>
                        <span className="text-white fs-14 px-1">45% This Week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between border-0">
                    <div className="footer-info font-w600">
                      <span className="text-success px-1 ">BUY</span>
                      <span className="text-black px-1 d-block">$5,673</span>
                    </div>
                    <div className="footer-info font-w600">
                      <span className="text-danger px-1 ">SELL</span>
                      <span className="text-black px-1 d-block">$5,982</span>
                    </div>
                    <Link
                      to="/portofolio"
                      className="underline text-primary font-w500 footer-info"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="row">
          <div className="col-xl-6 col-xxl-12 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="fs-20 text-black">Current Graph</h4>
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
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Delete
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12 col-sm-12 d-flex justify-content-center">
                    {/* <div id="pieChart" /> */}
                    <CurrentGraph />
                  </div>
                  <div className=" col-xl-12 col-sm-12">
                    <div className="row text-black fs-13 mt-4">
                      <span className="mb-3 col-6">
                        <svg
                          className="mr-2"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#3C8AFF" />
                        </svg>
                        Food
                      </span>
                      <span className="mb-3 col-6">
                        <svg
                          className="mr-2"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#FF5166" />
                        </svg>
                        Rent
                      </span>
                      <span className="mb-3 col-6">
                        <svg
                          className="mr-2"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#ED3DD1" />
                        </svg>
                        Transport
                      </span>
                      <span className="mb-3 col-6">
                        <svg
                          className="mr-2"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#2BC844" />
                        </svg>
                        Installment
                      </span>
                      <span className="mb-3 col-6">
                        <svg
                          className="mr-2"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={14} height={14} rx={4} fill="#FFEE54" />
                        </svg>
                        Investment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-12 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="fs-20 text-black">Current Graph</h4>
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
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Delete
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body">
                {/* <canvas id="lineChart2" height={300} /> */}
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <Tab.Container defaultActiveKey="monthly">
                <div className="card-header flex-wrap d-block d-sm-flex border-0 pb-2">
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
                          className="c-pointer nav-link"
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
                          className="c-pointer nav-link"
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
                          className="c-pointer nav-link"
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
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                Topup
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
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                -$912
                              </span>
                            </td>
                            <td>
                              <Link
                                className="btn-link text-danger float-right"
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                Topup
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
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                Topup
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
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                -$912
                              </span>
                            </td>
                            <td>
                              <Link
                                className="btn-link text-danger float-right"
                                to="/portofolio"
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
                              <span className="font-w600 text-black">
                                -$542
                              </span>
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
                              <span className="font-w600 text-black">
                                Ripple
                              </span>
                            </td>
                            <td>
                              <span className="text-black">06:24:45 AM</span>
                            </td>
                            <td>
                              <span className="font-w600 text-black">
                                -$912
                              </span>
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
                                Ripple
                              </span>
                            </td>
                            <td>
                              <span className="text-black">06:24:45 AM</span>
                            </td>
                            <td>
                              <span className="font-w600 text-black">
                                -$912
                              </span>
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
                  <Tab.Pane
                    className="tab-pane"
                    eventKey="Today"
                    role="tabpanel"
                  >
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
                              <span className="font-w600 text-black">
                                -$542
                              </span>
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
                              <span className="font-w600 text-black">
                                Ripple
                              </span>
                            </td>
                            <td>
                              <span className="text-black">06:24:45 AM</span>
                            </td>
                            <td>
                              <span className="font-w600 text-black">
                                -$912
                              </span>
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
                                to="/portofolio"
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
      </div>
    </div>
  );
};

export default Portofolio;
