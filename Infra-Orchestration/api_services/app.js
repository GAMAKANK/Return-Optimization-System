const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/controllerAndRoute.js'); // Assuming this path is correct

const app = express();
app.use(cors());
app.use(express.json());

// --- MODIFIED SECTION ---
// Define an async function to start the server
const startServer = async () => {
    try {
        // Await the database connection before starting the server
        await connectDB();
        console.log('Database connection established. Starting server...');

        // Use your API routes
        app.use('/', routes); // This is correct from previous step

        app.get('/', (req, res) => {
            res.send('Hello Api is running ... ');
        });

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

    } catch (err) {
        console.error('Failed to start server due to database connection error:', err);
        process.exit(1); // Exit the process if DB connection fails
    }
};


const connectDB = async () => {
    try {
       const connectionInstances = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`database connected !! \nconnection instance: ${connectionInstances.connection.host}`);
       
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};


// Call the async function to start the server
startServer();