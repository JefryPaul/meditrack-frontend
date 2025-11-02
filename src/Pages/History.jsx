import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const historyData = [
  {
    userId: "USR001",
    medicines: [
      { name: "Paracetamol", category: "Tablet", qty: 10, price: 120 },
      { name: "Vitamin D", category: "Capsule", qty: 5, price: 150 },
      { name: "Cough Syrup", category: "Syrup", qty: 3, price: 200 },
    ],
  },
  {
    userId: "USR002",
    medicines: [
      { name: "Ibuprofen", category: "Tablet", qty: 5, price: 180 },
      { name: "Vitamin C", category: "Tablet", qty: 3, price: 100 },
    ],
  },
  {
    userId: "USR003",
    medicines: [
      { name: "Amoxicillin", category: "Capsule", qty: 6, price: 200 },
      { name: "Paracetamol", category: "Tablet", qty: 4, price: 120 },
      { name: "Cough Syrup", category: "Syrup", qty: 4, price: 200 },
      { name: "Vitamin D", category: "Capsule", qty: 0, price: 150 },
    ],
  },
];

function History() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box maxWidth={900} mx="auto" mt={5} mb={5} px={2}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#2a9d8f" }}
      >
        Purchase History
      </Typography>

      {historyData.map((order, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            my: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: "#f7fafc",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#264653", mb: 1 }}
          >
            🧾 User ID: {order.userId}
          </Typography>

          {!isMobile ? (
            <TableContainer>
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
                  {order.medicines.map((med, i) => (
                    <TableRow key={i} hover>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{med.name}</TableCell>
                      <TableCell>{med.category}</TableCell>
                      <TableCell>{med.qty}</TableCell>
                      <TableCell>₹{med.price}</TableCell>
                      <TableCell>₹{med.qty * med.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              {order.medicines.map((med, i) => (
                <Paper
                  key={i}
                  elevation={2}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", color: "#2a9d8f" }}>
                    {i + 1}. {med.name}
                  </Typography>
                  <Typography variant="body2">Category: {med.category}</Typography>
                  <Typography variant="body2">Quantity: {med.qty}</Typography>
                  <Typography variant="body2">Price: ₹{med.price}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Total: ₹{med.qty * med.price}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}
        </Paper>
      ))}

      <Typography
        sx={{
          mt: 3,
          textAlign: "center",
          color: "#777",
          fontStyle: "italic",
        }}
      >
        All previously completed purchases are listed above.
      </Typography>
    </Box>
  );
}

export default History;
