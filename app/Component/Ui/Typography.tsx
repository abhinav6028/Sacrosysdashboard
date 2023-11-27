import { Typography } from '@mui/material'
import React from 'react'

export const H1 = (props: any) => {

    const { ml, color, fontWeight } = props

    return (
        <Typography sx={{

            color: color ? color : "#FFF",
            fontSize: { xs: 14, sm: 16, md: 18, lg: 24 },
            cursor: 'pointer',
            ml: ml, bgcolor: '', fontWeight: fontWeight ? fontWeight : 'normal', height: 'fit-content',

        }}>
            {props.children}
        </Typography>
    )
}

export const H2 = (props: any) => {

    const { ml, fontWeight } = props

    return (
        <Typography sx={{

            color: "#FFF",
            fontSize: { xs: 14, sm: 16, md: 18, lg: 22 },
            cursor: 'pointer',
            ml: ml, bgcolor: '', fontWeight: fontWeight
        }}>
            {props.children}
        </Typography>
    )
}


export const H3 = (props: any) => {

    const { ml, py, px, bgcolor, mt, mb, hoverFontWeight, color, fontWeight, onClick, width } = props

    return (
        <Typography
            onClick={onClick}
            sx={{
                width: width ? width : 'fit-content',
                bgcolor: bgcolor,
                color: color ? color : "#FFF",
                fontWeight: fontWeight ? fontWeight : 400,
                fontSize: { xs: 10, sm: 16, md: 13, lg: 15 },
                cursor: 'pointer', borderRadius: '8px',
                ml: ml,
                py: { md: py - .4, lg: py },
                px: { md: px, lg: px },
                mt: mt, height: 'fit-vontent',
                mb: { xs: mb, sm: mb, md: mb - .2, lg: mb },

                '&:hover': {
                    fontWeight: hoverFontWeight ? hoverFontWeight : 'normal'
                },

            }}>
            {props.children}
        </Typography>
    )
}

export const H6 = (props: any) => {

    const { my, width, fontWeight, mr, color, hoverFontWeight, hoverColor } = props

    return (
        <Typography sx={{

            color: color ? color : "#FFF", fontWeight: fontWeight,
            fontSize: { xs: 8, sm: 12, md: 10, lg: 12 },
            cursor: 'pointer', borderRadius: '8px', mr: { md: mr, lg: mr },
            width: width, textAlign: 'center',
            my: { xs: my - .5, sm: my - .5, md: my, lg: my },
            bgcolor: '',
            '&:hover': {
                fontWeight: hoverFontWeight ? hoverFontWeight : 'normal',
                color: hoverColor && hoverColor
            },

        }}>
            {props.children}
        </Typography>
    )
}

export const H7 = (props: any) => {

    const { my, width, fontWeight, mr, mt, textAlign, display, ml, bgcolor } = props

    return (
        <Typography sx={{

            color: "#FFF", fontWeight: fontWeight,
            fontSize: 12,
            cursor: 'pointer', borderRadius: '8px',
            mr: { md: mr, lg: mr }, height: 'fit-content',
            textAlign: textAlign ? textAlign : 'center',
            my: { xs: my - .5, sm: my - .5, md: my, lg: my },
            bgcolor: bgcolor,
            mt: { xs: mt, sm: mt, md: mt, lg: mt },
            display: display ? display : 'flex',
            ml: ml
        }}>
            {props.children}
        </Typography>
    )
}