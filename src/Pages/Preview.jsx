import {
    Box,
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Preview() {
    return (
        <Box maxWidth={900} mx="auto" mt={5} mb={5}>
            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2a9d8f" }}
            >
                Preview Order Form
            </Typography>

            <Paper
                elevation={4}
                sx={{
                    borderRadius: "12px",
                    p: 4,
                    backgroundColor: "#f9fdfd",
                }}
            >



                <Table>
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
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Paracetamol</TableCell>
                            <TableCell>Tablet</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>₹120</TableCell>
                            <TableCell>₹1200</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Vitamin D</TableCell>
                            <TableCell>Capsule</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>₹150</TableCell>
                            <TableCell>₹750</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Cough Syrup</TableCell>
                            <TableCell>Syrup</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>₹200</TableCell>
                            <TableCell>₹600</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Divider sx={{ mt: 2, mb: 2 }} />

                <Box display="flex" justifyContent="flex-end" flexDirection="column" alignItems="flex-end">
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                        Total Items: 3
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
                        Total Quantity: 18
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ mt: 1, fontWeight: "bold", color: "#2a9d8f" }}
                    >
                        Grand Total: ₹2550
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    gap={2}
                    mt={4}
                    flexWrap="wrap"
                >


                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        sx={{
                            backgroundColor: "#2a9d8f",
                            "&:hover": { backgroundColor: "#21867a" },
                            px: 4,
                        }}
                    >
                        Download Form
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Preview;
