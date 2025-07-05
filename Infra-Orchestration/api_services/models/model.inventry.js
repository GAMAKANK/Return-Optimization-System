const mongoose = require('mongoose');

const warehouse = new mongoose.Schema({
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Warehouse, // Reference to the Darkstore model
        required: true
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch', // Reference to the Batch model
        required: true
    },
    quantity: { // Current quantity of this specific batch in this darkstore
        type: Number,
        required: true,
        min: 0,
        default: 0
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

// Ensure uniqueness: a specific batch can only have one entry per darkstore
darkstoreInventorySchema.index({ darkstoreId: 1, batchId: 1 }, { unique: true });

// Update 'updatedAt' field on save
darkstoreInventorySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('WarehouseInventory', warehouseInventorySchema);
