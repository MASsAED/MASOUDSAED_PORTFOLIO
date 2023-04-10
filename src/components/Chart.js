import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
// import Chart from 'chart.js/auto';
import {Chart} from 'chart.js'
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const ChartSkills = () => {
    const [data] = useState({
        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'BOOTSTRAP', 'MATERIAL UI', 'PHP', 'PYTHON', 'GIT'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [95, 90, 55, 65, 85, 75, 50, 50, 85],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [75, 70, 45, 60, 80, 65, 45, 45, 70],
            },
        ],
    });

    return (
        <CDBContainer>
            <h3 className="mt-5">Bar chart</h3>
            <Bar data={data} options={{ responsive: true }} />
        </CDBContainer>
    );
};

export default ChartSkills;