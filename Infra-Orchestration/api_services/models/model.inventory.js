const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseInventorySchema = new Schema({
    warehouseId: {
        type: Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: true
    },
    batchId: {
        type: Schema.Types.ObjectId,
        ref: 'Batch',
        required: true
    },
    shelfId: {
        type: Schema.Types.ObjectId,
        ref: 'Shelf',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// 🔥 Move this line **after** defining the schema
warehouseInventorySchema.index({ warehouseId: 1, batchId: 1 }, { unique: true });

const WarehouseInventory = mongoose.model('WarehouseInventory', warehouseInventorySchema);

module.exports = WarehouseInventory;
