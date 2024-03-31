import { useTheme } from '@emotion/react'
import { IconButton, Toolbar, AppBar, Typography, Box, Button, Avatar, MenuItem, Menu } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DarkModeOutlined, LightModeOutlined, AssignmentRounded } from '@mui/icons-material'
import { setMode } from '../features/theme/themeSlice'
import FlexBetween from './FlexBetween'
import LogoIcon from '../assets/LogoIcon'


const Navbar = () => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navItems = [{
        text: 'My Info'
    },
    {
        text: 'My Assets'
    },
    {
        text: 'Attendance'
    },
    {
        text: 'Documents'
    },
    {
        text: 'Pay Roll'
    },
    {
        text: 'My Organization'
    },
    {
        text: 'Dashboard'
    }
    ]

    return (
        <AppBar color='primary' sx={{ backgroundColor: theme.palette.primary[900], position: 'static', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <FlexBetween>
                    <Button sx={{ textTransform: 'none' }}>
                        <LogoIcon />
                        <Typography sx={{ fontSize: '1.5rem' }} fontWeight='bold' color={theme.palette.primary[200]}>
                            WorkWise
                        </Typography>
                    </Button>
                </FlexBetween>

                <Box display='flex' sx={{ justifyContent: 'space-between' }}>
                    {navItems.map((item) => (
                        <Button sx={{ textTransform: 'none' }}>
                            <Typography sx={{ m: '1rem' }} key={item.text}>{item.text}</Typography>
                        </Button>
                    ))}
                </Box>

                <Box>
                    <IconButton>
                        <AssignmentRounded />
                    </IconButton>
                    <IconButton onClick={() => { dispatch(setMode()) }}>
                        {theme.palette.mode === 'dark' ?
                            (<LightModeOutlined />) : (<DarkModeOutlined />)}
                    </IconButton>
                    <IconButton id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Avatar
                            sx={{ bgcolor: theme.palette.primary[700], color: theme.palette.primary.main }}
                            alt=""
                            src="/broken-image.jpg"
                        />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Update Photo</MenuItem>
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar