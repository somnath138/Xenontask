const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routers/AuthRouter");
const ProductRouter = require("./Routers/ProductRouter");
const PropertyRouter=require('./Routers/PropertyRouter')
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
}); 

app.use(bodyParser.json()); //accepted json format
app.use(cors()); //use to connect fronted usser to server
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);//check maintain  cookies
app.use("/api/v1",PropertyRouter);



app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
