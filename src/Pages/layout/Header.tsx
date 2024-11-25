import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import imageToAdd from "../../assets/Logo.svg";

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/Sobre" },
    { label: "Projetos", path: "/Projects" },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={imageToAdd} alt="Logo" style={{ height: "40px" }} />
          </Box>

          {/* Menu */}
          {isMobile ? (
            <>
              {/* Ícone do menu hambúrguer */}
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Drawer para menu hambúrguer */}
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    backgroundColor: "#333",
                    height: "100%",
                  }}
                  role="presentation"
                  onClick={() => toggleDrawer(false)}
                  onKeyDown={() => toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={item.path}
                          sx={{
                            color: "#ffffff",
                            "&:hover": {
                              color: "#00ffcc",
                              backgroundColor: "rgba(0, 255, 204, 0.1)",
                            },
                          }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: "1.5rem" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#ffffff",
                    "&:hover": {
                      color: "#00ffcc",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Header;
