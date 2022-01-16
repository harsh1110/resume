import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Refrences = () => {
    return (
        <div className="layer intro">
            <div className="container py-4">
            <h1 className="text-dark text-center my-4">
                            Referances
                        </h1>
                <ThemeProvider className="my-4" theme={theme}>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='ref1'
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
                                <h4 className='mb-4 title'>Mr.Paresh Bhatt</h4>
                                <p className='text-dark'>The Advise & Asist<br/>Mobile No - 9879544108</p>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='ref2'
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
                                <h4 className='mb-4 title'>Mr.Chirayu Bhatt</h4>
                                <p className='text-dark'>Web Brains Technologies PVT LTD.<br/>Mobile No - 9879544108</p>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='ref3'
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
                                 <h4 className='mb-4 title'>Mr.Vikas Singh</h4>
                                <p className='text-dark'>K J Campus<br/>Mobile No - 9879544108</p>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Refrences
