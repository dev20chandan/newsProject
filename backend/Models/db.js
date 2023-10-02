const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect('mongodb+srv://dev20chandan:jmsR4Gp7nc5JFq5T@cluster0.iyv6dpj.mongodb.net/test?retryWrites=true&w=majority');
  console.log('Db Connect');
}

module.exports = {
  connectDB,
  mongoose, // Optionally export mongoose as well if you need it elsewhere
};
