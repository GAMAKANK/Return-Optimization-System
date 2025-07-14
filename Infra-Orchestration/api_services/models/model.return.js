const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model,
        required: true,
    },
    reason: {
        type: String,
        trim: true
    },
    conditon: { 
        type: String,
        required: true,
    },
    purchaseDate: {
        type: Number,
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
    batchId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Batch',
        },
    status:{
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
}, );


module.exports = mongoose.model('Return', returnSchema);
