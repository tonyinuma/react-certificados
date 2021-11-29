import React from "react";
import { useState } from "react";
import "./App.css";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CertificatesTableBody from "./components/CertificatesTableBody";

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
                    <CertificatesTableBody/>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default App;
