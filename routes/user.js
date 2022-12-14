const express = require("express");
const router = express();


const userController = require("../controllers/user");

router.get("/", userController.getUsers);

router.post("/", userController.postUser);

module.exports = router;
