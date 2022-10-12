import React from "react";
import ReactApexChart from "react-apexcharts";

class CryptoStatisticsDark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [30, 50, 40, 50, 50, 40, 30, 45, 55, 65, 50],
        },
        {
          name: "series2",
          data: [20, 40, 30, 40, 40, 30, 20, 35, 45, 55, 40],
        },
      ],
      options: {
        chart: {
          height: 360,
          toolbar: {
            show: false,
          },
          type: "area",
        },
        colors: ["#FFAB2D", "#AC4CBC"],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 4,
          curve: "smooth",
        },
        grid: {
          borderColor: "#242232",
          strokeDashArray: 8,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
          ],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
        yaxis: {
          show: false,
        },
        fill: {
          opacity: 0.2,
          type: "solid",
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={320}
        />
      </div>
    );
  }
}

export default CryptoStatisticsDark;
