import React from 'react'
import './TextField.css'
import { Box } from '@mui/material'

export default function CustomTextField(props: any) {

    const { mt, placeHolder } = props

    return (

        <Box sx={{
            height: { xs: 40, sm: 58, md: 48, lg: 50},
            width: { xs: "80%", sm: "85%", md: "85%", lg: "88%" },
            mt: { xs: mt - .5, sm: mt + 1, md: mt - .5, lg: mt }
        }}>

            <input
                placeholder={placeHolder}
            />

        </Box>

    )
}
