import mongoose from "mongoose";

// First we need to create a schema for our products. A schema is a blueprint for a document in a MongoDB collection.

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt and updatedAt fields will be automatically added to the document.
});

// Next, we need to create a model for our products. A model is a class with which we construct documents.
// We create a model called Product with the productSchema schema.
// We need a singular and Capitalized name for the model.
const Product = mongoose.model('Product', productSchema);

export default Product;