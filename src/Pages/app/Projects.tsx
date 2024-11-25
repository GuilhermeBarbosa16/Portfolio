import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Link,
  Collapse,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FinWiseLogo from "../../assets/Logo-Finwese.png";

const Projects: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      sx={{
        minHeight: "auto", // Alterado de 100vh para auto, para não forçar o scroll
        padding: { xs: "2rem 1rem", sm: "4rem 2rem" }, // Espaçamento adaptativo
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "#fff",
          marginBottom: "3rem",
          fontFamily: "Nanum Myeongjo",
          fontWeight: "bold",
        }}
      >
        Meus projetos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Projeto FinWise */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "rgba(0, 207, 255, 0.8)", // Transparência para destacar o background físico
              height: { xs: "150px", sm: "200px" }, // Altura adaptativa
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={FinWiseLogo}
                alt="FinWise Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Card>

          {/* Ícone do GitHub abaixo do Card */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Link
              href="https://github.com/YanPedro18/FinWise-project.git"
              target="_blank"
              rel="noopener"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#00CFFF",
                },
              }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Box>

          {/* Botão para abrir detalhes do projeto */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <IconButton
              onClick={handleToggleDetails}
              sx={{
                color: "#fff",
              }}
            >
              {showDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          {/* Seção de detalhes do projeto */}
          <Collapse in={showDetails}>
            <Box
              sx={{
                marginTop: "1rem",
                padding: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparente para harmonizar com o background físico
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
                fontSize: { xs: "0.9rem", sm: "1rem" }, // Texto adaptativo
              }}
            >
              <Typography variant="body1">
                FinWise é uma solução de gestão financeira personalizada que visa
                proporcionar aos usuários uma experiência intuitiva e eficaz para o
                controle de suas finanças. Originalmente iniciado como um projeto
                acadêmico, o FinWise passou por um processo de evolução e, atualmente,
                encontra-se em suas fases finais de desenvolvimento.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                Desenvolvido com **React** para a interface de usuário e **Firebase**
                como banco de dados, garantindo escalabilidade e segurança.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        {/* Outros Projetos (placeholders) */}
        {[1, 2].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparente para harmonizar com o fundo
                height: { xs: "150px", sm: "200px" },
                borderRadius: "16px",
              }}
            ></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
