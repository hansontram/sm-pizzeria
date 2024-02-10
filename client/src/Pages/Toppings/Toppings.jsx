import { React, useState } from "react";
import { Button } from "@mui/material";
import { MainContainer, FormModal, ToppingCard } from "../../Components";
import { api } from "../../api";

export default function Toppings({ toppingsData, role }) {
  const [toppingName, setToppingName] = useState("");
  const [toppingDescription, setToppingDescription] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const formContent = () => {
    return (
      <>
        <label>Topping Name</label>
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

        <Button onClick={addNewTopping}>Submit</Button>
      </>
    );
  };

  const addNewTopping = async () => {
    const body = {
      name: toppingName,
      description: toppingDescription
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
        {toppingsData.map((topping, index) => {
          const { name, description, _id} = topping;
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
        <FormModal
          formContent={formContent}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          buttonText = "Add New Topping"
        />
      </MainContainer>
    );
  }
}
