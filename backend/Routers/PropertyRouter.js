const ProperyRouter = require("express").Router();
const {
  getAllProperty,
  getOneProperty,
} = require("../Controllers/PropertyController");
const ensureAuthenticated = require("../Middlewares/Auth");

ProperyRouter.get("/property", ensureAuthenticated, getAllProperty);
ProperyRouter.get("/getProperty/:id", ensureAuthenticated, getOneProperty);

module.exports = ProperyRouter;
