const mongoose = require('mongoose');

// Product Model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sku: { // Stock Keeping Unit - a unique identifier for the product type
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    image: { // URL or path to the product image
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
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
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const Product = mongoose.model('Product', productSchema);

// Batch Model
const batchSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    batchId: {
        type: String,
        required: true,
        unique: true
    },
    manufacturingDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Batch = mongoose.model('Batch', batchSchema);

// Warehouse Model
const warehouseSchema = new mongoose.Schema({
    warehouseId: { // Changed from 'id' to 'warehouseId' for consistency with inventory ref
        type: String,
        required: true,
        unique: true,
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        zipCode: { type: String, trim: true },
        country: { type: String, trim: true }
    },
    contactPhone: {
        type: String,
        trim: true
    },
    contactEmail: {
        type: String,
        trim: true,
        lowercase: true
    },
    capacity: {
        type: Number,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

// Shelf Model
const shelfSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        required: true
    },
    shelfNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    createdAt: { // Added createdAt for completeness
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
shelfSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const Shelf = mongoose.model('Shelf', shelfSchema);


// Warehouse Inventory Model
const warehouseInventorySchema = new mongoose.Schema({
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse', // Corrected reference
        required: true
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        required: true
    },
    shelfId: { // Added shelfId to link inventory to specific shelf
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shelf',
        required: true
    },
    quantity: { // Added quantity to inventory to reflect stock in a warehouse/batch/shelf combination
        type: Number,
        required: true,
        min: 0
    },
    lastStockUpdate: {
        type: Date,
        default: Date.now
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
// Ensure uniqueness: a specific batch on a specific shelf can only have one entry per warehouse
warehouseInventorySchema.index({ warehouseId: 1, batchId: 1, shelfId: 1 }, { unique: true });
warehouseInventorySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const WarehouseInventory = mongoose.model('WarehouseInventory', warehouseInventorySchema);


// Daily Sales Model
const dailySalesSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse', // Corrected ref to 'Warehouse'
        required: true
    },
    date: { // Specific day of the sale
        type: Date,
        required: true
    },
    quantitySold: {
        type: Number,
        required: true,
        min: 0,
        default: 0
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
// Make sure only one record exists per day per product at a warehouse
dailySalesSchema.index({ productId: 1, warehouseId: 1, date: 1 }, { unique: true });
dailySalesSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const DailySales = mongoose.model('DailySales', dailySalesSchema);


// Return Model
const returnSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        required: true, // Batch ID should be required for a return
    },
    reason: {
        type: String,
        trim: true
    },
    condition: { // Corrected 'conditon' to 'condition'
        type: String,
        required: true,
    },
    purchaseDate: {
        type: Date, // Changed to Date type
        required: true,
    },
    customerType: {
        type: String,
        required: true,
    },
    predictedAction: {
        type: String,
        trim: true
    },
    confidence: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
        required: true
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
returnSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
const Return = mongoose.model('Return', returnSchema);


module.exports = {
    Batch,
    DailySales,
    WarehouseInventory,
    Product,
    Return,
    Shelf,
    Warehouse
};