import { Link } from "react-router-dom";
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
    useMediaQuery,
    Card,
    CardContent,
    Divider,
} from "@mui/material";

function SelectMedicines() {
    const medicines = [
        { id: 1, name: "Paracetamol", category: "Tablet", available: 50 },
        { id: 2, name: "Cough Syrup", category: "Syrup", available: 20 },
        { id: 3, name: "Vitamin D", category: "Capsule", available: 30 },
    ];

    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box maxWidth={900} mx="auto" mt={5} mb={5}>
            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#2a9d8f" }}
            >
                Select Medicines for Supply
            </Typography>

            {!isMobile ? (
                // 💻 Desktop View: Table Format
                <TableContainer component={Paper} elevation={3} sx={{ mt: 3 }}>
                    <Table>
                        <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                            <TableRow>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    Select
                                </TableCell>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    Medicine Name
                                </TableCell>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    Category
                                </TableCell>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    Available
                                </TableCell>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    Quantity
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {medicines.map((med) => (
                                <TableRow hover key={med.id}>
                                    <TableCell>
                                        <Checkbox color="success" />
                                    </TableCell>
                                    <TableCell>{med.name}</TableCell>
                                    <TableCell>{med.category}</TableCell>
                                    <TableCell>{med.available}</TableCell>
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
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                // 📱 Mobile View: Card Format
                <Box mt={3}>
                    {medicines.map((med) => (
                        <Card
                            key={med.id}
                            sx={{
                                mb: 2,
                                borderLeft: "5px solid #2a9d8f",
                                backgroundColor: "#f9f9f9",
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" sx={{ color: "#2a9d8f", fontWeight: "bold" }}>
                                        {med.name}
                                    </Typography>
                                    <Checkbox color="success" />
                                </Box>

                                <Typography>Category: {med.category}</Typography>
                                <Typography>Available: {med.available}</Typography>

                                <Box mt={1.5}>
                                    <TextField
                                        label="Quantity"
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    />
                                </Box>

                                <Divider sx={{ my: 1.5 }} />
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

            <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={4}>
                <Link to={"/preview"}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#2a9d8f",
                            "&:hover": { backgroundColor: "#21867a" },
                            px: 4,
                            py: 1,
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
