import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const aboutText = `
    The Medical Supply Management System helps pharmacy owners 
    efficiently manage medicines, track inventory, update stock, 
    and monitor expiry details — all stored locally on your system.
  `;

  const menuItems = [
    { label: "About", link: "#about", tooltip: aboutText },
    { label: "History", link: "history" },
    { label: "Admin", link: "admin", isAdmin: true },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2a9d8f",
          px: { xs: 2, md: 4 },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
              alt="Medical Logo"
              style={{ width: "40px" }}
            />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: { xs: "22px", md: "26px" },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              MediTrack
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Tooltip title={aboutText} arrow>
              <Button sx={{ color: "white", textTransform: "none" }}>
                About
              </Button>
            </Tooltip>

            <Link to="history" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white", textTransform: "none" }}>
                History
              </Button>
            </Link>

            <Link to="admin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "20px",
                  px: 2,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#c62828" },
                }}
              >
                Admin
              </Button>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 220,
            backgroundColor: "#2a9d8f",
            color: "white",
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              {item.tooltip ? (
                <Tooltip title={item.tooltip} arrow placement="left">
                  <ListItemButton onClick={() => setOpen(false)}>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "1rem",
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              ) : (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "white", width: "100%" }}
                  onClick={() => setOpen(false)}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "1rem",
                      }}
                    />
                  </ListItemButton>
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;
