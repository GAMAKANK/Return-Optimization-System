const mongoose = require('mongoose');

const dailySalesSchema = new mongoose.Schema({
    productId: { // Reference to the product (you can change this to batchId if needed)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Darkstore',
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

// Make sure only one record exists per day per product at a darkstore
dailySalesSchema.index({ productId: 1, darkstoreId: 1, date: 1 }, { unique: true });

dailySalesSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('DailySales', dailySalesSchema);
