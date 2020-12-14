import React from 'react';
import { Line } from 'react-chartjs-2';

var randomnumber=[];
for(var i=0;i<30;i++)
{
  randomnumber[i]=1+Math.floor(Math.random()*20);
}

const state = {
  labels: ['شنبه', 'یکشنبه', 'دوشنبه',
    'سشنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
  datasets: [
    {
      fillColor: "rgba(172,194,132,0.4)",
      strokeColor: "#ACC26D",
      pointColor: "#fff",
      backgroundColor:"#5ae5cc",
      // backgroundColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
      //pointStrokeColor : "#9DB86D",
      data: randomnumber,
      //showLines: false

    }
  ]
}

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,

              fontSize: 20
            },
            legend: {
              display: false,
              position: 'right'
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11
                  },
                  scaleLabel: {
                    display: false
                  },
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11
                  },
                  stacked: true
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                  },
                  ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11
                  },
                  stacked: true
                }
              ]
            },
          }}
        />
      </div>
    );
  }
}