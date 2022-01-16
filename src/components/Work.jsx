import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(designation, company,start, end, city, state, kra) {
    return { designation, company,start, end, city, state, kra };
}

const rows = [
    createData('Trainee / Intern', "Web Barins Technologies PVT LTD.","Jun 2021", "Feb 2022", "Vadodara", "Gujarat","Learn Web Development in ReactJS(Front-end), NodeJS(Back-end), MongoDB(DataBase) , MySQL(DataBase) and help The senior Web Developer to their live Projects."),
];

const theme = createTheme();
const Work = () => {
    return (
        <div className="layer work">
            <div className="container py-4">
                <ThemeProvider theme={theme}>
                        <h1 className="text-dark text-center my-4">
                            Work Experiences
                        </h1>
                        <p className="text-center my-4">
                            Hello Everybody, Here is the table formation of my All Work Experience.I am Persuing Internship on Domail Web Development.
                        </p>
                    <Grid container className='mt-4' component="main">
                        <CssBaseline />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Sr.</TableCell>
                                        <TableCell align="center">Designation</TableCell>
                                        <TableCell align="center">Company</TableCell>
                                        <TableCell align="center">Start Time</TableCell>
                                        <TableCell align="center">End Time</TableCell>
                                        <TableCell align="center">City</TableCell>
                                        <TableCell align="center">State</TableCell>
                                        <TableCell align="center">KRA</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row,index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell  align="center" component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center">{row.designation}</TableCell>
                                            <TableCell align="center">{row.company}</TableCell>
                                            <TableCell align="center">{row.start}</TableCell>
                                            <TableCell align="center">{row.end}</TableCell>
                                            <TableCell align="center">{row.city}</TableCell>
                                            <TableCell align="center">{row.state}</TableCell>
                                            <TableCell align="center">{row.kra}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Work

