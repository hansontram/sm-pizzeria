import { useState } from "react";
import { Box, InputLabel, Button } from "@mui/material";
import { FormModal } from "../../Components";
import { api } from "../../api";

export default function ToppingCard({ name, description, toppingId }) {
  const [toppingName, setToppingName] = useState(name);
  const [toppingDescription, setToppingDescription] = useState(description);
  const [modalOpen, setModalOpen] = useState(false);

  const formContent = () => {
    return (
      <>
        <label>Topping Item</label>
        <input
          type="text"
          onChange={(e) => setToppingName(e.target.value)}
          value={toppingName}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          onChange={(e) => setToppingDescription(e.target.value)}
          value={toppingDescription}
        ></textarea>

            <Button onClick={editTopping}>Update</Button> 
            <Button onClick={deleteTopping}>Delete</Button> 
      </>
    );
  };

  const deleteTopping = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/toppings/${toppingId}`, options);

    try {
        // TODO: trigger refetch
      if (response.ok) {
        setModalOpen(false);

      }
    } catch (err) {
        console.log("Delete Error:", err)
    }
  };

  const editTopping = async () => {
    const body = {
      name: toppingName,
      description: toppingDescription,
     
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api}/toppings/${toppingId}`, options);
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

      <FormModal
        formContent={formContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </Box>
  );
}
