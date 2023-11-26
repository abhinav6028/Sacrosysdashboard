import { Box } from '@mui/material'
import React from 'react'

export default function IconsComponent(props: any) {

    const { src, width, height, pathName, onClick } = props
    return (
        <Box
            onClick={onClick}
            component='img'
            src={src}
            sx={{
                width: { xs: width - 5, sm: width - 5, md: width - 10, lg: width },
                height: { xs: 20, sm: 25, md: 20, lg: 27 },
                cursor: 'pointer', ml: 2.5,
                display: pathName === '/' ? 'none' : '',
            }}
        />
    )
}
