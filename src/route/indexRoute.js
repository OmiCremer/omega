const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController");

router.get("/", indexController.index);

router.get("/list", indexController.list);

module.exports = router;
