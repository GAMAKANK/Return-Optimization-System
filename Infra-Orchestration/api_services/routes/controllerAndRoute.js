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

module.exports = router;