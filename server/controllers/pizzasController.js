const Pizzas = require("../models/pizzaModel");

module.exports = {
  // Get list of pizzas and their toppings
  getPizzas: async (req, res) => {
    try {
      const pizzas = await Pizzas.find();
      res.status(200).json(pizzas);
    } catch (err) {
      console.log("Get Pizza Error: ", err);
    }
  },
  // Create a new pizza
  createPizza: async (req, res) => {
    const addNewPizza = async () => {
      const newPizza = await Pizzas.create({
        name: req.body.name,
        description: req.body.description,
        toppings: req.body.toppings,
      });
      res.status(200).json(newPizza);
    };
    try {
      Pizzas.findOne({ name: req.body.name }).then((pizza) => {
        if (pizza) {
          res.status(409).send("Duplicate pizza");
        } else {
          addNewPizza();
        }
      });
    } catch (err) {
      console.log("Create Pizza Error: ", err);
    }

    // TODO: Add validation to not allow pizzas with the same toppings
    // try {
    //   // Check if the pizza name is duplicated
    //   const existingPizza = await Pizzas.findOne({ name: req.body.name });
    //   if (existingPizza) {
    //     return res.status(409).send("Duplicate pizza");
    //   }

    //   // Check if any other pizza already has the same toppings
    //   const existingToppings = await Pizzas.find({
    //     toppings: { $all: req.body.toppings },
    //   });

    //   if (existingToppings.length > 0) {
    //     return res
    //       .status(409)
    //       .send("One or more toppings already used by another pizza");
    //   }

    //   // If no duplicates found, create the new pizza
    //   const newPizza = await Pizzas.create({
    //     name: req.body.name,
    //     description: req.body.description,
    //     toppings: req.body.toppings,
    //   });
    //   return res.status(200).json(newPizza);
    // } catch (err) {
    //   console.log("Create Pizza Error: ", err);
    //   return res.status(500).send("Internal Server Error");
    // }
  },

  // Update an existing pizza
  updatePizza: async (req, res) => {
    try {
      const result = await Pizzas.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      )
        .then((updatedPizza) => {})
        .catch((err) => console.log("error updating pizza: ", err));
      res.json(result);
    } catch (err) {
      console.log("Update pizza Error", err);
    }
  },
  // Delete an existing pizza
  deletePizza: async (req, res) => {
    try {
      let pizza = await Pizzas.findById({ _id: req.params.id });

      // Delete post from db
      await Pizzas.deleteOne({ _id: req.params.id });
      res.send("Pizza deleted");
    } catch (err) {
      console.log("deletePizza", err);
    }
  },
};
