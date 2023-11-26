"use client"
import Sales from '@/app/Component/DashBoard/Sales'
import SalesComparison from '@/app/Component/DashBoard/SalesComparison'
import Totals from '@/app/Component/DashBoard/totals'
import RoundedChart from '@/app/Component/Ui/Chart/RoundedChart'
import SmoothLineChart from '@/app/Component/Ui/Chart/SmoothLineChart'
import { expences, salesRate, saleSourceApi, topSellingProduct, leastSellingProduct } from '@/utils/mockapi'
import { Box, Grid, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function page() {

    const pathName = usePathname()

    console.log("?????????????//////", expences[1].totalPayments);



    return (
        <Grid container bgcolor="#rgba(20, 20, 20, 0.98)" sx={{ justifyContent: 'center' }}>

            <Grid container xs={11} sm={11} md={11} lg={11.5} sx={{
                bgcolor: 'rgba(20, 20, 20, 0.98)',
                mt: { xs: 12, sm: 12, md: 4, lg: 4 },
                justifyContent: 'space-evenly',
                flexDirection: ''
            }}>



                <Grid container xs={12} md={11} lg={7} sx={{
                    bgcolor: 'rgba(20, 20, 20, 0.98)',
                    justifyContent: 'space-between',

                }}>

                    {
                        salesRate.map((data: any, index) =>
                            <Sales
                                data={data}
                                index={index}
                            />
                        )
                    }

                    <Grid container sx={{
                        bgcolor: "",
                        justifyContent: 'space-between',
                        mt: { xs: 3, sm: 2, md: 3, lg: 2.5 }
                    }}>

                        <SalesComparison
                            title='Sales wise comparison'
                            SourceApi={saleSourceApi}
                            lg={6} py={1.4}
                        />


                        {/* <Grid container sx={{ bgcolor: "blue" }} md={3} lg={2.5}>b</Grid> */}
                        <Totals
                            title="Total purchase"
                            amount1={expences[0]?.totalPurchase?.amount_cash}
                            amount2={expences[0]?.totalPurchase?.amount_credit}
                        />

                        <Totals
                            title="Total payments"
                            amount1={expences[1].totalPayments?.amount_cash}
                            amount2={expences[1].totalPayments?.amount_cheque}
                        />

                    </Grid>


                </Grid>


                <Grid container xs={12} sx={11} md={7} lg={4.8} sx={{
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: '12px',
                    boxShadow: '0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
                }}>

                    <SmoothLineChart />
                    {/* <SmoothLineChart /> */}


                </Grid>

            </Grid>

            <Grid container xs={11} sm={11} md={11} lg={11.5} sx={{
                bgcolor: '',
                justifyContent: { md: 'center', lg: 'space-between' }
            }}>

                <Grid container xs={11} sm={11} md={11} lg={3.8} sx={{
                    bgcolor: '', mt: 4, justifyContent: 'center', alignItems: 'center',
                    boxShadow: ' 0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                }}>

                    <RoundedChart />

                </Grid>

                {/* <Grid container md={11} lg={3.8} sx={{ bgcolor: '', mt: 4, }}>

                    <SalesComparison
                        title='Least 5 selling product'
                        triangleDisplay='none'
                        SourceApi={leastSellingProduct}
                        display='none'
                        height={10}
                        py={0}
                        borderRadius='0px 6px 6px 0px'
                    />

                </Grid> */}

                <Grid container md={11} lg={3.8} sx={{ bgcolor: '', mt: 4, }}>

                    <SalesComparison
                        title='Least 5 selling product'
                        triangleDisplay='none'
                        SourceApi={leastSellingProduct}
                        display='none'
                        height={10}
                        py={0}
                        borderRadius='0px 6px 6px 0px'
                    />

                </Grid>

                <Grid container md={11} lg={3.8} sx={{ bgcolor: '', mt: 4 }}>

                    <SalesComparison
                        title='Least 5 selling product'
                        triangleDisplay='none'
                        SourceApi={leastSellingProduct}
                        display='none'
                        height={10}
                        py={0}
                        borderRadius='0px 6px 6px 0px'
                    />

                </Grid>

            </Grid>






        </Grid >
    )
}
