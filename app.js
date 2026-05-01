import express from "express";
import userRoute from "./src/routes/userRoute.js";

const app = express();

// middleware
app.use(express.json()); //allow app to read the Json data from the request

// use routes
app.use("/api", userRoute);

// run server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
