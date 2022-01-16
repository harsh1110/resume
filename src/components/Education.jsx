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


function createData(degree, year,grd, board, city, state, remark) {
    return { degree, year,grd, board, city, state, remark };
}

const rows = [
    createData('B.E (Computer Engineering)', 2022,"8.92 GPA", "GTU", "Vadodara", "Gujarat","My Bechelors Degree is Complete This year"),
    createData('12th (Science)', 2018,"56.76%", "GHSEB", "Rajula", "Gujarat","In 12th Maths is good"),
    createData("10th", 2016,"76.68%", "GSEB", "Rajula", "Gujarat","Maths is The Favourite subject in 10th also I am intrested in Science"), 
];

const theme = createTheme();
const Education = () => {
    return (
        <div className="layer edu">
            <div className="container py-4">
                <ThemeProvider theme={theme}>
                        <h1 className="text-dark text-center my-4">
                            Summary Of Qualification
                        </h1>
                        <p className="text-center my-4">
                            Hello Everybody, Here is the table formation of my All Educational Details.I am Persuing Bechlor of Engineering, I will Complete My Engineering this Year.
                        </p>
                    <Grid container className='mt-4' component="main">
                        <CssBaseline />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Sr.</TableCell>
                                        <TableCell align="center">Degree</TableCell>
                                        <TableCell align="center">Year</TableCell>
                                        <TableCell align="center">% / Grd.</TableCell>
                                        <TableCell align="center">Board / University</TableCell>
                                        <TableCell align="center">City</TableCell>
                                        <TableCell align="center">State</TableCell>
                                        <TableCell align="center">Remark</TableCell>
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
                                            <TableCell align="center">{row.degree}</TableCell>
                                            <TableCell align="center">{row.year}</TableCell>
                                            <TableCell align="center">{row.grd}</TableCell>
                                            <TableCell align="center">{row.board}</TableCell>
                                            <TableCell align="center">{row.city}</TableCell>
                                            <TableCell align="center">{row.state}</TableCell>
                                            <TableCell align="center">{row.remark}</TableCell>
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

export default Education

