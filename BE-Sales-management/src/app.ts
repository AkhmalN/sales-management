import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "@app/routes/user.route";
import productRoutes from "@app/routes/product.route";

dotenv.config();

const PORT = process.env.PORT || 8090;
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.disable("etag");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.listen(PORT, () => {
  console.log("App is running on port :", PORT);
});
