import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Server is ready</h1>');
});

app.listen(5002, () => {
  console.log("Server is running on port 5002");
});

//2RFZJhJ7BAvOl3EX