import React from 'react';
import { Radar } from 'react-chartjs-2';
import '../styles/css/compCss/charts.css';
import '../styles/css/queries.css'
function RadarChart(props) {
    return (
        <div className='chart-container'>
            <h2 className='chart-heading'>Radar Chart</h2>
            <Radar className='radar'
                data={props.chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Weekly hours spent",
                            color: '#fff',
                            font: {
                                size: 12,
                                weight: 200
                            }
                        },
                        legend: {
                            display: true,
                            labels: {
                                color: "#fff",  // not 'fontColor:' anymore
                                font: {
                                    size: 12 // 'size' now within object 'font {}'
                                }

                            },
                        }

                    },
                    scales: {
                        r: {
                            pointLabels: {
                                font: {
                                    size: 12,
                                },
                                color: '#fff',

                            },
                            grid: {
                                color: '#fff',
                            },
                            ticks: {
                                font: {
                                    size: 12
                                },
                                color: '#fff',
                                backdropColor: "transparent"
                            }
                        }
                    }
                }
                }

            />

        </div>
    );
}

export default RadarChart;