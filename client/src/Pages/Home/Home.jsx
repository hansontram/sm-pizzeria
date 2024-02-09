import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MainContainer } from "../../Components";

export default function Home({ setRole }) {
  // resets role state to default 
  useEffect(() => {
    setRole(null);
  }, []);

  return (
    <MainContainer title="Home">
      <Link to="/toppings">
        <Button onClick={() => setRole("owner")}>Owner</Button>
      </Link>
      <Link to="/pizzas">
        <Button onClick={() => setRole("chef")}>Chef</Button>
      </Link>
    </MainContainer>
  );
}
