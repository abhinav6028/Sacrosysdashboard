"use client"
import { Box, Grid, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { H2, H3, H6 } from './Typography';
import IconsComponent from './IconsComponent';

export default function Header() {

    const pathName = usePathname()

    const router = useRouter()

    console.log("pathName?????????????///", pathName);

    const HeadrItems = [
        { name: 'Dashboard', path: '/admin/dashboard' },
        { name: 'Sales', path: '/admin/sales' },
        { name: 'Payment', path: '/admin/payments' },
        { name: 'Tax', path: '/admin/tax' },
        { name: 'MIS', path: '/admin/mis' },
        { name: 'Purchase entry', path: '/admin/purchaseentry' },
    ]

    const one = HeadrItems.filter((data, index) => pathName == HeadrItems.path)

    console.log("one????????????", one);



    return (
        <Grid container xs={11} sm={11} md={11.5} lg={11.5} sx={{
            // bgcolor: { xs: '', sm: 'blue    ', md: 'orange', lg: 'blue' },
            alignItems: 'center',
            py: { xs: 1.3, sm: 1.3, md: 1.5, lg: 1 },

            display: {
                xs: pathName === '/' ? 'block' : 'none',
                md: 'flex',
            }
        }}>

            <Grid md={2} lg={2} sx={{
                bgcolor: '', display: 'flex', alignItems: 'center'
            }}>

                <IconsComponent
                    src='/Assets/Icons/back.png'
                    width={32} height={27}
                    pathName={pathName}
                    onClick={() => router.back()}
                />

                <H2
                    ml={pathName === '/' ? '' : 2}

                >{pathName === '/' ? 'Logo' : "Branch name"}</H2>

            </Grid>


            <Grid container md={7} lg={5} sx={{
                bgcolor: '',
                // ml: { md: 1, lg: 6 },
                justifyContent: 'space-between',
                display: pathName === '/' ? 'none' : ''
            }}>

                {
                    HeadrItems.map((data, index) => {

                        return (

                            <H3
                                onClick={() => router.push(`${data.pathc}`)}
                                hoverFontWeight={600} py={1.4} px={1.2}
                                fontWeight={data.path === pathName ? '600' : ''}
                                color={data.path === pathName ? 'black' : ''}
                                bgcolor={data.path === pathName ? '#FFF' : ''}
                            >{data.name}</H3>
                        )

                    })
                }



            </Grid>




            <Grid container md={3} lg={5} sx={{
                bgcolor: '',
                justifyContent: 'end',
                ml: 'auto'
            }}>

                <Box sx={{
                    mr: 1, display: pathName === '/' ? 'none' : 'flex', alignItems: 'center'
                }}>


                    <H6 mr={1}>Export to excel</H6>

                    <IconsComponent
                        src='/Assets/Icons/excel.png'
                        width={25} height={10}
                    />

                </Box>



                <Box sx={{
                    mx: { md: 1, lg: 2 }, alignItems: 'center',
                    display: pathName === '/' ? 'none' : 'flex'
                }}>


                    <H6>Last updated time 09-Aug-2023 08:09 AM</H6>

                    <IconsComponent
                        src='/Assets/Icons/refresh.png'
                        width={30} height={32}
                    />

                </Box>


                <Box sx={{
                    mr: { md: 1 }
                }}>
                    <IconsComponent
                        src='/Assets/Icons/day.png'
                        width={23} height={20}
                    />
                </Box>



            </Grid>














        </Grid >
    )
}
