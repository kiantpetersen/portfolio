import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/css/compCss/charts.css';

function LineChart(props) {
    return (
        <div className='chart-container'>
            <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            <Line data={props.chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,

                            text: "Sales per Month",
                            color: '#fff',
                            font: {
                                size: 18,
                                weight: 200
                            }
                        },
                        legend: {
                            display: false,

                        }
                    },
                    scales: {
                        y: {
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

export default LineChart;