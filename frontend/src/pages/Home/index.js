import React, { useEffect } from 'react';
import Chart from 'chart.js';

import './styles.css';

export default function Home() {

    useEffect(() => {
        new Chart(document.getElementById("myChart"), {
            type: 'line',
            data: {
              labels: [0,100,200,300,400,500,600],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133],
                  label: "Conventional Markets",
                  borderColor: "#3e95cd",
                  fill: false
                }, {
                  data: [168,170,178,230,203,276,408],
                  label: "Green Markets",
                  borderColor: "#3cba9f",
                  fill: false
                }
              ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Bags spended per kg (in 6 months)'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Bags'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Kg'
                        }
                    }]
                }
            }
          });
    }, []);

    return (
        <div className="chart-container">
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    );
}