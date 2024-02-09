import React from "react";
import { MainContainer } from "../../Components";

export default function Toppings({ toppingsData, role}) {
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
        {toppingsData.map((topping, id) => {
          const { name, description } = topping;
          return (
            <div key={id}>
              <p>Item: {name}</p>
              <p>Description: {description}</p>
            </div>
          );
        })}
      </MainContainer>
    );
  }
}
