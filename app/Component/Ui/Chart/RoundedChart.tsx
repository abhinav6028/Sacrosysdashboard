import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Grid } from '@mui/material'
import { H3 } from '../Typography';

export default function RoundedChart() {
    const [chartData, setChartData] = useState({

        series: [10, 10, 10, 10, 10],
        // labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],

        options: {
            series: [10, 10, 20, 20],

            chart: {
                type: 'donut',
            },
            labels: ['Cash 40%', 'Google pay 25%', "Credit card 30%", "Credit 15 %"],
            colors: ['#23CCD1', '#F7DC67', "#A7236F", "#A7236F"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,

                        },
                        legend: {
                            position: 'left',
                            show: 'false'
                        },
                        dataLabels: {
                            enabled: false,
                        },


                    },
                },
            ],

        },
    });

    return (
        <Grid container xs={6} sx={{ bgcolor: '', height: '100%' }}>


            <H3 ml={4} mt={2}> Collection distribution </H3>


            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                // height="100%"
                // width="100%"
            />

        </Grid>
    );
};