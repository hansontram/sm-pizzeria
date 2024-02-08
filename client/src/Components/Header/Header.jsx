import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button } from "@mui/material";

export default function Header(props) {
  return (
    <AppBar position="static" sx={{display:"flex", flexDirection:"row", justifyContent: "space-between", padding:"10px 50px"}}>
      <Typography>Pizza Console</Typography>{" "}
      <div>
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/pizzas">
          <Button color="inherit">Pizzas</Button>
        </Link>
        <Link to="/toppings">
          <Button color="inherit">Toppings</Button>
        </Link>
      </div>
    </AppBar>
  );
}
