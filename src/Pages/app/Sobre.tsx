import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaReact, FaJoomla, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiFigma, SiXampp } from 'react-icons/si';

const Home: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandClick = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
        color: 'white',
        paddingTop: '20px',
        overflow: 'hidden', // Evita a rolagem global
      }}
    >
      {/* Seção da esquerda: Experiências e Formação */}
      <Box sx={{ width: '100%', paddingRight: '15rem', paddingTop: '3rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Experiências profissionais <br />
          <span style={{ color: '#03DAC6' }}>&</span>
          <br />
          Formação Acadêmica
        </Typography>

        {/* Experiência 1 */}
        <Box
          sx={{
            marginBottom: '25px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #B0BEC5',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => handleExpandClick('panel1')}
        >
          <ExpandMoreIcon
            sx={{
              marginRight: '10px',
              transition: 'transform 0.3s', // Transição suave de 0.3 segundos
              transform: expanded === 'panel1' ? 'rotate(180deg)' : 'rotate(0deg)' // Rota para cima quando expandido
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Estagiário de help desk na Controladoria Geral do Estado
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: '5px', marginBottom: '5px' }}>
              <Typography variant="subtitle2" sx={{ color: '#aaa' }}>
                (Jul de 2023 - Abr de 2024)
              </Typography>
            </Box>
            <Collapse in={expanded === 'panel1'} timeout="auto" unmountOnExit>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Durante esse período na controladoria fui responsável pela área de suporte necessário à infraestrutura de rede e aos servidores públicos, assistência ao desenvolvimento de sites, Joomla para criação e manutenção de sistemas.
              </Typography>
            </Collapse>
          </Box>
        </Box>

        {/* Experiência 2 */}
        <Box
          sx={{
            marginBottom: '25px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #B0BEC5',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => handleExpandClick('panel2')}
        >
          <ExpandMoreIcon
            sx={{
              marginRight: '10px',
              transition: 'transform 0.3s',
              transform: expanded === 'panel2' ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Estagiário de desenvolvimento na Controladoria Geral do Estado
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: '5px', marginBottom: '5px' }}>
              <Typography variant="subtitle2" sx={{ color: '#aaa' }}>
                (Abr de 2024 - Jul de 2024)
              </Typography>
            </Box>
            <Collapse in={expanded === 'panel2'} timeout="auto" unmountOnExit>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                No periodo que eu estava como suporte, ja realizava reajustes de em sites e recebi a oportunidade de focar somente na parte de desenvolvimento. Onde eu utilizava PHP, JavaScript, Laravel, Livewire, Joomla 
              </Typography>
            </Collapse>
          </Box>
        </Box>

        {/* Experiência 3 */}
        <Box
          sx={{
            marginBottom: '25px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid #B0BEC5',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={() => handleExpandClick('panel3')}
        >
          <ExpandMoreIcon
            sx={{
              marginRight: '10px',
              transition: 'transform 0.3s',
              transform: expanded === 'panel3' ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Análise e desenvolvimento de sistemas - Una
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: '5px', marginBottom: '5px' }}>
              <Typography variant="subtitle2" sx={{ color: '#aaa' }}>
                (Jan de 2022 - Dez de 2024)
              </Typography>
            </Box>
            <Collapse in={expanded === 'panel3'} timeout="auto" unmountOnExit>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
              5* Período
              <br />
              Ensino Superior, Análise de Sistemas, Atividades e grupos: (5* Período 5/5) Competências: UML (Linguagem de modelagem unificada) · MVC · Java · NetBeans · Banco de dados Oracle · MySQL · Node · Express.Js · React/Angular · PhpMyAdmin · PHP · JavaScript · TDD · BDD · Scrum · Kanban · métodos e técnicas engenharia de software.
              </Typography>
            </Collapse>
          </Box>
        </Box>
      </Box>

      {/* Seção da direita: Habilidades */}
      <Box sx={{ width: '42%', paddingTop: '3rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          Software's <br />
          <span style={{ color: '#03DAC6' }}>&</span><br />
          Conhecimentos
        </Typography>
        <Grid container spacing={4}>
          {/* Ícones originais */}
          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s', 
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaHtml5 style={{ fontSize: 40, color: '#E34F26' }} />
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2">HTML</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaCss3Alt style={{ fontSize: 40, color: '#1572B6' }} />
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2">CSS</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', 
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaJs style={{ fontSize: 40, color: '#F7DF1E' }} />
              <Typography variant="h6">45%</Typography>
              <Typography variant="body2">JavaScript</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaLaravel style={{ fontSize: 40, color: '#FF2D20' }} />
              <Typography variant="h6">30%</Typography>
              <Typography variant="body2">Laravel</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaReact style={{ fontSize: 40, color: '#61DAFB' }} />
              <Typography variant="h6">45%</Typography>
              <Typography variant="body2">React</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaNodeJs style={{ fontSize: 40, color: '#68A063' }} />
              <Typography variant="h6">35%</Typography>
              <Typography variant="body2">Node.js</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <FaGitAlt style={{ fontSize: 40, color: '#F1502F' }} />
              <Typography variant="h6">75%</Typography>
              <Typography variant="body2">Git</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <SiFigma style={{ fontSize: 40, color: '#F24E1E' }} />
              <Typography variant="h6">80%</Typography>
              <Typography variant="body2">Figma</Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
              <SiXampp style={{ fontSize: 40, color: '#FB7A24' }} />
              <Typography variant="h6">100%</Typography>
              <Typography variant="body2">XAMPP</Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
