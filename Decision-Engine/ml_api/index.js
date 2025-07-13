const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const input = req.body;

  let options = {
    mode: 'json',
    pythonOptions: ['-u'],
    scriptPath: '../ml_model', // path to your ML model script
    args: [JSON.stringify(input)]
  };

  PythonShell.run('predict.py', options, (err, results) => {
    if (err) {
      console.error('Error in Python script:', err);
      return res.status(500).send({ error: 'Prediction failed' });
    }
    return res.send(results[0]); // { Action: 'restock' }
  });
});

app.listen(port, () => {
  console.log(`ML API server running on http://localhost:${port}`);
});
