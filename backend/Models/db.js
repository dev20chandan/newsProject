import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dev20chandan:jmsR4Gp7nc5JFq5T@cluster0.iyv6dpj.mongodb.net/test?retryWrites=true&w=majority');
    console.log('Db Connect');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { connectDB, mongoose };
