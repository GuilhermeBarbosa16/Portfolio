import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaReact, FaNodeJs, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiFigma, SiXampp } from 'react-icons/si';

const Home: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpandClick = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const skills = [
    { icon: <FaHtml5 style={{ fontSize: 40, color: '#E34F26' }} />, label: 'HTML', percentage: 60 },
    { icon: <FaCss3Alt style={{ fontSize: 40, color: '#1572B6' }} />, label: 'CSS', percentage: 60 },
    { icon: <FaJs style={{ fontSize: 40, color: '#F7DF1E' }} />, label: 'JavaScript', percentage: 45 },
    { icon: <FaLaravel style={{ fontSize: 40, color: '#FF2D20' }} />, label: 'Laravel', percentage: 30 },
    { icon: <FaReact style={{ fontSize: 40, color: '#61DAFB' }} />, label: 'React', percentage: 45 },
    { icon: <FaNodeJs style={{ fontSize: 40, color: '#68A063' }} />, label: 'Node.js', percentage: 35 },
    { icon: <FaGitAlt style={{ fontSize: 40, color: '#F1502F' }} />, label: 'Git', percentage: 75 },
    { icon: <SiFigma style={{ fontSize: 40, color: '#F24E1E' }} />, label: 'Figma', percentage: 80 },
    { icon: <FaPhp style={{ fontSize: 40, color: '#777BB4' }} />, label: 'PHP', percentage: 75 },
  ];

  const experiences = [
    {
      panel: 'panel1',
      title: 'Estagiário de help desk na Controladoria Geral do Estado',
      date: 'Jul de 2023 - Abr de 2024',
      description: (
        <ul style={{ margin: 0, paddingLeft: '20px', textAlign: 'justify' }}>
          <li>Suporte técnico básico em atividades de help desk, incluindo suporte para VPN e resolução de problemas cotidianos</li>
        </ul>
      ),
    },
    {
      panel: 'panel2',
      title: 'Estagiário de desenvolvimento na Controladoria Geral do Estado',
      date: 'Abr de 2024 - Jul de 2024',
      description: (
        <ul style={{ margin: 0, paddingLeft: '20px', textAlign: 'justify' }}>
          <li>Atuação como estagiário de desenvolvimento, contribuindo para a melhoria de sistemas internos.</li>
          <li>Desenvolvimento com foco em frameworks PHP, utilizando Laravel e Joomla.</li>
          <li>Participação no desenvolvimento de soluções para otimizar fluxos de trabalho e processos administrativos.</li>
          <li>Fortalecimento de habilidades em desenvolvimento web e análise de requisitos técnicos.</li>
        </ul>
      ),
    },
    {
      panel: 'panel3',
      title: 'Análise e desenvolvimento de sistemas - Una',
      date: 'Jan de 2022 - Dez de 2024',
      description: (
        <Typography variant="body2" sx={{ textAlign: 'justify', lineHeight: '1.6' }}>
          5º Período. Ensino Superior em Análise de Sistemas, com competências como UML, MVC, Java, Oracle, MySQL, Node,
          Express.js, React, Angular, PHP, TDD, BDD, Scrum e Kanban.
        </Typography>
      ),
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 'auto',
        color: 'white',
        paddingTop: '20px',
        gap: { xs: '2rem', md: '0' },
      }}
    >
      {/* Seção da esquerda: Experiências e Formação */}
      <Box sx={{ width: { xs: '100%', md: '58%' }, paddingRight: { md: '2rem' } }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Experiências profissionais <br />
          <span style={{ color: '#03DAC6' }}>&</span>
          <br />
          Formação Acadêmica
        </Typography>

        {experiences.map((experience) => (
          <Box
            key={experience.panel}
            sx={{
              marginBottom: '25px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              border: '1px solid #B0BEC5',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s, background-color 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                backgroundColor: '#37474F',
              },
            }}
            onClick={() => handleExpandClick(experience.panel)}
          >
            <ExpandMoreIcon
              sx={{
                marginRight: '10px',
                transition: 'transform 0.3s',
                transform: expanded === experience.panel ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{experience.title}</Typography>
              <Typography variant="subtitle2" sx={{ color: '#aaa', marginTop: '5px' }}>
                {experience.date}
              </Typography>
              <Collapse in={expanded === experience.panel} timeout="auto" unmountOnExit>
                {experience.description}
              </Collapse>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Seção da direita: Habilidades */}
      <Box sx={{ width: { xs: '100%', md: '38%' }, paddingLeft: '1.5rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          Software's <br />
          <span style={{ color: '#03DAC6' }}>&</span>
          <br />
          Conhecimentos
        </Typography>
        <Grid container spacing={3} sx={{ paddingBottom: '20px' }}>
          {skills.map((skill, index) => (
            <Grid item xs={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '5px',
                  transition: 'transform 0.3s, border-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {skill.icon}
                <Typography variant="h6">{skill.percentage}%</Typography>
                <Typography variant="body2">{skill.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
