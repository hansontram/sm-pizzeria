import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button, Box, Typography} from "@mui/material";
import { MainContainer } from "../../Components";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Home({ setRole }) {
  // resets role state to default
  useEffect(() => {
    setRole(null);
  }, []);

  return (
    <MainContainer>
      {/* <Box></Box>
      <Box>
        <Link to="/toppings">
          <Button onClick={() => setRole("owner")}>Owner</Button>
        </Link>
        <Link to="/pizzas">
          <Button onClick={() => setRole("chef")}>Chef</Button>
        </Link>
      </Box> */}

      <Container component="main" maxWidth="s">
     
        <Box
          sx={{
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
  
            gap:3
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LocalPizzaIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ textTransform: 'uppercase' }}>
          Welcome to StrongMind Pizzeria!</Typography>
          <Typography>
          Are you ready to take the reins as an Owner or innovate as a Chef?          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link to="/toppings">
              <Button
                onClick={() => setRole("owner")}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 2, px: 9 }}
              >
                Owner
              </Button>
            </Link>
            <Link to="/pizzas">
              <Button
                onClick={() => setRole("chef")}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 2, px: 9 }}
              >
                Chef
              </Button>
            </Link>

          </Box>
        </Box>
      </Container>
    </MainContainer>
  );
}
