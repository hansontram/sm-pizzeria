import React from "react";
import { MainContainer } from "../../Components";

export default function Pizzas({ pizzaData, toppingsData }) {
  return (
    <MainContainer title="Pizza Dashboard">
      {pizzaData.map((pizza, index) => {
        const {name, description} = pizza;
        return (
          <div key={index}>
            <p>Name: ${name}</p>
            <p>{description}</p>

            {/* TODO: Render toppings data - loop through data to match ids : 
            fetch topping, fetch pizza, set to state, create function to iterste over toppings data of a pizza, convert all ids to respective topping data */}
          </div>
        );
      })}
    </MainContainer>
  );
}
