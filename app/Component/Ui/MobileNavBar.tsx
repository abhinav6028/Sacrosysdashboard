"use client"
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileNavBar() {
    const [menu, setMenu] = React.useState(false)

    const router = useRouter();

    const pathName = usePathname()


    const HeadrItems = [
        { name: 'Dashboard', path: '/admin/dashboard' },
        { name: 'Sales', path: '/admin/dashboard' },
        { name: 'Payment', path: '/admin/dashboard' },
        { name: 'Tax', path: '/admin/dashboard' },
        { name: 'MIS', path: '/admin/dashboard' },
        { name: 'Purchase entry', path: '/admin/dashboard' },
    ]



    const MenuBar = () => {

        setMenu(!menu)

    }

    return (

        <Grid container sx={{
            display: {
                xs: pathName === '/' ? 'none' : 'block',
                md: "none"
            },
            flexDirection: 'column-reverse'
        }}>

            <Box sx={{
                width: "100%", display: 'flex',
                justifyContent: "center", alignItems: "center",
                py: 1,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                // bgcolor: "#FFF",
                bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink', }
            }} >



                <Box

                    onClick={() => router.push('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        bgcolor: "",
                        py: 1,
                        // pb: 1,
                        height: 50,
                        width: 100,
                        maxHeight: { xs: 30, sm: 40 },
                        maxWidth: { xs: 80, md: 90 },
                    }}
                    alt="The house from the offer."
                    src="/assets/logo/logo.png"
                />

                <Box position="fixed" right="4px" sx={{
                    bgcolor: ''
                }}>

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

            </Box>

            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "fit-content",
                position: "fixed", zIndex: "100", left: "0%", top: menu ? "60px" : "-40%",
                bgcolor: "#FFF"

            }}>

                {
                    HeadrItems.map((data: any, index: any) =>

                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, bgcolor: "#FFF" }}>

                            <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: '', }}>

                                <Typography sx={{ color: "black", fontWeight: '600', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.name}</Typography>

                            </Box>

                        </Box>
                    )}

            </Box>

        </Grid >
    )
}