import React from 'react';
import '../chartR/chart.css';
import { Line } from 'react-chartjs-2';

var randomnumber = [];
for (var i = 0; i < 60; i++) {
  randomnumber[i] = 1 + Math.floor(Math.random() * 20);
}

const state = {
  labels: ['Jon', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'Nor', 'Doc'],
  datasets: [
    {
      fill: false,
      strokeColor: '#F7931E',
      pointColor: '#F7931E',
      backgroundColor: '#26A69A',
      data: randomnumber,
      label: 'National Average',
      borderColor: '#F7931E',
    },
    {
      label: 'National Average',
      data: randomnumber,
      fill: false,
      borderColor: '#26A69A',
      backgroundColor: '#F7931E',
    },
  ],
};

export default class Chart extends React.Component {
  render() {
    return (
      <div className="right_bottom">
        <div className="chart">
          <Line
            data={state}
            options={{
              title: {
                display: true,
                fontSize: 20,
              },
              legend: {
                display: false,
                position: 'right',
              },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      fontFamily: "'Open Sans Bold', sans-serif",
                      fontSize: 11,
                    },
                    scaleLabel: {
                      display: false,
                    },
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      fontFamily: "'Open Sans Bold', sans-serif",
                      fontSize: 11,
                    },
                    stacked: true,
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                      color: '#fff',
                      zeroLineColor: '#fff',
                      zeroLineWidth: 0,
                    },
                    ticks: {
                      fontFamily: "'Open Sans Bold', sans-serif",
                      fontSize: 11,
                    },
                    stacked: true,
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}
