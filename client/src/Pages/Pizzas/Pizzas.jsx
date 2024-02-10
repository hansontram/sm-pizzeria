import React, { useEffect, useState } from "react";

import { MainContainer, FormModal, PizzaCard } from "../../Components";
import {
  Box,
  Typography,
  MenuItem,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";
import { api } from "../../api";

export default function Pizzas({ pizzaData, toppingsData, role }) {
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => console.log(pizzaToppings), [pizzaToppings]);

  const formatToppings = (idArray, objectArray) => {
    const result = [...idArray];
    // console.log("result",result)

    for (let i = 0; i < result.length; i++) {
      let matchedTopping = objectArray.find(
        (topping) => result[i] === topping._id
      );
      // console.log("match", matchedTopping, "result i: ",result[i])
      if (matchedTopping) {
        result[i] = matchedTopping;
      }
    }
    return result;
  };

  const addNewPizza = async () => {
    const body = {
      name: pizzaName,
      description: pizzaDescription,
      toppings: pizzaToppings,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/pizzas`, options);
    try {
      // response.json().then((newPizza) => console.log(newPizza));

      // TODO: trigger refetch
      if (response.ok) {
        setModalOpen(false);
        setPizzaName("");
        setPizzaDescription("");
        setPizzaToppings([]);
      }
    } catch (err) {}
  };

  const formContent = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="body1">Pizza Name</Typography>
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setPizzaName(e.target.value)}
          value={pizzaName}
        />
        <Typography variant="body1">Description</Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setPizzaDescription(e.target.value)}
          value={pizzaDescription}
        />
        <InputLabel id="demo-multiple-name-label">Choose toppings</InputLabel>
        <Select
          isMulti
          onChange={(values) =>
            setPizzaToppings(values.map((selected) => selected.value))
          }
          options={toppingsData.map((topping) => {
            return { value: topping._id, label: topping.name };
          })}
        />
        <Button variant="contained" onClick={addNewPizza}>
          Submit
        </Button>
      </Box>
    );
  };

  if (role === "owner") {
    return (
      <MainContainer title="Pizza dashboard">
        <div>
          <p>Pizza dashboard is only accessible to chef</p>
        </div>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer title="Pizza Dashboard">
        <FormModal
          formContent={formContent}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          buttonText="Create Pizza"
        />

        <Box
        sx={{
          pt: 4, 
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          flexWrap: "wrap",
          gap: 3
         
        }}
        >

      
        {pizzaData.map((pizza, index) => {
          const { name, description, toppings, _id } = pizza;
          return (
            <PizzaCard
              key={index}
              name={name}
              description={description}
              completeToppingsData={formatToppings(toppings, toppingsData)}
              options={toppingsData}
              pizzaId={_id}
            />
          );
        })}
        </Box>
      </MainContainer>
    );
  }
}
