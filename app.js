const express = require('express');
const app = express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(morgan('dev'));
//CONNECT TO MONGOdb
connectDB();
//define routes and API
app.use(express.json({ extended: false }));
app.use('/api/users', require('./routes/userApi'));
app.use('/api/auth', require('./routes/authApi'));
app.use('/api/products', require('./routes/productsApi'));
app.get('/', (req, res) => {
  res.send('My app is up');
});

app.listen(PORT, () => {
  console.log(`server is listenning at port ${PORT}`);
});
