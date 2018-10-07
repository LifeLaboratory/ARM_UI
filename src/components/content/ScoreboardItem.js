import React from 'react';
import Chart from './Chart';


class ScoreboardItem extends React.Component {
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

        var pieData = {
            labels: ['Открытые', 'Закрытые'],
            datasets: [{
                label: ['Population'],
                data: [
                    10,
                    34
                ],
                backgroundColor: [
                    '#eb5a40',
                    '#00B956'

                ]
            }]
        };

        var pieOptions = {
            title: {
                display: true,
                text: 'Количество клиентов в месяц'
            },
            legend: {
                display: true,
                position: 'right'
            }
        };
        var barOptions = {
            title: {
                display: true,
                text: 'Статистика заявок'
            },
            legend: {
                display: true,
                position: 'right'
            }
        };


        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.rating}</td>
            </tr>
        )
    }

}

export default ScoreboardItem
