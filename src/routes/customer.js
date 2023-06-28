const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router.get("/", customerController.list);
router.post("/addClient", customerController.save);
router.get("/deleteClientById/:id", customerController.delete);
router.get("/clientById/:id", customerController.edit);
router.post("/update/:id", customerController.update);

module.exports = router;