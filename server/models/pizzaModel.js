const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pizzasSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  toppings: [
    {
      type: "ObjectId",
      required: true,
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Pizzas", pizzasSchema);
