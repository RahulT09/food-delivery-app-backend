require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/db/db");

const port = process.env.PORT;

connectToDB();

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
