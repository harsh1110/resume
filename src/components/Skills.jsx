import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Skills() {

    return (
        <div className="layer skill">
            <div className="container py-4">
                <ThemeProvider theme={theme}>
                    <Grid container component="main">
                        <CssBaseline />
                        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div className="text-center">
                                    <h1 className='text-dark'>Skills</h1>
                                </div>
                                <div className="text-start my-4">
                                    <h3 className='text-dark'>
                                        Technical Skills
                                    </h3>
                                    <div className="my-4">
                                        <h5>Front-End</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Back-End</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>DataBase</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="88"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "88%" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start my-4">
                                    <h3 className='text-dark'>
                                        Professional Skills
                                    </h3>
                                    <div className="my-4">
                                        <h5>Team Work</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Leadership</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Project Management</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Time Management</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-start my-4">
                                    <h3 className='text-dark'>
                                        Life Skills
                                    </h3>
                                    <div className="my-4">
                                        <h5>Communication Skills</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Stress Management</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="92"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <h5>Pressure Handling</h5>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="98"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "98%" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    );
}














