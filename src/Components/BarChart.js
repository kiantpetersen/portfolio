import React from 'react';
import { Bar } from 'react-chartjs-2'
import '../styles/css/queries.css'
import '../styles/css/compCss/charts.css';

function BarChart(props) {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={props.chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020",
                            color: '#fff',
                            font: {
                                size: 18,
                                weight: 200
                            }
                        },
                        legend: {
                            display: false
                        }
                    },


                    scales: {




                        y: {

                            grid: {
                                color: '#fff',

                            },
                            ticks: {
                                color: "#fff",
                                font: {
                                    size: 18,
                                },
                                stepSize: 5,
                                beginAtZero: true
                            }
                        },
                        x: {  // not 'xAxes: [{' anymore (not an array anymore)
                            grid: {
                                color: '#fff'
                            },
                            ticks: {
                                color: "#fff",  // not 'fontColor:' anymore
                                font: {
                                    size: 14 // 'size' now within object 'font {}'
                                },
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }
                    }

                }}
            />
        </div>
    );
}

export default BarChart;