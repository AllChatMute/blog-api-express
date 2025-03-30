require("dotenv").config();
const express = require("express");
const postsRouter = require("./routes/posts");

const app = express();

//Middleware connections
app.use(express.json());

//Routes connections
app.use("/posts", postsRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}, http://localhost:${PORT}/`);
});
