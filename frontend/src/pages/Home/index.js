import React, { useEffect } from 'react';
import Chart from 'chart.js';
import api from '../../services/api';

import './styles.css';

export default function Home() {

    useEffect(() => {
        createChart();
    }, []);

    const createChart = async () => {
        var config = { headers: {'market': localStorage.getItem('user-id')} };

        var response = await api.get('shopping', config);
        var shoppingList = response.data;

        var greenMarketData = [
            0,
            shoppingList[0].bags,
            shoppingList[1].bags,
            shoppingList[2].bags,
            shoppingList[3].bags,
        ]
        var ConventionalData = [
            0,
            shoppingList[0].bags,
            shoppingList[1].bags + 1,
            shoppingList[2].bags + 2,
            shoppingList[3].bags + 3,
        ]

        new Chart(document.getElementById("myChart"), {
            type: 'line',
            data: {
            labels: [0,20,40,60,80],
            datasets: [{
                data: ConventionalData,
                label: "Conventional Markets",
                borderColor: "#3e95cd",
                fill: false
                }, {
                data: greenMarketData,
                label: "Green Markets",
                borderColor: "#3cba9f",
                fill: false
                }
            ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Bags spended per kg'
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
    }

    return (
        <div className="chart-container">
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    );
}