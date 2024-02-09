const Toppings = require("../models/toppingsModel");

module.exports = {
  getToppings: async (req, res) => {
    try {
      const toppings = await Toppings.find();
      res.status(200).json(toppings);
    } catch (err) {
      console.log("Get Topping Error: ", err);
    }
  },

  createTopping: async (req, res) => {
    const addNewTopping = async () => {
      const newTopping = await Toppings.create({
        name: req.body.name,
        description: req.body.description,
      });
      res.status(200).json(newTopping);
    };
    try {
      Toppings.findOne({ name: req.body.name }).then((topping) => {
        if (topping) {
          res.status(409).send("Duplicate topping");
        } else {
            addNewTopping()
        }
      });
    } catch (err) {
      console.log("Create Topping Error: ", err);
    }
  },

  updateTopping: async (req, res) => {
    try {
      const result = await Toppings.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      )
        .then((updatedTopping) => {
          console.log(updatedTopping);
        })
        .catch((err) => console.log("Update Topping Error: ", err));
      res.json(result);
    } catch (err) {
      console.log("Update Topping Error:", err);
    }
  },

  deleteTopping: async (req, res) => {
    try {
      // Find topping by id
      let topping = await Toppings.findById({ _id: req.params.id });

      // Delete post from db
      await Toppings.deleteOne({ _id: req.params.id });

      res.send("Topping deleted");
    } catch (err) {
      console.log("Error Delete Topping", err);
    }
  },
};

// TODO: Make sure to not allow duplicate toppings
