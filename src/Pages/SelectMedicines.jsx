import { Link } from 'react-router-dom'

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    TextField,
    Checkbox,
    Button,
} from "@mui/material";

function SelectMedicines() {
    return (
        <Box maxWidth={900} mx="auto" mt={5}>
            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2a9d8f" }}
            >
                Select Medicines for Supply
            </Typography>

            <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Select</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Medicine Name</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Available</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow hover>
                            <TableCell><Checkbox color="success" /></TableCell>
                            <TableCell>Paracetamol</TableCell>
                            <TableCell>Tablet</TableCell>
                            <TableCell>50</TableCell>
                            <TableCell>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                    placeholder="0"
                                    sx={{ width: 80 }}
                                />
                            </TableCell>
                        </TableRow>

                        <TableRow hover>
                            <TableCell><Checkbox color="success" /></TableCell>
                            <TableCell>Cough Syrup</TableCell>
                            <TableCell>Syrup</TableCell>
                            <TableCell>20</TableCell>
                            <TableCell>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                    placeholder="0"
                                    sx={{ width: 80 }}
                                />
                            </TableCell>
                        </TableRow>

                        <TableRow hover>
                            <TableCell><Checkbox color="success" /></TableCell>
                            <TableCell>Vitamin D</TableCell>
                            <TableCell>Capsule</TableCell>
                            <TableCell>30</TableCell>
                            <TableCell>
                                <TextField
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                    placeholder="0"
                                    sx={{ width: 80 }}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                mt={4}
                mb={4}
            >

                <Link to={'/preview'}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#2a9d8f",
                            "&:hover": { backgroundColor: "#21867a" },
                            px: 4,
                        }}
                    >
                        Preview Order
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default SelectMedicines;
