const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    id : {
        type:String,
        required:true,
        unique:true,
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        zipCode: { type: String, trim: true },
        country: { type: String, trim: true }
    },
    location: { // GeoJSON for geographical queries (optional but recommended for location-based services)
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: { // [longitude, latitude]
            type: [Number],
            required: true
        }
    },
    contactPhone: {
        type: String,
        trim: true
    },
    contactEmail: {
        type: String,
        trim: true,
        lowercase: true
    },
    capacity: { // Optional: e.g., total storage volume or number of items it can hold
        type: Number,
        min: 0
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

// Create a 2dsphere index for geospatial queries
warehouseSchema.index({ location: '2dsphere' });

// Update 'updatedAt' field on save
warehouseSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Warehouse', warehouseSchema);