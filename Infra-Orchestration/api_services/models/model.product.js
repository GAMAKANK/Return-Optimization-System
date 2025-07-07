const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    sku: { // Stock Keeping Unit - a unique identifier for the product type
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: { // Optional: URL for product image
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


model.exports = mongoose.model('Product', productSchema);