import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidgetChart3 extends Component {
  render() {
    const data = {
      labels: ["", "", "", "", "", "", "", "", ""],

      datasets: [
        {
          label: "Sales Stats",
          borderColor: "transparent",
          pointBackgroundColor: "#FFAB2D",
          pointBorderColor: "#FFAB2D",
          borderWidth: 4,
          borderRadius: 10,
          pointHoverBackgroundColor: "#FFAB2D",
          pointHoverBorderColor: "#FFAB2D",
          backgroundColor: "rgba(61, 201, 94, 1)",

          data: [17, 20, 30, 20, 34, 25, 30, 32, 31],
        },
      ],
    };

    const options = {
      title: {
        display: !1,
      },
      tooltips: {
        intersect: !0,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },

      legend: {
        display: !1,
      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
          },
        ],
        yAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          borderWidth: 0,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        },
      },
    };
    return (
      <>
        <Line
          data={data}
          options={options}
          height={this.props.height ? this.props.height : 120}
        />
      </>
    );
  }
}

export default WidgetChart3;
