import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dev20chandan:6DGbzl95nrxi0Nm3@cluster0.iyv6dpj.mongodb.net/newaApp?retryWrites=true&w=majority');
    console.log('Db Connect');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { connectDB, mongoose };
