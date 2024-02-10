import { useState } from "react";

import { Box, Typography, MenuItem, InputLabel, Button } from "@mui/material";
import Select from "react-select";
import { FormModal } from "../../Components";
import { api } from "../../api";

export default function PizzaCard({
  name,
  description,
  completeToppingsData,
  options,
  pizzaId,
}) {
  const [pizzaName, setPizzaName] = useState(name);
  const [pizzaDescription, setPizzaDescription] = useState(description);
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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

        <div>
          Current Toppings:
          {completeToppingsData
            .map((topping, index) => {
              return topping.name;
            })
            .join(", ")}
        </div>
        <InputLabel id="demo-multiple-name-label">Choose toppings</InputLabel>
        <Select
          isMulti
          // TODO: Find a way to show existing toppings inside select components
          //   defaultValue={pizzaToppings}
          onChange={(values) =>
            setPizzaToppings(values.map((selected) => selected.value))
          }
          options={options.map((topping) => {
            return { value: topping._id, label: topping.name };
          })}
        />
        <Button onClick={editPizza}>Update</Button>
        <Button onClick={deletePizza}>Delete</Button>
      </>
    );
  };
  const editPizza = async () => {
    const body = {
      name: pizzaName,
      description: pizzaDescription,
      toppings: pizzaToppings,
    };
 if(pizzaToppings.length === 0){
    delete body.toppings
 }
    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/pizzas/${pizzaId}`, options);
    try {
      // response.json().then((newPizza) => console.log(newPizza));

      // TODO: trigger refetch
      if (response.ok) {
        setModalOpen(false);

      }
    } catch (err) {}
  };

  const deletePizza = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/pizzas/${pizzaId}`, options);

    try {
        // TODO: trigger refetch
      if (response.ok) {
        setModalOpen(false);

      }
    } catch (err) {}
  };
  return (
    <Box onClick={() => setModalOpen(true)}>
      <h4>{name}</h4>
      <p>{description}</p>
      {completeToppingsData.map((topping, index) => {
        return <p key={index}>{topping.name}</p>;
      })}
      <FormModal
        formContent={formContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        
      />
    </Box>
  );
}
