const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/api/decision', async (req, res) => {
  try {
    const mlResponse = await axios.post('http://localhost:5000/predict', req.body);
    res.json({ decision: mlResponse.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

app.listen(port, () => {
  console.log(`✅ Node.js server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('✅ Node.js backend is running');
});
