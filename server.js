import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from './routes';
const app = express();

import db from "./models";
db.sequelize.sync();

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Wallet." });
});

app.use('/wallet', routes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
