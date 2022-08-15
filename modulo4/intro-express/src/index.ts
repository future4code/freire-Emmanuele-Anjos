import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//exercício 1

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

//exercíco 2

type user = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

//exercício 3

const userList: user[] = [
  {
    id: 1,
    name: "Joe Goldberg",
    phone: "(xx)xxxx-xxxx",
    email: "joe@gold.com",
    website: "totally-not-a-stalker.com",
  },
  {
    id: 2,
    name: "",
    phone: "",
    email: "",
    website: "",
  },
  {
    id: 3,
    name: "",
    phone: "",
    email: "",
    website: "",
  },
];
