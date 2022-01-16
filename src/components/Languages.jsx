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


function createData(language, read, write, speak, understand) {
    return { language, read, write, speak, understand };
}

const rows = [
    createData('Gujarati', <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>),
    createData('Hindi', <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>),
    createData('English', <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>, <i class="fa fa-check" aria-hidden="true"></i>),
];

const theme = createTheme();
const Work = () => {
    return (
        <div className="layer lan">
            <div className="container py-4">
                <ThemeProvider theme={theme}>
                    <h1 className="text-dark text-center my-4">
                        Languages Known
                    </h1>
                    <p className="text-center my-4">
                        Hello Everybody, Here is the table formation of my All Language known. I am learning Kannad and Tamil now a days i will prepare this languages in two months.
                    </p>
                    <Grid container className='mt-4' component="main">
                        <CssBaseline />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Sr.</TableCell>
                                        <TableCell align="center">Languages</TableCell>
                                        <TableCell align="center">Read</TableCell>
                                        <TableCell align="center">Write</TableCell>
                                        <TableCell align="center">Speak</TableCell>
                                        <TableCell align="center">Understand</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="center">{row.language}</TableCell>
                                            <TableCell align="center">{row.read}</TableCell>
                                            <TableCell align="center">{row.write}</TableCell>
                                            <TableCell align="center">{row.speak}</TableCell>
                                            <TableCell align="center">{row.understand}</TableCell>
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

