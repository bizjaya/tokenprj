/// Menu
import MetisMenu from 'metismenujs';
import React, { Component, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar';
/// Link
import { Link } from 'react-router-dom';
import useScrollPosition from 'use-scroll-position';
import { ThemeContext } from '../../../context/ThemeContext';
import book from '../../../images/book.png';
class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector('.nav-control');
    var aaa = document.querySelector('#main-wrapper');
    function toggleFunc() {
      return aaa.classList.toggle('menu-toggle');
    }
    btn.addEventListener('click', toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector('.heart');
    function heartBlast() {
      return handleheartBlast.classList.toggle('heart-blast');
    }

    handleheartBlast.addEventListener('click', heartBlast);
  }, []);
  let scrollPosition = useScrollPosition();

  const wallet = useSelector((state) => state.wallet);
  const OWNZER = process.env.REACT_APP_OWNZER;

  /// Path
  let path = window.location.pathname;
  path = path.split('/');
  path = path[path.length - 1];
  /// Active menu
  let history = ['stake-history', 'reward-history'];
  let mynetwork = ['level-1', 'level-2', 'level-3', 'level-4', 'level-5'];
  let deshBoard = ['', 'dashboard-dark', 'coin-details', 'my-wallets', 'transactions', 'portofolio', 'market-capital'],
    app = [
      'app-profile',
      'post-details',
      'app-calender',
      'email-compose',
      'email-inbox',
      'email-read',
      'ecom-product-grid',
      'ecom-product-list',
      'ecom-product-order',
      'ecom-checkout',
      'ecom-invoice',
      'ecom-customers',
      'post-details',
      'ecom-product-detail',
    ],
    email = ['email-compose', 'email-inbox', 'email-read'],
    shop = [
      'ecom-product-grid',
      'ecom-product-list',
      'ecom-product-list',
      'ecom-product-order',
      'ecom-checkout',
      'ecom-invoice',
      'ecom-customers',
      'ecom-product-detail',
    ],
    charts = ['chart-rechart', 'chart-flot', 'chart-chartjs', 'chart-chartist', 'chart-sparkline', 'chart-apexchart'],
    bootstrap = [
      'ui-accordion',
      'ui-badge',
      'ui-alert',
      'ui-button',
      'ui-modal',
      'ui-button-group',
      'ui-list-group',
      'ui-media-object',
      'ui-card',
      'ui-carousel',
      'ui-dropdown',
      'ui-popover',
      'ui-progressbar',
      'ui-tab',
      'ui-typography',
      'ui-pagination',
      'ui-grid',
    ],
    plugins = ['uc-select2', 'uc-nestable', 'uc-sweetalert', 'uc-toastr', 'uc-noui-slider', 'map-jqvmap'],
    widget = ['widget-basic'],
    forms = ['form-element', 'form-wizard', 'form-editor-summernote', 'form-pickers', 'form-validation-jquery'],
    table = ['table-bootstrap-basic', 'table-datatable-basic'],
    pages = [
      'page-register',
      'page-login',
      'page-lock-screen',
      'page-error-400',
      'page-error-403',
      'page-error-404',
      'page-error-500',
      'page-error-503',
    ],
    error = ['page-error-400', 'page-error-403', 'page-error-404', 'page-error-500', 'page-error-503'];

  const canShow = OWNZER.toUpperCase() === wallet?.Acct.toUpperCase();

  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === 'fixed' && sidebarLayout.value === 'horizontal' && headerposition.value === 'static'
          ? scrollPosition > 120
            ? 'fixed'
            : ''
          : ''
      }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? 'mm-active' : ''}`}>
            <Link className="has-arrow ai-icon" to="/" aria-expanded="false">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>

          {/* <li className={`${path === "staking" ? "mm-active" : ""}`}>
            <Link
              className="has-arrow ai-icon"
              to="/staking"
              aria-expanded="false"
            >
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Staking</span>
            </Link>
          </li>
          <li className={`${path === "community-rewards" ? "mm-active" : ""}`}>
            <Link
              className="has-arrow ai-icon"
              to="/community-rewards"
              aria-expanded="false"
            >
              <i className="flaticon-381-internet"></i>
              <span className="nav-text">Community Rewards</span>
            </Link>
          </li> */}
          <li className={`${mynetwork.includes(path) ? 'mm-active' : ''}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-layer-1"></i>
              <span className="nav-text">My Community</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link className={`${path === 'level-1' ? 'mm-active' : ''}`} to="/community/level-1">
                  Level 1
                </Link>
              </li>
              <li>
                <Link className={`${path === 'level-2' ? 'mm-active' : ''}`} to="/community/level-2">
                  Level 2
                </Link>
              </li>
              <li>
                <Link className={`${path === 'level-3' ? 'mm-active' : ''}`} to="/community/level-3">
                  Level 3
                </Link>
              </li>
              <li>
                <Link className={`${path === 'level-4' ? 'mm-active' : ''}`} to="/community/level-4">
                  Level 4
                </Link>
              </li>
              <li>
                <Link className={`${path === 'level-5' ? 'mm-active' : ''}`} to="/community/level-5">
                  Level 5
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className={`${history.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-layer-1"></i>
              <span className="nav-text">My History</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "staking-history" ? "mm-active" : ""}`}
                  to="/staking-history"
                >
                  Staking History
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "rewards-history" ? "mm-active" : ""}`}
                  to="/rewards-history"
                >
                  Reward History
                </Link>
              </li>
            </ul>
          </li> */}

          {!canShow ? (
            <></>
          ) : (
            <li className={`${path === 'statz' ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="/statz" aria-expanded="false">
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Statistics</span>
              </Link>
            </li>
          )}
          {/*
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Apps</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "app-profile" ? "mm-active" : ""}`}
                  to="/app-profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "post-details" ? "mm-active" : ""}`}
                  to="/post-details"
                >
                  Post Details
                </Link>
              </li>
              <li className={`${email.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" aria-expanded="false">
                  Email
                </Link>
                <ul
                  aria-expanded="false"
                  className={`${email.includes(path) ? "mm-show" : ""}`}
                >
                  <li>
                    <Link
                      className={`${
                        path === "email-compose" ? "mm-active" : ""
                      }`}
                      to="/email-compose"
                    >
                      Compose
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "email-inbox" ? "mm-active" : ""}`}
                      to="/email-inbox"
                    >
                      Inbox
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "email-read" ? "mm-active" : ""}`}
                      to="/email-read"
                    >
                      Read
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${path === "app-calender" ? "mm-active" : ""}`}
                  to="/app-calender"
                >
                  Calendar
                </Link>
              </li>
              <li className={`${shop.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" aria-expanded="false">
                  Shop
                </Link>
                <ul
                  aria-expanded="false"
                  className={`${shop.includes(path) ? "mm-show" : ""}`}
                >
                  <li>
                    <Link
                      className={`${
                        path === "ecom-product-grid" ? "mm-active" : ""
                      }`}
                      to="/ecom-product-grid"
                    >
                      Product Grid
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-product-list" ? "mm-active" : ""
                      }`}
                      to="/ecom-product-list"
                    >
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-product-detail" ? "mm-active" : ""
                      }`}
                      to="/ecom-product-detail"
                    >
                      Product Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-product-order" ? "mm-active" : ""
                      }`}
                      to="/ecom-product-order"
                    >
                      Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-checkout" ? "mm-active" : ""
                      }`}
                      to="/ecom-checkout"
                    >
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-invoice" ? "mm-active" : ""
                      }`}
                      to="/ecom-invoice"
                    >
                      Invoice
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "ecom-customers" ? "mm-active" : ""
                      }`}
                      to="/ecom-customers"
                    >
                      Customers
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-controls-3"></i>
              <span className="nav-text">Charts</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                  to="/chart-rechart"
                >
                  RechartJs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                  to="/chart-chartjs"
                >
                  Chartjs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartist" ? "mm-active" : ""}`}
                  to="/chart-chartist"
                >
                  Chartist
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-sparkline" ? "mm-active" : ""}`}
                  to="/chart-sparkline"
                >
                  Sparkline
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-apexchart" ? "mm-active" : ""}`}
                  to="/chart-apexchart"
                >
                  Apexchart
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-internet"></i>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                  to="/ui-accordion"
                >
                  Accordion
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-alert" ? "mm-active" : ""}`}
                  to="/ui-alert"
                >
                  Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-badge" ? "mm-active" : ""}`}
                  to="/ui-badge"
                >
                  Badge
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button" ? "mm-active" : ""}`}
                  to="/ui-button"
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-modal" ? "mm-active" : ""}`}
                  to="/ui-modal"
                >
                  Modal
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button-group" ? "mm-active" : ""}`}
                  to="/ui-button-group"
                >
                  Button Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                  to="/ui-list-group"
                >
                  List Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-media-object" ? "mm-active" : ""}`}
                  to="/ui-media-object"
                >
                  Media Object
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-card" ? "mm-active" : ""}`}
                  to="/ui-card"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                  to="/ui-carousel"
                >
                  Carousel
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                  to="/ui-dropdown"
                >
                  Dropdown
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-popover" ? "mm-active" : ""}`}
                  to="/ui-popover"
                >
                  Popover
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-progressbar" ? "mm-active" : ""}`}
                  to="/ui-progressbar"
                >
                  Progressbar
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-tab" ? "mm-active" : ""}`}
                  to="/ui-tab"
                >
                  Tab
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-typography" ? "mm-active" : ""}`}
                  to="/ui-typography"
                >
                  Typography
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                  to="/ui-pagination"
                >
                  Pagination
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-grid" ? "mm-active" : ""}`}
                  to="/ui-grid"
                >
                  Grid
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-heart"></i>
              <span className="nav-text">Plugins</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "uc-select2" ? "mm-active" : ""}`}
                  to="/uc-select2"
                >
                  Select 2
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-nestable" ? "mm-active" : ""}`}
                  to="/uc-nestable"
                >
                  Nestedable
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-noui-slider" ? "mm-active" : ""}`}
                  to="/uc-noui-slider"
                >
                  Noui Slider
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                  to="/uc-sweetalert"
                >
                  Sweet Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                  to="/uc-toastr"
                >
                  Toastr
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "map-jqvmap" ? "mm-active" : ""}`}
                  to="/map-jqvmap"
                >
                  Jqv Map
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="widget-basic" className="ai-icon" aria-expanded="false">
              <i className="flaticon-381-settings-2"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-notepad"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-editor-summernote" ? "mm-active" : ""
                  }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "form-validation-jquery" ? "mm-active" : ""
                  }`}
                  to="/form-validation-jquery"
                >
                  Jquery Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-network"></i>
              <span className="nav-text">Table</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link
                  className={`${
                    path === "table-bootstrap-basic" ? "mm-active" : ""
                  }`}
                  to="/table-bootstrap-basic"
                >
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "table-datatable-basic" ? "mm-active" : ""
                  }`}
                  to="/table-datatable-basic"
                >
                  Datatable
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
              <i className="flaticon-381-layer-1"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul aria-expanded="false">
              <li>
                <Link to="/page-register">Register</Link>
              </li>
              <li>
                <Link to="/page-login">Login</Link>
              </li>
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" aria-expanded="false">
                  Error
                </Link>
                <ul aria-expanded="false">
                  <li>
                    <Link
                      className={`${
                        path === "page-error-400" ? "mm-active" : ""
                      }`}
                      to="/page-error-400"
                    >
                      Error 400
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-403" ? "mm-active" : ""
                      }`}
                      to="/page-error-403"
                    >
                      Error 403
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-404" ? "mm-active" : ""
                      }`}
                      to="/page-error-404"
                    >
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-500" ? "mm-active" : ""
                      }`}
                      to="/page-error-500"
                    >
                      Error 500
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        path === "page-error-503" ? "mm-active" : ""
                      }`}
                      to="/page-error-503"
                    >
                      Error 503
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${
                    path === "page-lock-screen" ? "mm-active" : ""
                  }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li>*/}
        </MM>
        {/* <div className="book-box">
          <img src={book} alt="" />
          <Link to="javascript:void(0);">Generate Report &gt;</Link>
        </div> */}
        <div className="copyright align-bottom" style={{ position: 'absolute', bottom: 0 }}>
          <p>
            <strong>Finquest Member Dashboard</strong> © 2022 All Rights Reserved
          </p>
          <p className="fs-12" style={{ display: 'none' }}>
            Made with <span className="heart" /> by FinQuest.io
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
