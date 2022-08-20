import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

app.post("users/accounts", (req: Request, res: Response) => {
  try {
    const { name, CPF, dateOfBirth } = req.body;

    const [day, month, year] = dateOfBirth.split("/");

    const getBirthDate: Date = new Date();

    accounts.push({
      name: name,
      CPF: CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });
  } catch (error) {}
});

app.listen(3003, () => {
  console.log("app is running");
});
