import mongoose from 'mongoose';

// Create schema
const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Users', User);