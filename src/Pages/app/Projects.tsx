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
import LinkIcon from "@mui/icons-material/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Projects = () => {
  const [showDetails, setShowDetails] = useState({
    FinWise: false,
    Calculadora: false,
    ArtStar: false,
    Layout1: false,
    Layout2: false,
    Layout3: false,
    LayoutClinica: false,
    LayoutSalao: false,
  });

  const handleToggleDetails = (project: "FinWise" | "Calculadora" | "ArtStar" | "Layout1" | "Layout2" | "Layout3" | "LayoutClinica" | "LayoutSalao") => {
    setShowDetails((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <Box sx={{ padding: "2rem", color: "#fff" }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
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
              borderRadius: "8px",
            }}
            elevation={1}
          >
            <img
              src="/Portfolio/Logo-Finwese.svg"
              alt="Logo FinWise"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>

          {/* Tecnologias usadas */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>
              React
            </Typography>
            <Typography variant="body2" sx={{ color: "#FFCA28" }}>
              Firebase
            </Typography>
          </Box>

          {/* Links do GitHub e site */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://github.com/YanPedro18/FinWise-project.git"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                "&:hover": { color: "#00CFFF" },
              }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Box>

          {/* Botão para detalhes */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              onClick={() => handleToggleDetails("FinWise")}
              sx={{ color: "#fff" }}
            >
              {showDetails.FinWise ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.FinWise}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                FinWise é uma plataforma de gestão financeira projetada para
                simplificar o controle de receitas e despesas. Desenvolvida com
                React. A aplicação oferece uma interface dinâmica e responsiva.
                O armazenamento de dados é gerenciado pelo Firebase Firestore, um
                banco de dados NoSQL em tempo real, que garante alta performance
                e sincronização eficiente. O Firebase também é utilizado para
                autenticação segura e hospedagem, proporcionando escalabilidade e
                confiabilidade.
              </Typography>
            </Box>
          </Collapse>
        </Grid>
        {/* Projeto Art-Star */}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://art-star-guilherme-s-projects-38675229.vercel.app/&dimension=1024x768`}
              alt="Logo Art-Star"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Art-Star"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://artstarmovelaria.com.br"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("ArtStar")} sx={{ color: "#fff" }}>
              {showDetails.ArtStar ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.ArtStar}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Art-Star é uma marcenaria, desenvolvi uma landing page com React.
                O site apresenta os serviços e produtos da empresa com um design moderno e responsivo.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        {/* Layout frela 1*/}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://lauout-1.vercel.app/&dimension=1024x768`}
              alt="Layout-1"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Lauout-1"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://lauout-1.vercel.app/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("Layout1")} sx={{ color: "#fff" }}>
              {showDetails.Layout1 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.Layout1}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Layout usado para orçamentos de frelancer's, produzido em react.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        {/* Layout frela 2*/}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://layout-2-psi.vercel.app/&dimension=1024x768`}
              alt="Layout-2"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Layout-2"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://layout-2-psi.vercel.app/  "
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("Layout2")} sx={{ color: "#fff" }}>
              {showDetails.Layout2 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.Layout2}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Layout usado para orçamentos de frelancer's, produzido em react.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        {/* Layout frela3 */}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://layout-3-eta.vercel.app/&dimension=1024x768`}
              alt="Layout-1"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Layout-3"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://layout-3-eta.vercel.app/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("Layout3")} sx={{ color: "#fff" }}>
              {showDetails.Layout3 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.Layout3}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Layout usado para orçamentos de frelancer's, produzido em react.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

  {/* Layout frela-Clinica*/}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://layout-clinica.vercel.app/&dimension=1024x768`}
              alt="LayoutClinica"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Layout-Clinica"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://layout-clinica.vercel.app/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("LayoutClinica")} sx={{ color: "#fff" }}>
              {showDetails.LayoutClinica ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.LayoutClinica}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Layout usado para orçamentos de frelancer's, produzido em react.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

      
  {/* Layout frela-Clinica*/}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)",
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://layout-salao.vercel.app/&dimension=1024x768`}
              alt="LayoutClinica"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0.5rem", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>React</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: "0.5rem" }}>
            <Link
              href="https://github.com/GuilhermeBarbosa16/Layout-Salao"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://layout-salao.vercel.app/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff", "&:hover": { color: "#00CFFF" } }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => handleToggleDetails("LayoutSalao")} sx={{ color: "#fff" }}>
              {showDetails.LayoutSalao ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.LayoutSalao}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Layout usado para orçamentos de frelancer's, produzido em react.
              </Typography>
            </Box>
          </Collapse>
        </Grid>

        {/* Projeto Calculadora Trabalhista */}
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
              borderRadius: "8px",
              backgroundColor: "rgb(214, 214, 214)", // Fundo para contraste
            }}
            elevation={1}
          >
            <img
              src={`https://api.screenshotmachine.com?key=1b49fa&url=https://calculos-rose.vercel.app/&dimension=1920x1080`}
              alt="Logo Calculadora Trabalhista"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />

          </Card>

          {/* Tecnologias usadas */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: "#61DAFB" }}>
              React
            </Typography>
          </Box>

          {/* Links do GitHub e site */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "0.5rem",
            }}
          >
            <Link
              href="https://github.com/GuilhermeBarbosa16/Calculos"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                "&:hover": { color: "#00CFFF" },
              }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://calculos-rose.vercel.app/"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                "&:hover": { color: "#00CFFF" },
              }}
            >
              <LinkIcon fontSize="large" />
            </Link>
          </Box>
          {/* Botão para detalhes */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              onClick={() => handleToggleDetails("Calculadora")}
              sx={{ color: "#fff" }}
            >
              {showDetails.Calculadora ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>

          <Collapse in={showDetails.Calculadora}>
            <Box
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Typography variant="body1">
                Calculadora Trabalhista é uma aplicação React que auxilia no cálculo de
                valores trabalhistas, com foco na precisão e simplicidade.
              </Typography>
            </Box>
          </Collapse>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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

      </Grid>
    </Box>
  );
};

export default Projects;
