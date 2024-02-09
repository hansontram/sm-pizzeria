import React, { useEffect, useState } from "react";

import { MainContainer, FormModal } from "../../Components";
import { Box, Typography, MenuItem, InputLabel, Button } from "@mui/material";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";

export default function Pizzas({ pizzaData, toppingsData, role }) {
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => console.log(pizzaToppings), [pizzaToppings]);

  // Create function for post request to add Pizza {name, description, toppings}
  const addNewPizza = async () => {
    //declare payload variable {} and convert to json( JSON.stringify)
    //post call to URL
    //after post call completion, close modal by doing "setModalOpen(false)""
  };

  const formContent = () => {
    return (
      <>
        <label>Pizza Name</label>
        <input
          type="text"
          onChange={(e) => setPizzaName(e.target.value)}
          value={pizzaName}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          onChange={(e) => setPizzaDescription(e.target.value)}
          value={pizzaDescription}
        ></textarea>
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
        <Button onClick={addNewPizza}>Submit</Button>
      </>
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
        {pizzaData.map((pizza, index) => {
          const { name, description } = pizza;
          return (
            <div key={index}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>

              {/* TODO: Render toppings data - loop through data to match ids : 
              fetch topping, fetch pizza, set to state, create function to iterate over toppings data of a pizza, convert all ids to respective topping data */}
            </div>
          );
        })}

        <FormModal
          formContent={formContent}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </MainContainer>
    );
  }
}
