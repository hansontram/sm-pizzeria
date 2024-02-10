import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Button } from "@mui/material";
import logo from "../../assets/logo.png";

export default function Header(props) {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit',  }}>
        <Typography sx={{ display: "flex", alignItems: "center",fontWeight:"bold" }}>
          <img
            src={logo}
            alt=""
            style={{ height: "50px", marginRight: "10px" }}
          />
          STRONGMIND PIZZERIA
        </Typography>
      </Link>{" "}
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit',  }}>
          <Button color="inherit">Home</Button>
        </Link>
        {/* <Link to="/pizzas">
          <Button color="inherit">Pizzas</Button>
        </Link>
        <Link to="/toppings">
          <Button color="inherit">Toppings</Button>
        </Link> */}
      </div>
    </AppBar>
  );
}
