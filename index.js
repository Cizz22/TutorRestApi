import express from "express";
import mongoose from "mongoose";
import productsRoute from "./routes/products.js";
import usersRoute from "./routes/users.js";
import cors from "cors";

const app = express();
const PORT = 8080;

mongoose.connect(
  "mongodb+srv://Cisatra:Olik1234@cluster0.6aosi.mongodb.net/Database?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("open", () => console.log("Database connected"));
db.on("error", (err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors({
  origin:"*"
}));

app.use("/products", productsRoute);
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
