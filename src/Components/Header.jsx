import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Header() {
  const aboutText = `
        The Medical Supply Management System helps pharmacy owners 
        efficiently manage medicines, track inventory, update stock, 
        and monitor expiry details — all stored locally on your system.
    `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2a9d8f" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
              alt="Medical Logo"
              style={{ width: "45px" }}
            />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              MediTrack
            </Link>
          </Typography>


          <Tooltip title={aboutText} arrow>
            <Button color="inherit">About</Button>
          </Tooltip>

          <Link to="history" style={{ textDecoration: "none", color: "white"}}>
                        <Button color="inherit">History</Button>
                    </Link>

          <Link to="admin" style={{ textDecoration: "none", color: "white", backgroundColor: "red" }}>
            <Button color="inherit">Admin</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
