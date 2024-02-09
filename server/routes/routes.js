const express = require("express");
const router = express.Router();
const pizzasController = require("../controllers/pizzasController");
const toppingsController = require("../controllers/toppingsController");

// Toppings

router.get("/toppings", toppingsController.getToppings);

router.post("/toppings", toppingsController.createTopping);

router.put("/toppings/:id", toppingsController.updateTopping);

router.delete("/toppings/:id", toppingsController.deleteTopping);

//  Pizzas
router.get("/pizzas", pizzasController.getPizzas);

router.post("/pizzas", pizzasController.createPizza);

router.put("/pizzas/:id", pizzasController.updatePizza);

router.delete("/pizzas/:id", pizzasController.deletePizza);

module.exports = router;
