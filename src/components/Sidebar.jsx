import React from 'react'
import { Box, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton, Typography, useTheme, ListItemIcon } from "@mui/material"
import {
    ChevronLeft,
    HomeOutlined,
    AttachMoneyOutlined,
    ManageAccountsOutlined,
    ImportContactsOutlined,
    LanOutlined,
    TrendingUpOutlined,
    AccessTimeOutlined,
    FeedOutlined,
    EqualizerOutlined,
    GppMaybeOutlined,
    DevicesOutlined
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import LogoIcon from '../assets/LogoIcon'

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "My Details",
        icon: <ManageAccountsOutlined />
    },
    {
        text: "Payroll",
        icon: <AttachMoneyOutlined />
    },
    {
        text: "My Assets",
        icon: <DevicesOutlined />
    },
    {
        text: "Management",
        icon: null
    },
    {
        text: "Leave and Attendance",
        icon: <AccessTimeOutlined />
    },
    {
        text: "Performance",
        icon: <EqualizerOutlined />
    },
    {
        text: "Report Violation",
        icon: <GppMaybeOutlined />
    },

    {
        text: "Human Resources",
        icon: null
    },
    {
        text: "Policy Documents",
        icon: <ImportContactsOutlined />
    },
    {
        text: "Analytics",
        icon: <TrendingUpOutlined />
    },
    {
        text: "My Organization",
        icon: <LanOutlined />
    },
    {
        text: "HR Request",
        icon: <FeedOutlined />
    },



]

const Sidebar = ({
    drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile
}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState("dashboard")
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        pathname.substring(1);
    }, [pathname])

    return (
        <Box component="nav">
            {isSidebarOpen && (<Drawer open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} variant="persistent" color='primary' anchor='left' sx={{
                width: drawerWidth,
                "& .MuiPaper-root": {
                    backgroundColor: theme.palette.primary[900],
                    color: theme.palette.secondary[500],
                    boxShadow: 'none'
                }
            }}>
                <Box width="100%">
                    <Box m="1rem 1.5rem 1.5rem 2rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <LogoIcon size="3.5rem" />
                                <Typography sx={{ fontSize: '1.5rem' }} fontWeight='bold' color={theme.palette.primary[200]}>
                                    WorkWise
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({ text, icon }) => {
                            if (!icon) {
                                return (<Typography color={theme.palette.secondary[300]} key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>{text}</Typography>)
                            }
                            const lctext = (str) => {
                                str = str.replace(/\s/g, '')
                                return str.toLowerCase();
                            }

                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton onClick={() => {
                                        navigate(`/${lctext(text)}`);
                                        setActive(lctext(text))
                                    }} sx={{ backgroundColor: active === lctext(text) ? theme.palette.secondary[700] : 'transparent' }}>
                                        <ListItemIcon sx={{
                                            ml: "2rem",
                                            color: theme.palette.primary[100]
                                        }}>{icon}</ListItemIcon>
                                        <ListItemText sx={{
                                            ml: "-1.5rem",
                                            color: theme.palette.primary[100]
                                        }}>
                                            {text}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>)
            }
        </Box >
    )
}

export default Sidebar