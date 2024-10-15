const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello ');
});

app.get('/api', (req, res) => {
    res.send('World!');
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});