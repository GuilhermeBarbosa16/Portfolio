import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import imageToAdd from '.src/assets/img/Logo.svg'

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'center', padding: '0 20px' }}>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Typography variant="h6" component="div" style={{ color: '#ffffff', textAlign: 'center' }}>
            Guilherme
            <br />
            <span style={{ color: '#03DAC6' }}>Barbosa</span>
          </Typography>
          <Button component={Link} to="/" style={{ color: '#ffffff' }}>
            Home
          </Button>
          <Button component={Link} to="/Sobre" style={{ color: '#ffffff' }}>
            Sobre
          </Button>
          <Button component={Link} to="/projects" style={{ color: '#ffffff' }}>
            Projetos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
