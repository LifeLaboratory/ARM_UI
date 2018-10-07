import React from 'react';
import Chart from './Chart';
import ScoreboardItem from './ScoreboardItem';

class Cabinet extends React.Component {
    render() {

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
                            <td>Инокентий Архипов</td>
                            <td>5554</td>
                        </tr>
                        <tr>
                            <td>Иван Василичъ</td>
                            <td>3344</td>
                        </tr>
                        <tr>
                            <td>Владислав Бойко</td>
                            <td>2290</td>
                        </tr>
                        <tr>
                            <td>Андрей Костин</td>
                            <td>1560</td>
                        </tr>
                        <tr>
                            <td>Артем Прудников</td>
                            <td>1200</td>
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
