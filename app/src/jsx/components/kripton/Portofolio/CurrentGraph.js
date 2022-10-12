import React from "react";
import ReactApexChart from "react-apexcharts";

class CurrentGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [34, 12, 41, 22, 15],
      options: {
        chart: {
          type: "donut",
          width: 200,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        colors: ["#3C8AFF", "#ED3DD1", "#FFEE54", "#FF5166", "#2BC844"],
        legend: {
          position: "bottom",
          show: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {},
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={180}
          width={200}
        />
      </div>
    );
  }
}

export default CurrentGraph;
