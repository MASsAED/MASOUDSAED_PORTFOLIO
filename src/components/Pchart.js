import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const Chartta = () => {
    const [data, setData] = useState({
        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'UI', 'PHP', 'PYTHON', 'REACT', 'GIT'],

        datasets: [
            {
                label: 'My Totall dataset',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgb(153, 204, 255)',
                borderColor: 'rgb(194, 116, 161)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(71, 225, 167, 0.5)',
                pointHoverBorderColor: 'rgb(71, 225, 167)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [85, 90, 55, 58, 45, 50, 25, 65, 85],
            },
        ],
    });

    useEffect(() => {
        setInterval(function () {
            var oldDataSet = data.datasets[0];
            var newData = [];

            for (var x = 0; x < data.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            var newDataSet = {
                ...oldDataSet,
            };

            newDataSet.data = newData;

            var newState = {
                ...data,
                datasets: [newDataSet],
            };

            setData(newState);
        }, 1000);
    }, [data]);

    return (
        <CDBContainer>
            <h3 className="mt-5">Used in My previous Projects</h3>
            <Doughnut data={data} options={{ responsive: true }} />
        </CDBContainer>
    );
};

export default Chartta;