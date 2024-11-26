import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Collapse,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "2rem", fontWeight: "bold" }}
      >
        Meus Projetos
      </Typography>

      <Grid container spacing={2} justifyContent="center">
  {/* Projeto FinWise */}
  <Grid item xs={12} sm={6} md={4}>
    <Card
      sx={{
        maxWidth: 330,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        overflow: "hidden",
      }}
      elevation={1}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src="/src/assets/Logo-Finwese.png"
          alt="FinWise Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Card>

    {/* Ícone do GitHub */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0.5rem", // Reduzido o espaçamento vertical
      }}
    >
      <Link
        href="https://github.com/YanPedro18/FinWise-project.git"
        target="_blank"
        rel="noopener"
        sx={{
          color: "#fff",
          textDecoration: "none",
          transition: "color 0.3s ease",
          "&:hover": { color: "#00CFFF" },
        }}
      >
        <GitHubIcon fontSize="large" />
      </Link>
    </Box>

    {/* Botão para detalhes */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0.25rem", // Reduzido o espaçamento vertical
      }}
    >
      <IconButton
        onClick={handleToggleDetails}
        sx={{ color: "#fff" }}
      >
        {showDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </IconButton>
    </Box>

    {/* Detalhes do projeto */}
    <Collapse in={showDetails}>
      <Box
        sx={{
          marginTop: "0.5rem", // Reduzido o espaçamento superior
          padding: "0.75rem", // Reduzido o padding interno
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "8px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          FinWise é uma solução de gestão financeira personalizada que visa
          proporcionar aos usuários uma experiência intuitiva e eficaz.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
          Desenvolvido com React e Firebase para garantir escalabilidade.
        </Typography>
      </Box>
    </Collapse>
  </Grid>

  {/* Outros Projetos */}
  {[1, 2].map((_, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          maxWidth: 330,
          height: 200,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "16px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      ></Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
};

export default Projects;
