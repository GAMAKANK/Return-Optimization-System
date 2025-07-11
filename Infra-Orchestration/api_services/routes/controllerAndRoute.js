const express = require('express');
const { Batch, Product, Warehouse, WarehouseInventory, Shelf, Return, DailySales } = require('../models/model.js'); // Destructure all models

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
                name: batch.productId?.name, // Added nullish coalescing for safety
                sku: batch.productId?.sku,
                category: batch.productId?.category,
                price: batch.productId?.price,
                image: batch.productId?.image
            }
        }));

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching products with batches:", error);
        res.status(500).json({ error: 'Failed to fetch products with batches' });
    }
});

// POST /api/products
router.post('/api/products', async (req, res) => {
    try {
        const productData = req.body;

        const newProduct = new Product({
            name: productData.name,
            sku: productData.sku,
            category: productData.category,
            price: productData.price,
            image: productData.image
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// POST /api/warehouse
router.post('/api/warehouse', async (req, res) => {
    try {
        const warehouseData = req.body;

        const newWarehouse = new Warehouse({
            warehouseId: warehouseData.warehouseId, // Changed from id to warehouseId
            address: {
                street: warehouseData.address.street,
                city: warehouseData.address.city,
                state: warehouseData.address.state,
                zipCode: warehouseData.address.zipCode,
                country: warehouseData.address.country
            },
            location: {
                type: 'Point',
                coordinates: [warehouseData.location.longitude, warehouseData.location.latitude]
            },
            contactPhone: warehouseData.contactPhone,
            contactEmail: warehouseData.contactEmail,
            capacity: warehouseData.capacity
        });

        await newWarehouse.save();
        res.status(201).json({ message: 'Warehouse created successfully', warehouse: newWarehouse });
    } catch (error) {
        console.error("Error creating warehouse:", error);
        res.status(500).json({ error: 'Failed to create warehouse' });
    }
});

// POST /api/batch
router.post('/api/batch', async (req, res) => {
    try {
        const batchData = req.body;
        const startDate = new Date('2022/01/01');
        const endDate = new Date('2025/01/01');

        const startTimestamp = startDate.getTime();
        const endTimestamp = endDate.getTime();

        const randomTimeStamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
        const randomDate = new Date(randomTimeStamp);

        const minQuantity = Math.ceil(20);
        const maxQuantity = Math.floor(100);
        const randomQuantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;

        const newBatch = new Batch({
            productId: batchData.productId,
            batchId: batchData.batchId,
            manufacturingDate: randomDate,
            // Assuming expiryDate is also randomly generated or can be left out if not required by client
            expiryDate: new Date(randomDate.getTime() + (365 * 24 * 60 * 60 * 1000)), // 1 year expiry
            quantity: randomQuantity
        });

        await newBatch.save();
        res.status(201).json({ message: 'Batch created successfully', batch: newBatch });
    } catch (error) {
        console.error("Error creating batch:", error);
        res.status(500).json({ error: 'Failed to create batch' });
    }
});

// POST /api/shelf
router.post('/api/shelf', async (req, res) => {
    try {
        const shelfData = req.body;

        const minQuantity = Math.ceil(20);
        const maxQuantity = Math.floor(80);
        const randomQuantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;

        const newShelf = new Shelf({
            productId: shelfData.productId,
            batchId: shelfData.batchId,
            shelfNumber: shelfData.shelfNumber,
            quantity: randomQuantity
        });
        await newShelf.save();
        res.status(201).json({ message: 'Shelf created successfully', shelf: newShelf }); // Corrected response
    } catch (error) { // Changed 'e' to 'error' for consistency
        console.error("Error creating shelf:", error);
        res.status(500).json({ error: 'Failed to create shelf' }); // Changed status to 500 for server error
    }
});


// POST /api/inventory
router.post('/api/inventory', async (req, res) => {
    try {
        const inventoryData = req.body; // Changed from req.data to req.body

        const newInventory = new WarehouseInventory({
            warehouseId: inventoryData.warehouseId,
            batchId: inventoryData.batchId,
            shelfId: inventoryData.shelfId, // Added shelfId
            quantity: inventoryData.quantity // Added quantity
        });
        await newInventory.save();
        res.status(201).json({ message: 'Inventory created successfully', inventory: newInventory });
    } catch (error) {
        console.error("Error creating inventory:", error);
        res.status(500).json({ // Changed status to 500 for server error
            message: "Failed to create inventory",
            error: error.message
        });
    }
});


// POST /api/returns
router.post('/api/returns', async (req, res) => { // Added /api to the route
    try {
        const returnData = req.body;

        const newReturn = new Return({
            productId: returnData.productId,
            batchId: returnData.batchId,
            reason: returnData.reason,
            condition: returnData.condition, // Corrected 'conditon' to 'condition'
            purchaseDate: returnData.purchaseDate,
            customerType: returnData.customerType,
            predictedAction: returnData.predictedAction,
            confidence: returnData.confidence,
            status: 'pending'
        });

        await newReturn.save();
        res.status(201).json({ message: 'Return created successfully', return: newReturn });
    } catch (error) {
        console.error("Error creating return:", error);
        res.status(500).json({ error: 'Failed to create return' });
    }
});

// GET /api/warehouse/:warehouseId/products
router.get('/api/warehouse/:warehouseId/products', async (req, res) => { // Added /api to the route
    try {
        const { warehouseId } = req.params; // Destructure warehouseId

        const inventory = await WarehouseInventory.find({ warehouseId })
            .populate({
                path: 'shelfId', // Populate shelf using shelfId
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

        if (inventory.length === 0) {
            return res.status(404).json({ message: 'No products found for this warehouse.' });
        }

        const results = inventory.map(entry => {
            const shelf = entry.shelfId;
            return {
                shelfNumber: shelf?.shelfNumber,
                quantityInShelf: shelf?.quantity, // Quantity on the shelf
                quantityInWarehouseInventory: entry.quantity, // Quantity specific to this warehouse inventory entry
                batchId: shelf?.batchId?.batchId,
                manufacturingDate: shelf?.batchId?.manufacturingDate,
                expiryDate: shelf?.batchId?.expiryDate,
                product: {
                    name: shelf?.productId?.name,
                    sku: shelf?.productId?.sku,
                    category: shelf?.productId?.category,
                    price: shelf?.productId?.price
                }
            };
        });

        res.status(200).json(results);
    } catch (err) {
        console.error("Error fetching warehouse products:", err);
        res.status(500).json({ error: 'Failed to fetch warehouse products' });
    }
});


// GET /api/shelf/:shelfNumber/products
router.get('/api/shelf/:shelfNumber/products', async (req, res) => { // Added /api to the route
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
        console.error("Error fetching shelf products:", err);
        res.status(500).json({ error: 'Failed to fetch shelf products' });
    }
});



//GET /api/allbatches
router.get('/api/allbatches', async (req, res) => { // Added /api to the route
    try {
        const batches = await Batch.find()
            .populate('productId')  // Populate the 'productId' field
            .lean();    // Use lean() for better performance
        const result = batches.map(batch => ({
            batchId: batch.batchId, 
            manufacturingDate: batch.manufacturingDate,
            expiryDate: batch.expiryDate, 
            quantity: batch.quantity,
            product: { 
                name: batch.productId?.name,
                sku: batch.productId?.sku,
                category: batch.productId?.category,
                price: batch.productId?.price,
                image: batch.productId?.image
            }
        }));
        res.status(200).json(result);
    } catch (err) {
        console.error("Error fetching all batches:", err);
        res.status(500).json({ error: 'Failed to fetch all batches' });
    }
});

// POST /api/mock-full-data
// This route creates a full set of interconnected data (Product, Batch, Warehouse, Shelf, Inventory, DailySales)
router.post('/api/mock-full-data', async (req, res) => {
    try {
        // 1. Create a Product
        const productData = {
            name: req.body.name,
            sku: req.body.sku,
            price: req.body.price,
            image: req.body.image,
        };
        const newProduct = new Product(productData);
        await newProduct.save();

        // 2. Create a Batch for the product
        const manufacturingDate = new Date();
        const expiryDate = new Date(manufacturingDate.getFullYear() + 1, manufacturingDate.getMonth(), manufacturingDate.getDate()); // 1 year expiry
        const batchQuantity = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random quantity between 100 and 500

        const batchData = {
            productId: newProduct._id,
            batchId: `BATCH-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            manufacturingDate: manufacturingDate,
            expiryDate: expiryDate,
            quantity: batchQuantity
        };
        const newBatch = new Batch(batchData);
        await newBatch.save();

        // 3. Create a Warehouse
        const warehouseData = {
            warehouseId: `WH-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            address: {
                street: '123 Mock St',
                city: 'Mockville',
                state: 'MK',
                zipCode: '12345',
                country: 'USA'
            },
            contactPhone: '555-123-4567',
            contactEmail: 'mock@warehouse.com',
            capacity: 10000
        };
        const newWarehouse = new Warehouse(warehouseData);
        await newWarehouse.save();

        // 4. Create a Shelf in the warehouse
        const shelfQuantity = Math.floor(Math.random() * (batchQuantity / 2)) + 1; // Half of batch quantity
        const shelfData = {
            productId: newProduct._id,
            batchId: newBatch._id,
            shelfNumber: `SHELF-${Date.now()}-${Math.floor(Math.random() * 100)}`,
            quantity: shelfQuantity
        };
        const newShelf = new Shelf(shelfData);
        await newShelf.save();

        // 5. Create Warehouse Inventory linking warehouse, batch, and shelf
        const inventoryQuantity = shelfQuantity; // Assuming quantity in inventory equals quantity on shelf
        const newWarehouseInventory = new WarehouseInventory({
            warehouseId: newWarehouse._id,
            batchId: newBatch._id,
            shelfId: newShelf._id,
            quantity: inventoryQuantity
        });
        await newWarehouseInventory.save();

        // 6. Create Mock Daily Sales
        const salesDate = new Date();
        const quantitySold = Math.floor(Math.random() * (shelfQuantity / 4)) + 1; // Sell a quarter of shelf quantity
        const newDailySales = new DailySales({
            productId: newProduct._id,
            warehouseId: newWarehouse._id,
            date: salesDate,
            quantitySold: quantitySold
        });
        await newDailySales.save();

        res.status(201).json({
            message: 'Full mock data created successfully!',
            product: newProduct,
            batch: newBatch,
            warehouse: newWarehouse,
            shelf: newShelf,
            warehouseInventory: newWarehouseInventory,
            dailySales: newDailySales
        });

    } catch (error) {
        console.error("Error creating full mock data:", error);
        res.status(500).json({ error: 'Failed to create full mock data', details: error.message });
    }
});


module.exports = router;