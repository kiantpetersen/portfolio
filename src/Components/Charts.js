import React from 'react';
import '../styles/css/compCss/charts.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
import { useState } from 'react';
import BarChart from './BarChart';
import { data, lineData, radarData } from './data';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import '../styles/css/queries.css';

Chart.register(CategoryScale)

function Charts(props) {
    const [chartData] = useState(data)
    const [line] = useState(lineData)
    const [radar] = useState(radarData)


    return (
        <div className='chart-section' >
            <h1 className='primary-heading'>Data Visualization</h1>
            <BarChart chartData={chartData} />
            <LineChart chartData={line} />
            <RadarChart chartData={radar} />
        </div>
    );
}

export default Charts;