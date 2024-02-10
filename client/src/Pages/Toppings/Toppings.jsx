import { React, useState } from "react";
import { TextField, Typography, Button, Box } from "@mui/material";
import { MainContainer, FormModal, ToppingCard } from "../../Components";
import { api } from "../../api";

export default function Toppings({ toppingsData, role }) {
  const [toppingName, setToppingName] = useState("");
  const [toppingDescription, setToppingDescription] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const formContent = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="body1">Topping Name</Typography>
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setToppingName(e.target.value)}
          value={toppingName}
        />
        <Typography variant="body1">Description</Typography>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setToppingDescription(e.target.value)}
          value={toppingDescription}
        />
        <Button variant="contained" onClick={addNewTopping}>
          Submit
        </Button>
      </Box>
    );
  };

  const addNewTopping = async () => {
    const body = {
      name: toppingName,
      description: toppingDescription,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/toppings`, options);
    try {
      // response.json().then((newPizza) => console.log(newPizza));

      // TODO: trigger refetch
      if (response.ok) {
        setModalOpen(false);
        setToppingName("");
        setToppingDescription("");
      }
    } catch (err) {}
  };

  if (role === "chef") {
    return (
      <MainContainer title="Topping dashboard">
        <div>
          <p>Topping dashboard is only accessible to owner</p>
        </div>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer title="Toppings Dashboard">
        <FormModal
          formContent={formContent}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          buttonText="Add Topping"
        />

        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {toppingsData.map((topping, index) => {
            const { name, description, _id } = topping;
            return (
              <ToppingCard
                key={index}
                toppingId={_id}
                name={name}
                description={description}
              />
              // <div key={id}>
              //   <p>Item: {name}</p>
              //   <p>Description: {description}</p>
              // </div>
            );
          })}
        </Box>
      </MainContainer>
    );
  }
}
