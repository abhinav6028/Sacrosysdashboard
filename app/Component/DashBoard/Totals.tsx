import { expences } from '@/utils/mockapi'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { H1, H3, H7 } from '../Ui/Typography';

export default function Totals(props: any) {

    // console.log("expences", expences);

    const { amount1, amount2, title } = props

    return (
        <Grid container sx={{
            bgcolor: "", justifyContent: 'center',
            borderRadius: '12px',
            boxShadow: '0px 0px 20px 0px rgba(255, 255, 255, 0.08)',
        }} sm={5.5} md={5.5} lg={2.5}>

            <H7 fontWeight="600" width="100%" mt={2} >
                {title}
            </H7>

            <Grid container justifyContent="space-evenly" sx={{}}>

                <Box sx={{ my: { xs: 2, sm: 1, md: 1 }, alignItems: '' }}>

                    <H7>Cash / 23</H7>

                    <Box sx={{
                        display: 'flex', height: 'fit-content',
                        justifyContent: 'start',
                        my: 1
                    }}>

                        <H1 color="#8639BA">{amount1}</H1>
                        <H3 bgcolor='' mt='auto' mb={0.4} ml={0.5}>AED</H3>
                    </Box>

                </Box>


                <Box sx={{ my: { xs: 2, sm: 1, md: 1 } }}>

                    <H7>Credt / 11</H7>

                    <Box sx={{
                        display: 'flex', height: 'fit-content',
                        justifyContent: 'start',
                        my: 1
                    }}>

                        <H1 color="#8639BA">{amount2}</H1>
                        <H3 bgcolor='' mt='auto' mb={0.4} ml={0.5}>AED</H3>
                    </Box>



                </Box>

            </Grid>


        </Grid >
    )
}
