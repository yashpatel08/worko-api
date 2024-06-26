const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const auth = require('./middleware/auth');
const userRoutes = require('./routes/userRoutes');

const app=express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(auth);
app.use('/users',userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('MongoDB connected');
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
    });

module.exports = app;