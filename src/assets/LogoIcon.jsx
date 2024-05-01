import React from 'react'
import { Box } from '@mui/material'
import Logo from './ww_icon.png'

const LogoIcon = ({ size }) => {
    return (
        <Box sx={{ width: size }}>
            <img src={Logo} />
        </Box>
    )
}

export default LogoIcon