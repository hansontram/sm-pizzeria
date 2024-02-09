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
