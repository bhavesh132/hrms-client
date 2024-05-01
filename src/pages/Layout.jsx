import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
            <Sidebar isNonMobile={isNonMobile} drawerWidth='233px' isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Box width="100%">
                <Navbar isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout