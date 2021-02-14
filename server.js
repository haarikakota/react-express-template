//Importing Dependencies
const express = require("express");

//Initializing Dependencies
const app = express();

//Defining constants
const port = 4000;

//Defining Routes
app.get("/api/customers", (req, res, next) => {
  //Step 1: Fetch customers from database/API
  const customers = [
    { id: 1, firstName: "Harika", lastName: "Kota" },
    { id: 2, firstName: "Gopi", lastName: "Srungavarapu" },
    { id: 3, firstName: "Hemanth", lastName: "Kota" },
  ];

  //Step 2: Send back response to the user request
  res.json(customers);
});


//Listen to client requests
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
