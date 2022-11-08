const express = require("express");
const { dbConnect } = require("./config/db");
const router = require("./routes/routes");
const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use("", router);
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
  });
});
dbConnect();

// Listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
