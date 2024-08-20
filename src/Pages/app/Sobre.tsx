import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaReact, FaJoomla } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        height: '100vh', 
        color: 'white',
        paddingTop: '20px'
      }}
    >
      {/* Seção da esquerda: Experiências e Formação */}
      <Box sx={{ width: '60%', paddingRight: '20px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Experiências profissionais <br />&<br /> Formação Acadêmica
        </Typography>
        {/* Lista de Experiências */}
        <Box sx={{ 
          marginBottom: '20px', 
          padding: '20px', 
          borderRadius: '10px',
          backgroundColor: '#6c737e',
          color: 'white'
        }}>
          <Typography variant="h6">
            Estagiário de help desk na controladoria geral do estado
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#aaa', marginTop: '10px' }}>
            (Jul de 2023 - Abr de 2024)
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            Durante esse período na controladoria fui responsável pela área de suporte necessário à infraestrutura de rede e aos servidores públicos.
          </Typography>
        </Box>
        {/* Outras Experiências */}
        <Box sx={{ 
          marginBottom: '10px', 
          padding: '15px', 
          borderRadius: '10px',
          backgroundColor: '#6c737e',
          color: 'white'
        }}>
          <Typography variant="h6">
            Estagiário de desenvolvimento na controladoria geral do estado
          </Typography>
        </Box>
        <Box sx={{ 
          marginBottom: '10px', 
          padding: '15px', 
          borderRadius: '10px',
          backgroundColor: '#6c737e',
          color: 'white'
        }}>
          <Typography variant="h6">
            Análise e desenvolvimento de sistemas - Una
          </Typography>
        </Box>
      </Box>

      {/* Seção da direita: Habilidades */}
      <Box sx={{ width: '35%', overflowY: 'auto', height: 'calc(100vh - 40px)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          Software's & Conhecimentos
        </Typography>
        <Grid container spacing={4}> {/* Aumenta o espaço entre as colunas */}
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaHtml5 style={{ fontSize: 40, color: '#E34F26' }} />
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2">HTML</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaCss3Alt style={{ fontSize: 40, color: '#1572B6' }} />
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2">CSS</Typography>
            </Box>
          </Grid>
          {/* Outras Habilidades */}
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaJs style={{ fontSize: 40, color: '#F7DF1E' }} />
              <Typography variant="h6">30%</Typography>
              <Typography variant="body2">JavaScript</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaLaravel style={{ fontSize: 40, color: '#FF2D20' }} />
              <Typography variant="h6">40%</Typography>
              <Typography variant="body2">Laravel</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaReact style={{ fontSize: 40, color: '#61DAFB' }} />
              <Typography variant="h6">45%</Typography>
              <Typography variant="body2">React</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Box sx={{ padding: '20px', borderRadius: '10px' }}>
              <FaJoomla style={{ fontSize: 40, color: '#0A5C5A' }} />
              <Typography variant="h6">75%</Typography>
              <Typography variant="body2">Joomla</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
