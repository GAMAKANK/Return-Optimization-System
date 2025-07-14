const Batch = require('./model.batch');
const Product = require('./model.product');
const Warehouse = require('./model.warehouse');
const WarehouseInventory = require('./model.inventory');
const Shelf = require('./model.shelf');
const Return = require('./model.return');
const DailySales = require('./model.dailySales');
const mongoose = require('mongoose');

module.exports = {
  Batch,
  Product,
  Warehouse,
  WarehouseInventory,
  Shelf,
  Return,
  DailySales
};
