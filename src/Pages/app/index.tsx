import React from 'react';
import { Container, Box, Typography, Button, IconButton, Grid } from '@mui/material';
import { GitHub, LinkedIn, WhatsApp, Email } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import Foto from '../../assets/MinhaFoto.jpg';
import MaquinaDeEscrever from '../../components/MaquinadeEscrever';

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' }, 
        height: 'auto',
        color: 'white',
        paddingTop: '100px', 
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
        <Box
          sx={{
            width: { xs: '200px', md: '400px' }, 
            height: { xs: '200px', md: '400px' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            transition: 'clip-path 1s',
            clipPath: 'circle(75%)',
            borderRadius: '25px',
            '&:hover': {
              clipPath: 'circle(45%)',
            },
          }}
        >
          <img
            src={Foto}
            alt="Guilherme Almeida Barbosa"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mt: { xs: 3, md: 0 }, 
          }}
        >
          <Typography variant="h6">Olá, eu sou</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', paddingLeft: '5px', }}>Guilherme Almeida Barbosa</Typography>
          <Typography variant="subtitle1" sx={{ color: '#00ffcc', mb: 4 }}>
            <MaquinaDeEscrever text="Desenvolvedor Web Junior | Front-end" />
          </Typography>
          <a
            href="https://drive.google.com/file/d/1LGZWB_JZZWvtaDSeAcku6VTuzfGXniJD/view?usp=sharing"
            target="_blank"
            download
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<DownloadIcon />}
              sx={{ borderColor: '#00ffcc', color: '#00ffcc', mb: 4 }}
            >
              Meu currículo
            </Button>
          </a>

          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <a href="https://github.com/GuilhermeBarbosa16" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="GitHub" color="inherit">
                  <GitHub sx={{ color: '#00ffcc' }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/in/guilherme-almeida-a873b723a/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="LinkedIn" color="inherit">
                  <LinkedIn sx={{ color: '#00ffcc' }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item>
              <a href="https://wa.me/5531997412462?text=Ol%C3%A1%20Guilherme,%20vim%20pelo%20seu%20portf%C3%B3lio." target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="WhatsApp" color="inherit">
                  <WhatsApp sx={{ color: '#00ffcc' }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item>
              <a href="mailto:guiba6767@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Email" color="inherit">
                  <Email sx={{ color: '#00ffcc' }} />
                </IconButton>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
