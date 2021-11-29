import React from "react";
import { useState } from "react";
import "./App.css";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { red } from "@mui/material/colors";

function createData(name, course_name, certificate_date) {
    return { name, course: { name: course_name }, certificate_date };
}

const rows = [
    createData("Frozen yoghurt", "Religion", "2021-11-26"),
    createData("Ice cream sandwich", "Religion", "2021-11-26"),
    createData("Eclair", "Religion", "2021-11-26"),
    createData("Cupcake", "Religion", "2021-11-26"),
    createData("Gingerbread", "Religion", "2021-11-26"),
];

function App() {
    return (
        <Container>
            <Button variant="contained" color="success">
                <AddIcon />
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.course?.name}</TableCell>
                                <TableCell align="center">
                                    {row.certificate_date}
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="info" sx={{ marginRight: 2 }}>
                                        <EditIcon color="info" />
                                    </Button>
                                    <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }}>
                                        <VisibilityIcon color="secondary" />
                                    </Button>
                                    <Button variant="outlined" color="error">
                                        <DeleteIcon sx={{ color: red[500] }} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default App;
