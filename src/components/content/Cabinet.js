import React from 'react';
import Chart from './Chart';


class Cabinet extends React.Component {
    render() {
        var barData = {
            labels: ['first', 'second', 'spring'],
            datasets: [{
                label: ['Population'],
                data: [
                    1,
                    2,
                    3
                ],
                backgroundColor: [
                    'rgba(255, 199, 50, 0.5)',
                    'rgba(55, 99, 132, 0.5)',
                    'rgba(5, 99, 2, 1)'
                ]
            }]
        };

        var barOptions = {
            title: {
                display:true,
                text: 'Количество клиентов в месяц'
            },
            legend: {
                display: true,
                position: 'right'
            }
        };

        return (
            <div className="cabinet">
                <Chart type="bar" data={barData} options={barOptions}/>
                <Chart type="line" data={barData} options={barOptions}/>
                <Chart type="pie" data={barData} options={barOptions}/>
            </div>
        )
    }

}

export default Cabinet
