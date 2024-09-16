import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imageToAdd from '../../assets/Logo.svg';
import { Outlet } from 'react-router-dom';
import { padding } from '@mui/system';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center', padding: '0 20px', position: 'relative' }}>
        <Box style={{ position: 'absolute', left: '20px', display: 'flex', alignItems: 'center' }}>
          <img src={imageToAdd} alt="Logo" />
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', }}>
          <Button component={Link} to="/" style={{ color: '#ffffff' }}>
            Home
          </Button>
          <Button component={Link} to="/Sobre" style={{ color: '#ffffff' }}>
            Sobre
          </Button>
          <Button component={Link} to="/Projects" style={{ color: '#ffffff' }}>
            Projetos
          </Button>
        </Box>
      </Toolbar>
      <Outlet />
    </AppBar>
    
 
  );
};

export default Header;
