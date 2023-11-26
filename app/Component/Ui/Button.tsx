import { Box, Typography } from '@mui/material'
import React from 'react'
import './Button.css'

export default function CustomButton(props: any) {

    const { onClick } = props

    return (
        <Box bgcolor='' onClick={onClick} sx={{
            height: { xs: 40, sm: 58, md: 48, lg: 55 },
            width: { xs: "80%", sm: "85%", md: "85%", lg: "88%" },
            mt: { xs: 3, sm: 3, md: 2, lg: 3 }
        }}>
            <button>
                <Typography sx={{
                    color: '#F8F8F8',
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    fontSize: { lg: 18 }
                }}>
                    {props.children}
                </Typography>

            </button>
        </Box>
    )
}
