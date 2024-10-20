import express from "express";
const app = express();

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

app.get("/", (req, res) => {
  res.send({ message: "Welcome", users });
});

app.get("/users", (req, res) => {
  res.send(users);
});

// Start Server
app.listen(5001, () => {
  console.log(`Server is running on port ${5001}`);
});
