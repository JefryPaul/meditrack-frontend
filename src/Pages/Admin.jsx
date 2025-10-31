import {
    Box,
    Typography,
    Paper,
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Modal,
    useMediaQuery,
    Card,
    CardContent,
    Divider,
} from "@mui/material";
import { useState } from "react";

function Admin() {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const medicines = [
        { id: 1, name: "Paracetamol", category: "Tablet", quantity: 50, price: 120, expiry: "2025-12-31", supplier: "ABC Pharma" },
        { id: 2, name: "Amoxicillin", category: "Capsule", quantity: 30, price: 180, expiry: "2025-10-15", supplier: "MediLife Ltd" },
        { id: 3, name: "Cough Syrup", category: "Syrup", quantity: 20, price: 95, expiry: "2025-08-20", supplier: "HealthPlus" },
        { id: 4, name: "Vitamin C", category: "Tablet", quantity: 100, price: 200, expiry: "2026-01-10", supplier: "GoodCare" },
        { id: 5, name: "Ibuprofen", category: "Tablet", quantity: 40, price: 150, expiry: "2025-11-01", supplier: "Sun Pharma" },
    ];

    // Detect mobile view
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <>
            <Box textAlign="center" my={4}>
                <Typography variant="subtitle1" sx={{ color: "#555" }}>
                    Add new medicines to your inventory quickly and easily
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: "#e0f7f5",
                    p: 3,
                    borderRadius: "10px",
                    maxWidth: 600,
                    mx: "auto",
                    mb: 4,
                }}
            >
                <Typography variant="body1" sx={{ color: "#2a9d8f" }}>
                    💡 Tip: Always double-check the expiry date and quantity before adding a medicine.
                </Typography>
            </Box>

            <Box
                component={Paper}
                elevation={4}
                sx={{
                    maxWidth: 600,
                    margin: "30px auto",
                    padding: 4,
                    borderRadius: "12px",
                    backgroundColor: "#f7fafc",
                }}
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ fontWeight: "bold", color: "#2a9d8f" }}
                >
                    Add New Medicine
                </Typography>

                <form>
                    <TextField fullWidth label="Medicine Name" margin="normal" />
                    <TextField fullWidth label="Category" margin="normal" />
                    <TextField fullWidth label="Quantity" type="number" margin="normal" />
                    <TextField fullWidth label="Price (₹)" type="number" margin="normal" />
                    <TextField
                        fullWidth
                        label="Expiry Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        margin="normal"
                    />
                    <TextField fullWidth label="Supplier" margin="normal" />

                    <Box sx={{ textAlign: "center", mt: 3 }}>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: "#2a9d8f",
                                "&:hover": { backgroundColor: "#21867a" },
                                width: "200px",
                            }}
                        >
                            Add Medicine
                        </Button>
                    </Box>
                </form>
            </Box>

            {/* Inventory Section */}
            <Box maxWidth={900} mx="auto" mt={5} mb={5}>
                <Typography
                    variant="h5"
                    gutterBottom
                    align="center"
                    sx={{ fontWeight: "bold", color: "#2a9d8f", mb: 3 }}
                >
                    Medicine Inventory
                </Typography>

                {/* Switch between Table (desktop) and Card layout (mobile) */}
                {!isMobile ? (
                    <TableContainer component={Paper} elevation={3}>
                        <Table>
                            <TableHead sx={{ backgroundColor: "#2a9d8f" }}>
                                <TableRow>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Medicine Name</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Category</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Quantity</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Price (₹)</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Expiry Date</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Supplier</TableCell>
                                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {medicines.map((med) => (
                                    <TableRow key={med.id}>
                                        <TableCell>{med.id}</TableCell>
                                        <TableCell>{med.name}</TableCell>
                                        <TableCell>{med.category}</TableCell>
                                        <TableCell>{med.quantity}</TableCell>
                                        <TableCell>₹{med.price}</TableCell>
                                        <TableCell>{med.expiry}</TableCell>
                                        <TableCell>{med.supplier}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                onClick={handleOpen}
                                                sx={{
                                                    mr: 1,
                                                    borderColor: "#2a9d8f",
                                                    color: "#2a9d8f",
                                                    "&:hover": { backgroundColor: "#2a9d8f", color: "white" },
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    backgroundColor: "#e63946",
                                                    "&:hover": { backgroundColor: "#c5303f" },
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    // Mobile View: Card Layout
                    <Box>
                        {medicines.map((med) => (
                            <Card key={med.id} sx={{ mb: 2, borderLeft: "5px solid #2a9d8f" }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2a9d8f" }}>
                                        {med.name}
                                    </Typography>
                                    <Typography>Category: {med.category}</Typography>
                                    <Typography>Quantity: {med.quantity}</Typography>
                                    <Typography>Price: ₹{med.price}</Typography>
                                    <Typography>Expiry: {med.expiry}</Typography>
                                    <Typography>Supplier: {med.supplier}</Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Box textAlign="right">
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={handleOpen}
                                            sx={{
                                                mr: 1,
                                                borderColor: "#2a9d8f",
                                                color: "#2a9d8f",
                                                "&:hover": { backgroundColor: "#2a9d8f", color: "white" },
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                backgroundColor: "#e63946",
                                                "&:hover": { backgroundColor: "#c5303f" },
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}

                <Typography sx={{ mt: 3, textAlign: "center", color: "#777" }}>
                    Showing all available medicines in inventory
                </Typography>

                {/* --- Edit Modal --- */}
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography
                            variant="h6"
                            sx={{ color: "#2a9d8f", fontWeight: "bold", mb: 2 }}
                        >
                            Edit Medicine Details
                        </Typography>

                        <TextField fullWidth label="Medicine Name" defaultValue="Paracetamol" margin="normal" />
                        <TextField fullWidth label="Category" defaultValue="Tablet" margin="normal" />
                        <TextField fullWidth label="Quantity" type="number" defaultValue="50" margin="normal" />
                        <TextField fullWidth label="Price (₹)" type="number" defaultValue="120" margin="normal" />
                        <TextField
                            fullWidth
                            label="Expiry Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            defaultValue="2025-12-31"
                            margin="normal"
                        />
                        <TextField fullWidth label="Supplier" defaultValue="ABC Pharma" margin="normal" />

                        <Box sx={{ textAlign: "center", mt: 3 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#2a9d8f",
                                    "&:hover": { backgroundColor: "#21867a" },
                                    mr: 2,
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                                sx={{
                                    borderColor: "#e63946",
                                    color: "#e63946",
                                    "&:hover": { backgroundColor: "#e63946", color: "white" },
                                }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}

export default Admin;
