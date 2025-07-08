import React from "react";
import { Box, Grid, Card, Typography, Link } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import ImgReact from "../../assets/Guilherme Almeida Barbosa - Curso React_ escrevendo com Typescript - Alura_page-0001.jpg";
import ImgAlgoritmos from "../../assets/Guilherme Almeida Barbosa - Curso Algoritmos com JavaScript II_ aprofundando em algoritmos de ordenação e busca - Alura_page-0001.jpg";
import ImgScrum from "../../assets/Guilherme Almeida Barbosa - Curso Scrum_ agilidade em seu projeto - Alura_page-0001.jpg";

const certificados = [
  {
    titulo: "React: escrevendo com Typescript - Alura",
    img: ImgReact,
    link: "https://cursos.alura.com.br/certificate/052189be-7375-4ce9-ac3f-2011f475ff99?lang",
  },
  {
    titulo: "Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e busca - Alura",
    img: ImgAlgoritmos,
    link: "https://cursos.alura.com.br/certificate/5b772bdb-d312-4cf9-afce-06944ad18db2?lang",
  },
  {
    titulo: "Scrum: agilidade em seu projeto - Alura",
    img: ImgScrum,
    link: "https://cursos.alura.com.br/certificate/4d5ddc63-4af5-4541-ad1e-81971676c457?lang",
  },
];

const Certificacao = () => {
  return (
    <Box sx={{ padding: "2rem", color: "#fff" }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: "2rem", fontWeight: "bold" }}>
        Certificações
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {certificados.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} style={{ display: "flex" }}>
            <Card
              sx={{
                maxWidth: 330,
                width: "100%",
                height: 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0 auto",
                overflow: "hidden",
                borderRadius: "8px",
                backgroundColor: "transparent",
              }}
              elevation={0}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: 120, justifyContent: "center", width: '100%' }}>
                <DescriptionIcon sx={{ fontSize: 80, color: "#00CFFF", marginTop: 2 }} />
                <Typography variant="subtitle1" sx={{ marginTop: "0.5rem", color: "#fff", textAlign: 'center', px: 1, fontSize: 16 }}>
                  {cert.titulo}
                </Typography>
              </Box>
              <Link href={cert.link} target="_blank" rel="noopener" sx={{ width: '90%', marginTop: 2 }}>
                <img
                  src={cert.img}
                  alt={cert.titulo}
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px", marginTop: 8, cursor: "pointer" }}
                />
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificacao;
