import PageTitle from "../../layouts/PageTitle";
import React, { useState, useRef, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { Table, Dropdown } from "react-bootstrap";
import * as referralActions from "../../../redux/referralActions.js";

import { Link } from "react-router-dom";
import walletReducer from "../../../redux/walletReducer";
// import data from "./tableData.js";

const MyNetworkTable = () => {
  // const [data, setData] = useState(
  //   document.querySelectorAll("#memberTable_basic_table tbody tr")

  var pathname = window.location.pathname;

  // );
  const wallet = useSelector((state) => state.wallet);
  const data = useSelector((state) => state.referral.Refs);
  const paging = useSelector((state) => state.referral.paging);

  const dispatch = useDispatch();
  const { getRefs } = bindActionCreators(referralActions, dispatch);

  const [CurPage, setCurPage] = useState(1);
  const [Level, setLevel] = useState(1);

  useEffect(async () => {
    var lev = pathname.match(/level-([\d]*)\/*$/);
    if (window.valid(lev?.[1])) {
      setLevel(lev[1]);
    }
  }, [pathname]);

  useEffect(async () => {
    if (window.notempty(wallet.Acct)) {
      getRefs({ Id: wallet.Acct, Level });
    }
  }, [wallet.Acct, Level]);

  const TurnPage = () => {
    getRefs({ Id: wallet.Acct, Level, ...paging, PageNo: CurPage });
  };

  // use effect
  // useEffect(() => {

  // }, [test]);

  function showPage() {
    let str = "";
    if (paging.PageCount > 1) {
      str = `Showing ${(CurPage - 1) * paging.PageSize + 1} to ${
        CurPage * paging.PageSize
      } of ${paging.ResCount} entries`;
    } else {
      str = `Showing ${paging.ResCount} entries`;
    }
    return str;
  }

  const pagination = () => {
    let maxButtons = Math.min(5, paging.PageSize);
    let pages = Array(paging.PageCount)
      .fill(1)
      .map((_, i) => i + 1);
    return pages.splice(
      CurPage - 1 + maxButtons < paging.PageCount
        ? CurPage - 1
        : paging.PageCount - maxButtons,
      maxButtons
    );
  };

  return (
    <Fragment>
      {/* <PageTitle
        activeMenu="Datatable"
        motherMenu="Table"
        pageContent="Datatable"
      /> */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Member</h4>
            </div>
            <div className="card-body">
              <Table responsive className="w-100">
                <div
                  id="memberTable_basic_table"
                  className="dataTables_wrapper"
                >
                  <table
                    id="example5"
                    className="display dataTable no-footer w-100"
                    style={{ minWidth: 845 }}
                    role="grid"
                    aria-describedby="example5_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Member ID: activate to sort column ascending"
                          style={{ width: 73 }}
                        >
                          Address
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Date Check in: activate to sort column ascending"
                          style={{ width: 100 }}
                        >
                          User ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Member Name: activate to sort column ascending"
                          style={{ width: 100 }}
                        >
                          Referrer
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Member Name: activate to sort column ascending"
                          style={{ width: 100 }}
                        >
                          Level
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Doctor Assgined: activate to sort column ascending"
                          style={{ width: 120 }}
                        >
                          Staked Amt
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => {
                        return (
                          <tr role="row" className="odd">
                            <td>{row.Addr}</td>
                            <td>{row.UsrId}</td>
                            <td>{row.RefId}</td>
                            <td>{row.Level}</td>
                            <td>{row.StkAmt}</td>

                            {/* <td>
                          <span className="badge light badge-danger">
                            <i className="fa fa-circle text-danger mr-1" />
                            New Member
                          </span>
                        </td> */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                    <div className="dataTables_info">{showPage()}</div>
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="example5_paginate"
                    >
                      <Link
                        className={`paginate_button previous ${
                          CurPage > 1 ? "" : "disabled"
                        }`}
                        to="#"
                        onClick={
                          CurPage > 1
                            ? () => {
                                setCurPage(CurPage - 1);
                                TurnPage();
                              }
                            : null
                        }
                      >
                        Previous
                      </Link>
                      <span>
                        {pagination().map((number, i) => (
                          <Link
                            key={i}
                            to="#"
                            className={`paginate_button  ${
                              CurPage === number ? "current" : ""
                            } `}
                            onClick={() => {
                              setCurPage(number);
                              TurnPage();
                            }}
                          >
                            {number}
                          </Link>
                        ))}
                      </span>
                      <Link
                        className={`paginate_button next ${
                          CurPage < paging.PageCount ? "" : "disabled"
                        }`}
                        to="#"
                        onClick={
                          CurPage < paging.PageCount
                            ? () => {
                                setCurPage(CurPage + 1);
                                TurnPage();
                              }
                            : null
                        }
                      >
                        Next
                      </Link>
                    </div>
                  </div>
                </div>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyNetworkTable;
