import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age:{
    type:Number
  },
  city:{
    type:String
  },
  state:{
    type:String
  },
  address:{
    type:String
  },
  userName: {
    type: String,
    required: false,
    // unique: false,
  },
  email: {
    type: String,
    required: false,
    // unique: false,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
  },

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
