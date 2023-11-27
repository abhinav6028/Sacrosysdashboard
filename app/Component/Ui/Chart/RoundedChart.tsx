import React from 'react'
import ReactECharts from 'echarts-for-react';
import { Box, Grid } from '@mui/material';
import { H1, H3, H6, H7 } from '../Typography';

export default function RoundedChart(props: any) {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '1%',
            left: 'center'
        },
        grid: {
            borderColor: "#EF3252"
        },
        elements: {
            arc: {
                borderWidth: 18,
            },
        },
        color: ['#23CCD1', '#A7236F', '#61a0a8', '#F56C40', '#F7DC67'],
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '',
                    borderWidth: 0
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 108, },
                    { value: 735, },
                    { value: 580, },
                    { value: 484, },
                    
                ]
            }

        ]
    };

    const { SourceApi, triangleDisplay, title, lg, py, display, height, borderRadius } = props

    const totalProfit = SourceApi.reduce((prevVal: any, data: any, index: any) => prevVal + data.profit, 0);

    return (
        <Grid container sx={{
            bgcolor: "", justifyContent: 'center',
            py: 2, borderRadius: '12px',
            boxShadow: ' 0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
        }} lg={lg}>


            <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                alignItems: 'center', bgcolor: '',
                justifyContent: 'space-between',
                py: { md: 1.5, lg: py ? py : 1.4 },
            }}>

                <Grid container sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }} md={7} lg={7}>

                    <Grid container>
                        <H3 width="100%" fontWeight="bold">Collection distribution</H3>
                    </Grid>

                    <Grid container sx={{
                        mt: 1
                    }}>
                        <H6>Total amount</H6>
                    </Grid>

                    <Grid container>
                        <H1 fontWeight='bold'>365.61 AED</H1>
                    </Grid>

                    <Grid container sx={{
                        mt: 1
                    }}>


                        <Grid container xs={6} sm={6} md={6} lg={6} sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'green'
                                }}
                            />
                            <H7 ml={2}>Cash 40%</H7>
                        </Grid>

                        <Grid container xs={6} sm={6} md={6} lg={6} sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#A7236F'
                                }}
                            />
                            <H7 ml={2}>Google pay 25%</H7>
                        </Grid>


                        <Grid container xs={6} sm={6} md={6} lg={6} sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#61a0a8'
                                }}
                            />
                            <H7 ml={2}>Credit card 30%</H7>
                        </Grid>


                        <Grid container xs={6} sm={6} md={6} lg={6} sx={{
                            display: 'flex', alignItems: 'center'
                        }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    bgcolor: '#F56C40'
                                }}
                            />
                            <H7 ml={2}>Credit 15%</H7>
                        </Grid>

                    </Grid>


                </Grid>

                <Grid container md={5} lg={5}>
                    <Grid container sx={{
                        height: 180,
                        bgcolor: '',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <ReactECharts
                            option={option}
                            style={{ height: '180px', width: '180px', background: '' }}
                        />
                    </Grid>
                </Grid>


            </Grid>




        </Grid >



    );
};



