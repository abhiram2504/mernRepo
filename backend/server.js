import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/products.model.js";

// We use this to get the MONGO_URI frmo teh .env
dotenv.config();

const app = express();
app.use(express.json()); //This will allow us to parse JSON data in the body of the request.
//SQL vs NoSQL databases
/*
SQL databases are relational databases, which means that they store data in tables and rows.
NoSQL databases are non-relational databases, which means that they store data in collections and each collection has documents.
*/

app.get("/api/products", async (req, res) => {
    try{
        const products = await Product.find({}); //This will find all the products in the database.
        res.status(200).json(products); //This will return the products in the response.
    }catch(error){
        res.status(500).json({ message: "Server Error" });
    }
});

// Now creating endpoint to create product models
app.post('/api/products', async (req, res) => {
    const product = req.body; //This will get the product data from the request body.
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProd = new Product(product)
    
    try{
        await newProd.save(); //This will save the product to the database. We use await because the save() method is an async function.
        res.status(201).json({sucess: true, data: newProd}); //This will return a success message and the product data.
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// This is used to update some fields in teh databset
app.put("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = req.body; //this is the name image etc
});

app.delete("/api/produts/:id", async (req, res) => {
    const {id} = req.id;
    const product = await Product.findById(req.params.id); //This will find the product by its ID.
    if(product) {
        await product.remove(); //This will remove the product from the database.
        res.json({ message: "Product removed" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});


app.listen(5002, () => {
    //connectDB is an async function, so we need to call it with await and we export it so we can import it here.
    connectDB();
    console.log("Server is running on http://localhost:5002");
});