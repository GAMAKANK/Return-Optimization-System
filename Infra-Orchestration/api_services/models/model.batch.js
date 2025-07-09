const mongoose = require('mongoose');

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

module.exports = mongoose.model('Batch', batchSchema);
