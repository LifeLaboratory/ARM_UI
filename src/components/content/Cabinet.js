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
                display:true,
                text: 'Количество клиентов в месяц'
            },
            legend: {
                display: true,
                position: 'right'
            }
        };
        var barOptions = {
            title: {
                display:true,
                text: 'Статистика заявок'
            },
            legend: {
                display: true,
                position: 'right'
            }
        };

        return (
            <div className="cabinet">

                <div className="cabinet__rating-container">
                <div className="cabinet__title">Рейтинг оператора:</div>

                <div className="cabinet__rating">3344</div>
                </div>

                <div className="scoreboard cabinet__scoreboard">
                    <table>
                        <tr>
                            <td>Имя</td>
                            <td>Рейтинг</td>
                        </tr>
                        <tr>
                            <td>Иван</td>
                            <td>1553</td>
                        </tr>
                        <tr>
                            <td>Кирил</td>
                            <td>5555</td>
                        </tr>
                    </table>
                </div>

                <div className="cabinet__graphic-container">
                    <Chart type="pie" data={pieData} options={pieOptions}/>
                </div>
            </div>
        )
    }

}

export default Cabinet
