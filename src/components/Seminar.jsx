import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Seminar = () => {
    return (
        <div className="layer edu">
            <div className="container py-4">
                <h1 className="text-dark text-center my-4">
                    Seminars
                </h1>
                <ThemeProvider className="my-4" theme={theme}>
                    <Grid className='my-4' container component="main">
                        <CssBaseline />
                        <Grid
                            className='seminar1'
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
                                
                                <p className='text-dark'>Attending the Quality Improvement Seminar organized by the K.J.Campus Vadodara, The speaker is Mr.Paresh Bhatt and Mr.Jitendra Dave</p>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Seminar
