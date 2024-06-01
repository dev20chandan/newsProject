import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CREDENTIALS);
    console.log('Db Connect');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { connectDB, mongoose };
