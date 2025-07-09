
const express = require('express');

const cors = require('cors');
require('dotenv').config();
const {connectDB} = require('../db/connnect.db.js');

const routes = require('./routes/controllerAndRoute.js');



const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
connectDB();


app.use('/api/routes', routes);


app.get('/',(req,res) => {
    res.send('Hello  Api is running ... ');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
