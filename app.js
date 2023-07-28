const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.send(`Hello, Your cookies are: ${JSON.stringify(req.cookies)}`);
});

app.listen(port, () => {
  console.log(`Cookie Test is running on port ${port}`);
});
