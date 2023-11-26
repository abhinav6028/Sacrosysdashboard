import { Box, Grid } from '@mui/material'
import React from 'react'
import { H3, H7 } from '../Ui/Typography'
import { log } from 'console'


export default function SalesComparison(props: any) {

    const { SourceApi, triangleDisplay, title, lg, py, display, height, borderRadius } = props

    const totalProfit = SourceApi.reduce((prevVal: any, data: any, index: any) => prevVal + data.profit, 0);

    return (
        <Grid container sx={{
            bgcolor: "", justifyContent: 'center',
            py: 2, borderRadius: '12px',
            boxShadow: ' 0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
        }} lg={lg}>


            <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                py: { md: 1.5, lg: py ? py : 1.4 },
            }}>
                <H3>{title}</H3>

                <Box sx={{
                    display: triangleDisplay ? triangleDisplay : 'flex', alignItems: 'center'
                }}>

                    <Box
                        sx={{
                            width: 0, height: 0,
                            border: '7px solid transparent',
                            borderTop: 0, borderBottom: '7px solid red',
                            mr: .7
                        }}
                    />

                    <H7>3 %</H7>

                </Box>

            </Grid>


            {
                SourceApi.map((data: any, index: any) => {


                    return (
                        <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                            alignItems: 'center',
                            // justifyContent: 'space-between',
                            bgcolor: '',
                            mt: { xs: 1, sm: 1, md: -1, lg: 0 }

                        }}>

                            <Grid container bgcolor="" xs={2} sm={2} md={2} lg={2.5} sx={{
                                justifyContent: 'end',
                                my: { md: 0.5, lg: '' },
                                mt: { md: 1, lg: -.1 }
                            }}><H3>{data.source}</H3> </Grid>

                            <Grid container xs={7} sm={7} md={7} lg={7} sx={{
                                ml: 1.5,
                                alignItems: 'center',
                                bgcolor: ''
                            }}>

                                <Box sx={{
                                    width: `${20 + (data.profit / totalProfit) * 100}%`,
                                    height: height ? height : 17,
                                    bgcolor: data.bgColor, justifyContent: 'center',
                                    borderRadius: borderRadius && borderRadius
                                }} >
                                    <H7 display={display}>{data.profit}AED</H7>
                                </Box>



                                <Grid sx={{
                                    ml: 1,
                                    bgcolor: ''
                                }}>
                                    <H3 fontWeight={500} >

                                        {Math.trunc((data.profit / totalProfit) * 100)}%

                                    </H3>
                                </Grid>





                            </Grid>

                        </Grid>
                    )

                }

                )

            }

        </Grid >
    )
}
