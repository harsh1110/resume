import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import resume from '../downloads/harsh-gohil-resume.pdf'


const theme = createTheme();

export default function SignInSide() {

    return (
        <div className="layer intro">
            <div className="container py-4">
                <ThemeProvider theme={theme}>
                    <Grid container component="main">
                        <CssBaseline />
                        <Grid
                            className='profilepic'
                            item
                            xs={12}
                            sm={4}
                            md={5}
                            sx={{
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
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
                                <h6>HELLO EVERYBODY, I AM </h6>
                                <h1 className='text-dark my-4'>MR.HARSH GOHIL</h1>
                                <h4 className='mb-4'>COMPUTER ENGINEER</h4>
                                <p className='text-dark'>"I want to work with the organization where I can establish myself Financially, Socially and Professionally by applying my knowledge & skills acquired during my education and experience."</p>
                                <h6 className='mt-4 my-2'><EventIcon /> 11 OCT 2001</h6>
                                <h6 className='my-2'><CallIcon /> +917359169259</h6>
                                <h6 className='my-2'><EmailIcon /> harshgohil42774@gmail.com</h6>
                                <h6 className='my-2'><HomeIcon /> B-701 Star Recidency, Vasna-Bhayli Link Road, Vadodara-390007</h6>
                                <div className='d-flex my-4'>
                                    <a href='https://www.facebook.com/ankur.love.5891'><button className="btn text-white"><i class="fa fa-facebook" aria-hidden="true"></i></button></a>
                                    <a href='https://twitter.com/HarshGo82767674'><button className="btn text-white mx-4"><i class="fa fa-twitter" aria-hidden="true"></i></button></a>
                                    <a href='https://www.instagram.com/harshu__gohil__1110'><button className="btn text-white"><i class="fa fa-instagram" aria-hidden="true"></i></button></a>
                                    <a href='https://www.linkedin.com/in/harsh-gohil-88405b183/'><button className="btn text-white mx-4"><i class="fa fa-linkedin" aria-hidden="true"></i></button></a>
                                </div>
                                <div className='my-4'>
                                    <a href={resume} download={resume}><button className="btn text-white"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;Download Resume</button></a><br/>
                                    <button className="btn text-white my-4"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Watch My Vesume</button>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    );
}













