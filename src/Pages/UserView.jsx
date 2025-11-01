import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function UserView() {
  const medicines = [
    { id: 1, name: "Paracetamol", category: "Tablet", quantity: 50, price: 120, expiry: "2025-12-31", supplier: "ABC Pharma" },
    { id: 2, name: "Cough Syrup", category: "Syrup", quantity: 20, price: 200, expiry: "2025-08-15", supplier: "XYZ Pharma" },
    { id: 3, name: "Vitamin D", category: "Capsule", quantity: 30, price: 150, expiry: "2026-03-10", supplier: "LMN Pharma" },
  ];

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box maxWidth={900} mx="auto" mt={5}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "#2a9d8f", mb: 3 }}
        >
          Medicine Inventory
        </Typography>

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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
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
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        <Typography sx={{ mt: 3, textAlign: "center", color: "#777" }}>
          Showing all available medicines in inventory
        </Typography>
      </Box>

      <Box
        mt={5}
        textAlign="center"
        sx={{
          backgroundColor: "#e0f2f1",
          p: 3,
          borderRadius: "12px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#2a9d8f", mb: 2, fontWeight: "bold" }}
        >
          Want to order or create a supply list?
        </Typography>
        <Link to={"/select"}>
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            sx={{
              backgroundColor: "#2a9d8f",
              "&:hover": { backgroundColor: "#21867a" },
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Select Medicines
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default UserView;
