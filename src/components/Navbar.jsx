import { useTheme } from '@emotion/react'
import { IconButton, Toolbar, AppBar, Box, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DarkModeOutlined, LightModeOutlined, AssignmentRounded } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { setMode } from '../features/theme/themeSlice'
import FlexBetween from './FlexBetween'

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
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


    return (
        <AppBar sx={{ width: "100%", backgroundColor: theme.palette.primary[900], position: 'static', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <FlexBetween>
                    <IconButton onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
                        <MenuIcon />
                    </IconButton>
                </FlexBetween>


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