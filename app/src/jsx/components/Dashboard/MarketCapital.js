import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MarketCapital = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#marketCapital tbody tr")
  );
  const [activeName, setActiveName] = useState("Newest");
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#marketCapital tbody tr"));
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };
  return (
    <>
      <div className="d-flex align-items-center flex-wrap mb-3">
        <div className="input-group search-area-2 mb-3 mr-auto d-inline-flex">
          <div className="input-group-append">
            <a href="javascript:void(0);" className="input-group-text">
              <i className="flaticon-381-search-2" />
            </a>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
        </div>
        <a
          href="javascript:void(0);"
          className="btn btn-primary btn-rounded mb-3 mr-3"
        >
          <i className="las la-download scale5 mr-2" />
          Get Report
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-outline-primary btn-rounded mb-3 mr-3 button-style"
        >
          <i className="las la-calendar scale5 mr-2" />
          Filter Periode
        </a>
        <Dropdown className="dropdown bootstrap-select form-control style-1 default-select mb-3">
          <Dropdown.Toggle
            variant=""
            type="button"
            className="btn dropdown-toggle btn-light"
            data-toggle="dropdown"
            role="button"
            title="Latest"
            aria-expanded="false"
          >
            {activeName}
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu"
            role="combobox"
            x-placement="bottom-start"
            style={{
              maxHeight: 174,
              overflow: "hidden",
              minHeight: 0,
              position: "absolute",
              willChange: "transform",
              top: 0,
              left: 0,
              transform: "translate3d(0px, 41px, 0px)",
            }}
          >
            <Dropdown.Item onClick={() => setActiveName("Newest")}>
              Newest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActiveName("Oldest")}>
              Oldest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActiveName("Latest")}>
              Latest
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="table-responsive table-hover fs-14 ">
            <div id="example6_wrapper" className="dataTables_wrapper no-footer">
              <table
                className="table display mb-4 dataTablesCard font-w600 short-one border-no card-table text-black dataTable no-footer"
                id="marketCapital"
                role="grid"
                aria-describedby="example6_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-sort="ascending"
                      aria-label="Rank: activate to sort column descending"
                      style={{ width: 63 }}
                    >
                      Rank
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Coin: activate to sort column ascending"
                      style={{ width: "118.667px" }}
                    >
                      Coin
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Last Price: activate to sort column ascending"
                      style={{ width: "76.6667px" }}
                    >
                      Last Price
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Change (24h): activate to sort column ascending"
                      style={{ width: 104 }}
                    >
                      Change (24h)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Volume (24h): activate to sort column ascending"
                      style={{ width: "113.333px" }}
                    >
                      Volume (24h)
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Graph: activate to sort column ascending"
                      style={{ width: "124.667px" }}
                    >
                      Graph
                    </th>
                    <th
                      className="bg-none width50 sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label=": activate to sort column ascending"
                      style={{ width: "58.6667px" }}
                    />
                    <th
                      className="bg-none width50 sorting"
                      tabIndex={0}
                      aria-controls="example6"
                      rowSpan={1}
                      colSpan={1}
                      aria-label=": activate to sort column ascending"
                      style={{ width: "48.3333px" }}
                    />
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <span className="bgl-primary text-primary rank-ic fs-20">
                        #1
                      </span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.6335 23.1222C20.2266 23.2577 19.7734 23.2577 19.3665 23.1222L15 21.6666L20 30L25 21.6666L20.6335 23.1222Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 20L25 18.0001L20 10L15 18.0001L20 20Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C39.9878 8.95956 31.0404 0.0122071 20 0ZM28.4207 19.2105L21.2778 33.4962C20.9251 34.2021 20.0667 34.488 19.3613 34.1353C19.0845 33.9972 18.8604 33.7731 18.7222 33.4962L11.5793 19.2105C11.3574 18.7649 11.3827 18.2361 11.646 17.8136L18.7889 6.38517C19.2636 5.7164 20.1901 5.55858 20.8588 6.03335C20.9953 6.13013 21.1143 6.24872 21.2111 6.38517L28.3536 17.8136C28.6173 18.2361 28.6426 18.7649 28.4207 19.2105Z"
                          fill="#00ADA3"
                        />
                      </svg>
                      <span className="text-black">Ethereum</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        6,2,8,4,3,8,1,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="6.363636363636363"
                          y="23.333333333333336"
                          width="5.454545454545455"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="24.545454545454547"
                          y="54.44444444444444"
                          width="5.454545454545453"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="42.72727272727273"
                          y="7.777777777777779"
                          width="5.454545454545453"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="97.27272727272727"
                          y="7.777777777777779"
                          width="5.4545454545454675"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={1}
                          fill="#363062"
                          x="115.45454545454545"
                          y="62.22222222222222"
                          width="5.454545454545453"
                          height="7.777777777777779"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        4%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <span className="bgl-primary text-primary rank-ic fs-20">
                        #2
                      </span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
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
                      <span className="text-black">Bitcoin</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        3,6,4,4,7,2,6,3,6,5,4
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="6.363636363636363"
                          y={40}
                          width="5.454545454545455"
                          height={30}
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="24.545454545454547"
                          y={10}
                          width="5.454545454545453"
                          height={60}
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="42.72727272727273"
                          y={30}
                          width="5.454545454545453"
                          height={40}
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y={30}
                          width="5.454545454545453"
                          height={40}
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="79.09090909090908"
                          y={0}
                          width="5.454545454545482"
                          height={70}
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="97.27272727272727"
                          y={50}
                          width="5.4545454545454675"
                          height={20}
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="115.45454545454545"
                          y={10}
                          width="5.454545454545453"
                          height={60}
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y={40}
                          width="5.4545454545454675"
                          height={30}
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y={10}
                          width="5.4545454545454675"
                          height={60}
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y={20}
                          width="5.4545454545454675"
                          height={50}
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="188.1818181818182"
                          y={30}
                          width="5.454545454545439"
                          height={40}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.5%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <span className="bgl-primary text-primary rank-ic fs-20">
                        #3
                      </span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.2176 0.00189099C5.59969 -0.114662 0.120182 5.17136 0.00359729 11.7875C-0.035493 13.869 0.464451 15.8373 1.37107 17.5623H5.14363V5.75207C5.14363 5.03013 6.12501 4.80045 6.4439 5.44835L12.0016 16.6998L17.5593 5.44903C17.8782 4.80045 18.8595 5.03013 18.8595 5.75207V17.5623H22.6204C23.464 15.9594 23.966 14.1494 23.9996 12.2194C24.1162 5.60329 18.8355 0.1253 12.2176 0.00189099Z"
                          fill="#FF782C"
                        />
                        <path
                          d="M17.4879 18.2479V8.6892L12.6161 18.5516C12.3856 19.0199 11.6169 19.0199 11.3864 18.5516L6.51522 8.6892V18.2479C6.51522 18.6264 6.20867 18.9335 5.82943 18.9335H2.22832C4.36183 21.9303 7.83058 23.9241 11.7856 23.9981C15.8983 24.0708 19.5686 22.0551 21.7886 18.9335H18.1737C17.7945 18.9335 17.4879 18.6264 17.4879 18.2479Z"
                          fill="#FF782C"
                        />
                      </svg>
                      <span className="text-black">Monero</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        4,4,7,3,3,1,7,5,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="6.363636363636363"
                          y="38.888888888888886"
                          width="5.454545454545455"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="24.545454545454547"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="42.72727272727273"
                          y="15.555555555555557"
                          width="5.454545454545453"
                          height="54.44444444444444"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="60.90909090909091"
                          y="46.66666666666667"
                          width="5.454545454545453"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={1}
                          fill="#363062"
                          x="97.27272727272727"
                          y="62.22222222222222"
                          width="5.4545454545454675"
                          height="7.777777777777779"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="115.45454545454545"
                          y="15.555555555555557"
                          width="5.454545454545453"
                          height="54.44444444444444"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x="133.63636363636363"
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.45%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#4</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z"
                          fill="#374C98"
                        />
                      </svg>
                      <span className="text-black">Litecoin</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        6,7,2,4,7,5,1,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="6.363636363636363"
                          y="23.333333333333336"
                          width="5.454545454545455"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="24.545454545454547"
                          y="15.555555555555557"
                          width="5.454545454545453"
                          height="54.44444444444444"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="42.72727272727273"
                          y="54.44444444444444"
                          width="5.454545454545453"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="79.09090909090908"
                          y="15.555555555555557"
                          width="5.454545454545482"
                          height="54.44444444444444"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x="97.27272727272727"
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={1}
                          fill="#363062"
                          x="115.45454545454545"
                          y="62.22222222222222"
                          width="5.454545454545453"
                          height="7.777777777777779"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        4%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#5</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.6335 23.1222C20.2266 23.2577 19.7734 23.2577 19.3665 23.1222L15 21.6666L20 30L25 21.6666L20.6335 23.1222Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 20L25 18.0001L20 10L15 18.0001L20 20Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C39.9878 8.95956 31.0404 0.0122071 20 0ZM28.4207 19.2105L21.2778 33.4962C20.9251 34.2021 20.0667 34.488 19.3613 34.1353C19.0845 33.9972 18.8604 33.7731 18.7222 33.4962L11.5793 19.2105C11.3574 18.7649 11.3827 18.2361 11.646 17.8136L18.7889 6.38517C19.2636 5.7164 20.1901 5.55858 20.8588 6.03335C20.9953 6.13013 21.1143 6.24872 21.2111 6.38517L28.3536 17.8136C28.6173 18.2361 28.6426 18.7649 28.4207 19.2105Z"
                          fill="#00ADA3"
                        />
                      </svg>
                      <span className="text-black">Ethereum</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        2,8,3,4,3,2,9,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="6.363636363636363"
                          y="54.44444444444444"
                          width="5.454545454545455"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="24.545454545454547"
                          y="7.777777777777779"
                          width="5.454545454545453"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="42.72727272727273"
                          y="46.66666666666667"
                          width="5.454545454545453"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="97.27272727272727"
                          y="54.44444444444444"
                          width="5.4545454545454675"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="115.45454545454545"
                          y={0}
                          width="5.454545454545453"
                          height={70}
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.7%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#6</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
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
                      <span className="text-black">XRP</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        2,4,8,4,3,8,5,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="6.363636363636363"
                          y="54.44444444444444"
                          width="5.454545454545455"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="24.545454545454547"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="42.72727272727273"
                          y="7.777777777777779"
                          width="5.454545454545453"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="97.27272727272727"
                          y="7.777777777777779"
                          width="5.4545454545454675"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x="115.45454545454545"
                          y="31.111111111111107"
                          width="5.454545454545453"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.5%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#7</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.001 0C5.37358 0 0.000976562 5.3726 0.000976562 12C0.000976562 18.6274 5.37358 24 12.001 24C18.6284 24 24.001 18.6274 24.001 12C23.9934 5.37574 18.6252 0.00758581 12.001 0ZM16.2867 18.0001H9.42964C8.95618 18.0001 8.57244 17.6164 8.57244 17.1429C8.57244 17.1024 8.57532 17.0618 8.58107 17.0216L9.22613 12.5054L7.9232 12.8313C7.85519 12.8486 7.78535 12.8572 7.71524 12.8572C7.24178 12.8567 6.85857 12.4727 6.85883 11.9992C6.85935 11.6063 7.12669 11.2642 7.50781 11.1684L9.48771 10.6735L10.2952 5.0213C10.3622 4.55254 10.7964 4.22714 11.2652 4.2941C11.7339 4.36107 12.0593 4.79529 11.9923 5.26404L11.2835 10.2247L14.3646 9.4543C14.8232 9.33737 15.2896 9.61439 15.4062 10.0729C15.5232 10.5315 15.2461 10.9979 14.7876 11.1148C14.785 11.1153 14.7824 11.1161 14.7797 11.1166L11.0214 12.0562L10.4174 16.2857H16.2867C16.7602 16.2857 17.1439 16.6695 17.1439 17.1429C17.1439 17.6161 16.7602 18.0001 16.2867 18.0001Z"
                          fill="#374C98"
                        />
                      </svg>
                      <span className="text-black">Litecoin</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        6,2,8,4,3,8,1,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="6.363636363636363"
                          y="23.333333333333336"
                          width="5.454545454545455"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="24.545454545454547"
                          y="54.44444444444444"
                          width="5.454545454545453"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="42.72727272727273"
                          y="7.777777777777779"
                          width="5.454545454545453"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="97.27272727272727"
                          y="7.777777777777779"
                          width="5.4545454545454675"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={1}
                          fill="#363062"
                          x="115.45454545454545"
                          y="62.22222222222222"
                          width="5.454545454545453"
                          height="7.777777777777779"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        4%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#8</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
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
                      <span className="text-black">Bitcoin</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        3,2,8,5,7,8,3,3,6,7,2
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="6.363636363636363"
                          y="43.75"
                          width="5.454545454545455"
                          height="26.25"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="24.545454545454547"
                          y="52.5"
                          width="5.454545454545453"
                          height="17.5"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="42.72727272727273"
                          y={0}
                          width="5.454545454545453"
                          height={70}
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x="60.90909090909091"
                          y="26.25"
                          width="5.454545454545453"
                          height="43.75"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x="79.09090909090908"
                          y="8.75"
                          width="5.454545454545482"
                          height="61.25"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="97.27272727272727"
                          y={0}
                          width="5.4545454545454675"
                          height={70}
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="115.45454545454545"
                          y="43.75"
                          width="5.454545454545453"
                          height="26.25"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="43.75"
                          width="5.4545454545454675"
                          height="26.25"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="17.5"
                          width="5.4545454545454675"
                          height="52.5"
                        />
                        <rect
                          data-value={7}
                          fill="#363062"
                          x={170}
                          y="8.75"
                          width="5.4545454545454675"
                          height="61.25"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="188.1818181818182"
                          y="52.5"
                          width="5.454545454545439"
                          height="17.5"
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.5%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">
                      <span className="rank-ic fs-20">#9</span>
                    </td>
                    <td className="wspace-no">
                      <svg
                        className="mr-2"
                        width={42}
                        height={42}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.6335 23.1222C20.2266 23.2577 19.7734 23.2577 19.3665 23.1222L15 21.6666L20 30L25 21.6666L20.6335 23.1222Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 20L25 18.0001L20 10L15 18.0001L20 20Z"
                          fill="#00ADA3"
                        />
                        <path
                          d="M20 0C8.95433 0 0 8.95433 0 20C0 31.0457 8.95433 40 20 40C31.0457 40 40 31.0457 40 20C39.9878 8.95956 31.0404 0.0122071 20 0ZM28.4207 19.2105L21.2778 33.4962C20.9251 34.2021 20.0667 34.488 19.3613 34.1353C19.0845 33.9972 18.8604 33.7731 18.7222 33.4962L11.5793 19.2105C11.3574 18.7649 11.3827 18.2361 11.646 17.8136L18.7889 6.38517C19.2636 5.7164 20.1901 5.55858 20.8588 6.03335C20.9953 6.13013 21.1143 6.24872 21.2111 6.38517L28.3536 17.8136C28.6173 18.2361 28.6426 18.7649 28.4207 19.2105Z"
                          fill="#00ADA3"
                        />
                      </svg>
                      <span className="text-black">Ethereum</span>
                    </td>
                    <td>$11,911.48</td>
                    <td>2,54%</td>
                    <td>$220,083,007,631</td>
                    <td>
                      <span
                        className="bar"
                        data-peity='{ "fill": ["rgb(54, 48, 98)", "rgba(54, 48, 98, .5)"]}'
                        style={{ display: "none" }}
                      >
                        6,2,8,4,3,8,1,3,6,5,9
                      </span>
                      <svg className="peity" height={70} width={200}>
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="6.363636363636363"
                          y="23.333333333333336"
                          width="5.454545454545455"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={2}
                          fill="#363062"
                          x="24.545454545454547"
                          y="54.44444444444444"
                          width="5.454545454545453"
                          height="15.555555555555557"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="42.72727272727273"
                          y="7.777777777777779"
                          width="5.454545454545453"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={4}
                          fill="#363062"
                          x="60.90909090909091"
                          y="38.888888888888886"
                          width="5.454545454545453"
                          height="31.111111111111114"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="79.09090909090908"
                          y="46.66666666666667"
                          width="5.454545454545482"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={8}
                          fill="#363062"
                          x="97.27272727272727"
                          y="7.777777777777779"
                          width="5.4545454545454675"
                          height="62.22222222222222"
                        />
                        <rect
                          data-value={1}
                          fill="#363062"
                          x="115.45454545454545"
                          y="62.22222222222222"
                          width="5.454545454545453"
                          height="7.777777777777779"
                        />
                        <rect
                          data-value={3}
                          fill="#363062"
                          x="133.63636363636363"
                          y="46.66666666666667"
                          width="5.4545454545454675"
                          height="23.33333333333333"
                        />
                        <rect
                          data-value={6}
                          fill="#363062"
                          x="151.8181818181818"
                          y="23.333333333333336"
                          width="5.4545454545454675"
                          height="46.666666666666664"
                        />
                        <rect
                          data-value={5}
                          fill="#363062"
                          x={170}
                          y="31.111111111111107"
                          width="5.4545454545454675"
                          height="38.88888888888889"
                        />
                        <rect
                          data-value={9}
                          fill="#363062"
                          x="188.1818181818182"
                          y={0}
                          width="5.454545454545439"
                          height={70}
                        />
                      </svg>
                    </td>
                    <td>
                      <p className="mb-0 wspace-no">
                        <i
                          className="fa fa-caret-up scale5 mr-2 text-success"
                          aria-hidden="true"
                        />
                        0.45%
                      </p>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-4">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                              stroke="#A7A7A7"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu dropdown-menu-right"
                          alignRight={true}
                        >
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Delete
                          </a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/market-capital"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    Previous
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/market-capital"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                        style={{ display: "inline-block" }}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/market-capital"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCapital;
