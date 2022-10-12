import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import MyNetworkTable from "./MyNetwork";

const DataTable = () => {
  return (
    <Fragment>
      <PageTitle
        activeMenu="Datatable"
        motherMenu="Table"
        pageContent="Datatable"
      />
      <div className="row">
        <MyNetworkTable />
      </div>
    </Fragment>
  );
};

export default DataTable;
