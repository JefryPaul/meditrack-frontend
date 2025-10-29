import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Collapse,
} from "@mui/material";

function History() {
    return (
        <Box maxWidth={900} mx="auto" mt={5} mb={5}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2a9d8f" }}
            >
                Purchase History
            </Typography>

            <TableContainer component={Paper} elevation={3}>
                <Table>


                    <TableBody>

                        <TableRow>
                            <TableCell colSpan={6} sx={{ p: 0, border: "none" }}>
                                <Collapse in={true} timeout="auto" unmountOnExit>
                                    <Box sx={{ margin: 2, backgroundColor: "#f7fafc", borderRadius: 1, p: 2 }}>

                                        <Table size="small">
                                            <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                                                <TableRow>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Medicine Name</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total (₹)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow hover>
                                                    <TableCell>1</TableCell>
                                                    <TableCell>Paracetamol</TableCell>
                                                    <TableCell>Tablet</TableCell>
                                                    <TableCell>10</TableCell>
                                                    <TableCell>₹120</TableCell>
                                                    <TableCell>₹1200</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>Vitamin D</TableCell>
                                                    <TableCell>Capsule</TableCell>
                                                    <TableCell>5</TableCell>
                                                    <TableCell>₹150</TableCell>
                                                    <TableCell>₹750</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>3</TableCell>
                                                    <TableCell>Cough Syrup</TableCell>
                                                    <TableCell>Syrup</TableCell>
                                                    <TableCell>3</TableCell>
                                                    <TableCell>₹200</TableCell>
                                                    <TableCell>₹600</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell colSpan={6} sx={{ p: 0, border: "none" }}>
                                <Collapse in={true} timeout="auto" unmountOnExit>
                                    <Box sx={{ margin: 2, backgroundColor: "#f7fafc", borderRadius: 1, p: 2 }}>
                                        <Table size="small">
                                            <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                                                <TableRow>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Medicine Name</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total (₹)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow hover>
                                                    <TableCell>1</TableCell>
                                                    <TableCell>Ibuprofen</TableCell>
                                                    <TableCell>Tablet</TableCell>
                                                    <TableCell>5</TableCell>
                                                    <TableCell>₹180</TableCell>
                                                    <TableCell>₹900</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>Vitamin C</TableCell>
                                                    <TableCell>Tablet</TableCell>
                                                    <TableCell>3</TableCell>
                                                    <TableCell>₹100</TableCell>
                                                    <TableCell>₹300</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell colSpan={6} sx={{ p: 0, border: "none" }}>
                                <Collapse in={true} timeout="auto" unmountOnExit>
                                    <Box sx={{ margin: 2, backgroundColor: "#f7fafc", borderRadius: 1, p: 2 }}>

                                        <Table size="small">
                                            <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                                                <TableRow>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Medicine Name</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
                                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total (₹)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow hover>
                                                    <TableCell>1</TableCell>
                                                    <TableCell>Amoxicillin</TableCell>
                                                    <TableCell>Capsule</TableCell>
                                                    <TableCell>6</TableCell>
                                                    <TableCell>₹200</TableCell>
                                                    <TableCell>₹1200</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>Paracetamol</TableCell>
                                                    <TableCell>Tablet</TableCell>
                                                    <TableCell>4</TableCell>
                                                    <TableCell>₹120</TableCell>
                                                    <TableCell>₹480</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>3</TableCell>
                                                    <TableCell>Cough Syrup</TableCell>
                                                    <TableCell>Syrup</TableCell>
                                                    <TableCell>4</TableCell>
                                                    <TableCell>₹200</TableCell>
                                                    <TableCell>₹800</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>4</TableCell>
                                                    <TableCell>Vitamin D</TableCell>
                                                    <TableCell>Capsule</TableCell>
                                                    <TableCell>0</TableCell>
                                                    <TableCell>₹150</TableCell>
                                                    <TableCell>₹0</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

            <Typography sx={{ mt: 3, textAlign: "center", color: "#777" }}>
                All previously completed purchases are listed above
            </Typography>
        </Box>
    );
}

export default History;