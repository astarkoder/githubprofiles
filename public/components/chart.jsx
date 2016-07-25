var React = require('react')
var ReactDOM = require('react-dom');

var BubbleChart = React.createClass({

    componentDidMount() {
        this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({

          chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },

            legend: {
                enabled: false
            },

            title: {
                text: 'Repository Popularity'
            },

            subtitle: {
                text: 'Stars, Subscribers, and Followers'
            },

            xAxis: {
                gridLineWidth: 1,
                title: {
                    text: 'Stargazer count'
                },
                labels: {
                    format: '{value}'
                }
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Subscriber count'
                },
                labels: {
                    format: '{value}'
                },
                maxPadding: 0.2,
                
            },

            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Stars:</th><td>{point.x}</td></tr>' +
                '<tr><th>Subscribers:</th><td>{point.y}</td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },

            series: [{
                data: []
            }]  
        })
    },

    componentWillReceiveProps(props) {        
      $('.highcharts-button').click(); // reset zoom for new data
      this.chart.highcharts().series[0].setData(props.repoData);
    },

    render() {
        return <div ref='chart'></div>
    }

});

module.exports = BubbleChart


