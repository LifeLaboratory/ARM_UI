import React from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends React.Component {
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

        if (this.props.type === 'bar') {
            return (
                <Bar
                    width="400"
                    height="400"
                    data={this.props.data}
                    options={this.props.options}
                />
            );
        } else if (this.props.type === 'line') {    
            return (
                <Line
                    data={this.props.data}
                    options={this.props.options}
                />
            );
        } else if (this.props.type === 'pie') {
            return (
                <Pie
                    data={this.props.data}
                    options={this.props.options}
                />
            );
        }
    }

}

export default Chart
