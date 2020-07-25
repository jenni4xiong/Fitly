const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/Fitly';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;