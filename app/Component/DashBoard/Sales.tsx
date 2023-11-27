import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { H1, H3, H6, H7 } from '../Ui/Typography'
import IconsComponent from '../Ui/IconsComponent'

export default function Sales(props: any) {

    const { data, index, mt } = props

    return (

        // <Grid container xs={12} md={7} lg={7} sx={{ bgcolor: 'rgba(20, 20, 20, 0.98)', justifyContent: 'space-between' }}>

        <Grid container

            md={index <= 1 ? 5.5 : 4}
            sm={index <= 1 ? 5.5 : 4}
            xs={index <= 1 ? 5.5 : 4}
            lg={2.4}

            sx={{
                height: 'fir-content',
                py: { xs: 2, sm: 2, md: 4, lg: 2 },
                mt: { xs: index > 1 ? mt : 2, md: index > 1 ? mt : 2, lg: 0 },
                boxShadow: '0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                justifyContent: 'center',

            }}>

            <Grid>

                <Box sx={{ display: "flex", alignItems: 'center', bgcolor: '' }}>

                    <H6>{data.saleType}</H6>

                    <Box sx={{
                        display: index != 0 ? "flex" : 'none'
                    }}>
                        <IconsComponent
                            src='Assets/Icons/excel.png'
                        />
                    </Box>


                </Box>


                <Box sx={{
                    display: 'flex', height: 'fit-content',
                    py: 1, justifyContent: 'start'
                }}>

                    <H1 color={data.color}>{data.amount}</H1>
                    <H3 mt='auto' mb={0.4} ml={0.5}>AED</H3>
                </Box>

                <Grid container
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: index != 0 ? 'none' : 'flex'
                    }}

                >

                    <Box
                        sx={{
                            width: 0,
                            height: 0,
                            border: '7px solid transparent',
                            borderTop: 0,
                            borderBottom: '7px solid red',
                            // transform: 'rotate(180deg)'
                        }}
                    />

                    <H7 sx={{
                        fontSize: 12
                    }}>{data.ststus}</H7>

                </Grid>



                <Typography sx={{
                    display: index == 0 ? 'none' : 'flex',
                    fontSize: 12,
                    color: '#FFF'
                }}>

                    {data.ststus}
                </Typography>



            </Grid>


        </Grid >
    )
}
