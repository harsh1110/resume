import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from '@formcarry/react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function FeedBack() {
        const {state, submit} = useForm({
          id: 'oBKsP6tb0MX'
        });
       
        // Success message
        if (state.submitted) {
          return <div>Thank you! We received your submission.</div>;
        }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Contact Me
                        </Typography>
                        <Box noValidate sx={{ mt: 1 }}>
                            <form onSubmit={submit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="name"
                                    label="Full Name"
                                    type="text"
                                    id="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="msg"
                                    label="Your Massage"
                                    name="msg"
                                    autoComplete="text"
                                />
                                <button
                                className='btn my-4 w-100 btn-success'
                                type="submit"
                                >
                                    Send Massage
                                </button>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}