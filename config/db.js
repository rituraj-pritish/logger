const mongoose = require('mongoose');
const keys = require('./keys');

module.exports = async () => {
  try {
    await mongoose.connect(keys.mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('db connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
