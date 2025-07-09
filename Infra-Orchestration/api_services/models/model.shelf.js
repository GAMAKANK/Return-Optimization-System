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
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Shelf', shelfSchema);
