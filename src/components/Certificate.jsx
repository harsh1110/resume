import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Certificate = () => {
    return (
        <div className="layer intro">
            <div className="container py-4">
            <h1 className="text-dark text-center my-4">
                            Certificates
                        </h1>
                <ThemeProvider className="my-4" theme={theme}>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='certi1'
                            item
                            xs={12}
                            sm={3}
                            md={3}
                            sx={{
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={9} md={9} component={Paper} elevation={6} square>
                            <Box
                                className="text-dark"
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // alignItems: 'center',
                                }}
                            >
                                <h4 className='mb-4 title'>Shape AI (Web Development)</h4>
                                <p className='text-dark'>For Attending This Online Session I got Certificate, this is all about Web Development</p>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='certi2'
                            item
                            xs={12}
                            sm={3}
                            md={3}
                            sx={{
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={9} md={9} component={Paper} elevation={6} square>
                            <Box
                                className="text-dark"
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // alignItems: 'center',
                                }}
                            >
                                <h4 className='mb-4 title'>Wordpress Course</h4>
                                <p className='text-dark'>This is a Wordpress course certificate which is given by Mr.Mohit Rathi</p>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='certi3'
                            item
                            xs={12}
                            sm={3}
                            md={3}
                            sx={{
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={9} md={9} component={Paper} elevation={6} square>
                            <Box
                                className="text-dark"
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // alignItems: 'center',
                                }}
                            >
                                <h4 className='mb-4 title'>Android Course</h4>
                                <p className='text-dark'>This is a Android Course which is organized by the BOARD INFINITY.</p>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Certificate
