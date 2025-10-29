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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function UserView() {
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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Paracetamol</TableCell>
                <TableCell>Tablet</TableCell>
                <TableCell>50</TableCell>
                <TableCell>₹120</TableCell>
                <TableCell>2025-12-31</TableCell>
                <TableCell>ABC Pharma</TableCell>

              </TableRow>

              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Cough Syrup</TableCell>
                <TableCell>Syrup</TableCell>
                <TableCell>20</TableCell>
                <TableCell>₹200</TableCell>
                <TableCell>2025-08-15</TableCell>
                <TableCell>XYZ Pharma</TableCell>

              </TableRow>

              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Vitamin D</TableCell>
                <TableCell>Capsule</TableCell>
                <TableCell>30</TableCell>
                <TableCell>₹150</TableCell>
                <TableCell>2026-03-10</TableCell>
                <TableCell>LMN Pharma</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

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
  )
}

export default UserView