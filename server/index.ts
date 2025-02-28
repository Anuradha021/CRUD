import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import  UserModel  from "./models/Users";
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

app.post("/createUser", async (req: Request, res: Response) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Error creating user" });
  }
});

app.get("/getUser/:id", async (req: Request<{ id: string }>, res: Response):Promise<any> => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Invalid user ID" });
  }
});

app.put("/updateUser/:id", async (req: Request<{ id: string }>, res: Response):Promise<any> => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: "Invalid user ID" });
  }
});

app.delete("/deleteUser/:id", async (req: Request<{ id: string }>, res: Response):Promise<any> => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid user ID" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});