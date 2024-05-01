import { Box, Typography, TextField, Grid, Button, Link } from '@mui/material'
import React from 'react'
import FlexBetween from '../components/FlexBetween'
import { useTheme } from '@emotion/react'
import LogoIcon from '../assets/LogoIcon'


const SignIn = () => {
    const theme = useTheme()
    return (
        <Box width="100%" height="100vh" bgcolor={theme.palette.primary[900]}>
            <Box width="50%" sx={{ minWidth: "600px", margin: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <LogoIcon size="10rem" />
                    <Typography sx={{ fontSize: '3rem' }} fontWeight='bold' color={theme.palette.primary[200]}>
                        WorkWise
                    </Typography>
                </Box>
                <FlexBetween>
                    <Typography sx={{ margin: "auto", marginTop: "10%", fontSize: "3rem" }}>
                        Log In
                    </Typography>
                </FlexBetween>

                <FlexBetween>
                    <Box component="form" noValidate onSubmit={() => { console.log("handle something") }} sx={{ margin: 'auto' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </FlexBetween>
            </Box>
        </Box>
    )
}

export default SignIn