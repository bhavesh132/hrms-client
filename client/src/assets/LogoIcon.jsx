import React from 'react'
import { Box } from '@mui/material'
import Logo from './ww_icon.png'

const LogoIcon = () => {
    return (
        <Box sx={{ width: '3.2rem' }}>
            <img src={Logo} />
        </Box>
    )
}

export default LogoIcon