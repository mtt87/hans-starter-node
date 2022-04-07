const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.post("/api/users", (req, res) => {
  // create a new user
});

app.get("/api/users", (req, res) => {
  // send all users
});

app.get("/api/users/:userId", (req, res) => {
  // send a specific user by ID
});

app.put("/api/users/:userId", (req, res) => {
  // patch an existing user by ID
});

app.delete("/api/users/:userId", (req, res) => {
  // delete an existing user by ID
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
