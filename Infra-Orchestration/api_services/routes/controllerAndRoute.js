const express = require('express')
const Batch = require('../models/model.batch.js')
const WarehouseInventory = require('../models/model.warehouse.js')
const Shelf = require('../models/model.shelf.js')
const Return = require('../models/model.return.js')


const router = express.Router();


// GET /api/products-with-batches
router.get('/products-with-batches', async (req, res) => {
    try {
        const batches = await Batch.find()
            .populate('productId')
            .lean();

        const result = batches.map(batch => ({
            batchId: batch.batchId,
            manufacturingDate: batch.manufacturingDate,
            expiryDate: batch.expiryDate,
            quantity: batch.quantity,
            product: {
                name: batch.productId.name,
                sku: batch.productId.sku,
                category: batch.productId.category,
                price: batch.productId.price,
                imageUrl: batch.productId.imageUrl
            }
        }));

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products with batches' });
    }
});

// POST /api/returns
router.post('/returns', async (req, res) => {
    try {
        const returnData = req.body;

        const newReturn = new Return({
            productId: returnData.productId,
            batchId: returnData.batchId,
            reason: returnData.reason,
            conditon: returnData.conditon,
            purchaseDate: returnData.purchaseDate,
            customerType: returnData.customerType,
            predictedAction: returnData.predictedAction,
            confidence: returnData.confidence,
            status: 'pending'
        });

        await newReturn.save();
        res.status(201).json({ message: 'Return created successfully', return: newReturn });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create return' });
    }
});

// GET /api/warehouse/:warehouseId/products
router.get('/warehouse/:warehouseId/products', async (req, res) => {
    try {
        const warehouseId = req.params.warehouseId;

        const inventory = await WarehouseInventory.find({ warehouseId })
            .populate({
                path: 'shelfNumber',
                populate: [
                    {
                        path: 'productId',
                        model: 'Product'
                    },
                    {
                        path: 'batchId',
                        model: 'Batch'
                    }
                ]
            })
            .lean();

        const results = inventory.map(entry => {
            const shelf = entry.shelfNumber;
            return {
                shelfNumber: shelf.shelfNumber,
                quantity: shelf.quantity,
                batchId: shelf.batchId?.batchId,
                manufacturingDate: shelf.batchId?.manufacturingDate,
                expiryDate: shelf.batchId?.expiryDate,
                product: {
                    name: shelf.productId?.name,
                    sku: shelf.productId?.sku,
                    category: shelf.productId?.category,
                    price: shelf.productId?.price
                }
            };
        });

        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch warehouse products' });
    }
});


// GET /api/shelf/:shelfNumber/products
router.get('/shelf/:shelfNumber/products', async (req, res) => {
    try {
        const shelf = await Shelf.findOne({ shelfNumber: req.params.shelfNumber })
            .populate('productId')
            .populate('batchId')
            .lean();

        if (!shelf) {
            return res.status(404).json({ error: 'Shelf not found' });
        }

        const result = {
            shelfNumber: shelf.shelfNumber,
            quantity: shelf.quantity,
            batchId: shelf.batchId?.batchId,
            manufacturingDate: shelf.batchId?.manufacturingDate,
            expiryDate: shelf.batchId?.expiryDate,
            product: {
                name: shelf.productId?.name,
                sku: shelf.productId?.sku,
                category: shelf.productId?.category,
                price: shelf.productId?.price
            }
        };

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch shelf products' });
    }
});



router.post('/inventory/assign', async (req, res) => {
try {
const { productId, batchId, quantityToAdd } = req.body;

if (!productId || !batchId || !quantityToAdd) {
  return res.status(400).json({ error: 'productId, batchId, and quantityToAdd are required.' });
}

// Step 1: Try to find an existing shelf with same product+batch that has capacity
const existingShelf = await Shelf.findOne({
  productId,
  batchId,
  quantity: { $lt: 500 }
});

if (existingShelf) {
  const newQuantity = existingShelf.quantity + quantityToAdd;

  if (newQuantity > 500) {
    return res.status(400).json({ error: 'Cannot exceed shelf capacity (500).' });
  }

  existingShelf.quantity = newQuantity;
  await existingShelf.save();

  // find warehouse for this shelf
  const inventoryLink = await WarehouseInventory.findOne({ shelfNumber: existingShelf.shelfNumber });
  const warehouse = inventoryLink
    ? await Warehouse.findOne({ id: inventoryLink.warehouseId })
    : null;

  return res.status(200).json({
    message: 'Shelf updated successfully',
    shelf: existingShelf,
    warehouse
  });
}

// Step 2: No shelf found, so find an empty shelf to place new product+batch
const emptyShelf = await Shelf.findOne({
  productId: null,
  batchId: null,
  quantity: 0
});

if (!emptyShelf) {
  return res.status(404).json({ error: 'No empty shelf available.' });
}

if (quantityToAdd > 500) {
  return res.status(400).json({ error: 'Cannot place more than 500 units on a shelf.' });
}

emptyShelf.productId = productId;
emptyShelf.batchId = batchId;
emptyShelf.quantity = quantityToAdd;
await emptyShelf.save();

const inventoryLink = await WarehouseInventory.findOne({ shelfNumber: emptyShelf.shelfNumber });
const warehouse = inventoryLink
  ? await Warehouse.findOne({ id: inventoryLink.warehouseId })
  : null;

return res.status(201).json({
  message: 'Shelf created and product placed successfully',
  shelf: emptyShelf,
  warehouse
});
} catch (err) {
console.error('Inventory assign error:', err);
res.status(500).json({ error: 'Server error occurred.' });
}
});

module.exports = router;