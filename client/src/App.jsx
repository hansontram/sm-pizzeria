import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Home, Pizzas, Toppings } from "./Pages";
import { Header } from "./Components";
import { Route, Routes } from "react-router-dom";
import { api } from "./api";

function App() {
  const [pizzaData, setPizzaData] = useState([]);
  const [toppingsData, setToppingsData] = useState([]);
  const [role, setRole] = useState(null); // enum : "chef" "owner"
  const [loading, setLoading] = useState(false);

  // TODO: add role to localStorage
  useEffect(() => {
    fetchPizzas();
    fetchToppings();
  }, []);

  const fetchPizzas = async () => {
    setLoading(true);
    const response = await fetch(`${api}/pizzas`);
    try {
      response.json().then((pizzas) => {
        setPizzaData(pizzas);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  };
  const fetchToppings = async () => {
    setLoading(true);
    const response = await fetch(`${api}/toppings`);
    try {
      response.json().then((toppings) => {
        setToppingsData(toppings);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <main>
      <CssBaseline>
        <Header />
        <Routes>
          <Route path="/" element={<Home setRole={setRole} />} />
          <Route
            path="/pizzas"
            element={
              <Pizzas
                pizzaData={pizzaData}
                toppingsData={toppingsData}
                role={role}
                loading={loading}
                fetchPizzas={fetchPizzas}
              />
            }
          />
          <Route
            path="/toppings"
            element={
              <Toppings
                toppingsData={toppingsData}
                role={role}
                loading={loading}
                fetchToppings={fetchToppings}
              />
            }
          />
        </Routes>
      </CssBaseline>
    </main>
  );
}

export default App;
