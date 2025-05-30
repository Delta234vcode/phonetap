const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let userState = {};

app.post("/tap", (req, res) => {
  const userId = req.body.userId || "anon";
  userState[userId] = userState[userId] || { coins: 0 };
  userState[userId].coins += 1;

  res.json({
    success: true,
    message: "Tapped!",
    coins: userState[userId].coins
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});