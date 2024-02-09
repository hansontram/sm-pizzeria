import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Home, Pizzas, Toppings } from "./Pages";
import { Header } from "./Components";
import { Route, Routes } from "react-router-dom";
import { api } from "./api";

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [toppingsData, setToppingsData] = useState([]);

  useEffect(() => {
    fetchPizzas();
    fetchToppings();
  }, []);
  // useEffect(() => {
  //   console.log(pizzaData);
  // }, [pizzaData]);
  // useEffect(() => {
  //   console.log(toppingsData);
  // }, [toppingsData]);

  const fetchPizzas = async () => {
    const response = await fetch(`${api}/pizzas`);
    try {
      response.json().then((pizzas) => {
        setPizzaData(pizzas);
      });
    } catch (err) {}
  };
  const fetchToppings = async () => {
    const response = await fetch(`${api}/toppings`);
    try {
      response.json().then((toppings) => {
        setToppingsData(toppings);
      });
    } catch (err) {}
  };

  return (
    <main>
      <CssBaseline>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas pizzaData={pizzaData} toppingsData={toppingsData}/>} />
          <Route path="/toppings" element={<Toppings toppingsData={toppingsData}/>} />
        </Routes>
      </CssBaseline>
    </main>
  );
}

export default App;
