import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/connect.js";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Testing")    
})

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;

try {
  await connectDB(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
  });
} catch (error) {
  console.log(error);
}