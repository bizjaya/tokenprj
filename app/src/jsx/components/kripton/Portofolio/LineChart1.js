import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: [
        "2:00PM",
        "2:30PM",
        "3:00PM",
        "3:30PM",
        "4:00PM",
        "4:30PM",
        "5:00PM",
        "5:30PM",
      ],
      datasets: [
        {
          label: "My First dataset",
          data: [18, 38, 38, 70, 75, 60, 75, 66],
          borderColor: "rgba(54, 48, 98, 1)",
          borderWidth: "4",
          pointHoverRadius: 10,
          backgroundColor: "rgba(54, 48, 98, 0.1)",
          pointBackgroundColor: "rgba(54, 48, 98, 1)",
        },
        {
          label: "My First dataset",
          data: [18, 20, 20, 30, 45, 40, 25, 37],
          borderColor: "rgba(91, 218, 164, 1)",
          borderWidth: "4",
          backgroundColor: "rgba(91, 218, 164, 0.1)",
          pointHoverRadius: 10,
          pointBorderWidth: 5,
          pointBorderColor: "rgba(255, 255, 255, 1)",
          pointBackgroundColor: "rgba(91, 218, 164, 1)",
        },
      ],
    };

    const options = {
      legend: false,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        yAxes: [
          {
            display: !1,
            ticks: {
              beginAtZero: true,
              max: 100,
              min: 0,
              stepSize: 20,
              padding: 10,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              padding: 5,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    };
    return (
      <>
        <Line
          data={data}
          options={options}
          height={this.props.height ? this.props.height : 300}
        />
      </>
    );
  }

  // componentDidMount() {
  //     const { datasets } = this.refs.chart.chartInstance.data
  //     console.log(datasets[0].data);
  // }
}

export default LineChart;
