import { useState } from "react";
import {
  Box,
  InputLabel,
  Button,
  Paper,
  Typography,
  TextField,
} from "@mui/material";

import { FormModal } from "../../Components";
import { api } from "../../api";
import ingredientImg from "../../assets/ingredients.jpeg";

export default function ToppingCard({ name, description, toppingId }) {
  const [toppingName, setToppingName] = useState(name);
  const [toppingDescription, setToppingDescription] = useState(description);
  const [modalOpen, setModalOpen] = useState(false);

  const formContent = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="body1">Topping Item</Typography>
        <TextField
          type="text"
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
        ></TextField>

        <Button variant="contained" onClick={editTopping}>
          Update
        </Button>
        <Button variant="contained" onClick={deleteTopping}>
          Delete
        </Button>
      </Box>
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
      console.log("Delete Error:", err);
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
    <Paper
      onClick={() => setModalOpen(true)}
      elevation={5}
      sx={{
        display: "flex",
        // flexDirection: { xs: "row", md: "column" },
        flexDirection: "column",
        // justifyContent: "space-between",
        alignItems: "center",
        width: { xs: 1, lg: "23%" },
        py: 4,
        px: 4,
        my: 2,
        borderRadius: "8px",
        "&:hover": {
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <img
          src={ingredientImg}
          alt=""
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />

        <Typography variant="h4" sx={{ mt: 4 }}>
          {name}
        </Typography>
        <Typography sx={{ my: 2 }}>{description}</Typography>
      </Box>

      <FormModal
        formContent={formContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </Paper>
  );
}
