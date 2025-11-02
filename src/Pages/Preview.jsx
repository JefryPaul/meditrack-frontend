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
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Preview() {
  const medicines = [
    { id: 1, name: "Paracetamol", category: "Tablet", qty: 10, price: 120 },
    { id: 2, name: "Vitamin D", category: "Capsule", qty: 5, price: 150 },
    { id: 3, name: "Cough Syrup", category: "Syrup", qty: 3, price: 200 },
  ];

  const isMobile = useMediaQuery("(max-width:600px)");

  const totalItems = medicines.length;
  const totalQty = medicines.reduce((acc, m) => acc + m.qty, 0);
  const grandTotal = medicines.reduce((acc, m) => acc + m.qty * m.price, 0);

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
        {!isMobile ? (
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
              {medicines.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{m.id}</TableCell>
                  <TableCell>{m.name}</TableCell>
                  <TableCell>{m.category}</TableCell>
                  <TableCell>{m.qty}</TableCell>
                  <TableCell>₹{m.price}</TableCell>
                  <TableCell>₹{m.qty * m.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Box>
            {medicines.map((m) => (
              <Card
                key={m.id}
                sx={{
                  mb: 2,
                  borderLeft: "5px solid #2a9d8f",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: "#2a9d8f", fontWeight: "bold" }}
                  >
                    {m.name}
                  </Typography>
                  <Typography>Category: {m.category}</Typography>
                  <Typography>Quantity: {m.qty}</Typography>
                  <Typography>Price: ₹{m.price}</Typography>
                  <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                    Total: ₹{m.qty * m.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          sx={{ mt: 2 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
            Total Items: {totalItems}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#333" }}>
            Total Quantity: {totalQty}
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, fontWeight: "bold", color: "#2a9d8f" }}
          >
            Grand Total: ₹{grandTotal}
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
