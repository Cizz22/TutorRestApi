import User from '../models/User.js';

const getUsers = async(req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({message: error.message});
  }
};

const saveUser = async(req, res) => {
  const user = new User(req.body)

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
};

export { getUsers, saveUser};