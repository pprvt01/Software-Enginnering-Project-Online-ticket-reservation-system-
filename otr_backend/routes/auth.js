const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req,res)=>{
  try{
    const { name,email,password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const u = new User({ name, email, password: hashed });
    await u.save();
    const token = jwt.sign({ id: u._id, role: u.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: u._id, name: u.name, email: u.email, role: u.role }});
  }catch(err){ res.status(400).json({ error: err.message }) }
});

router.post('/login', async (req,res)=>{
  try{
    const { email, password } = req.body;
    const u = await User.findOne({ email });
    if(!u) return res.status(400).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, u.password);
    if(!ok) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: u._id, role: u.role }, process.env.JWT_SECRET);
    res.json({ token, user: { id: u._id, name: u.name, email: u.email, role: u.role }});
  }catch(err){ res.status(400).json({ error: err.message }) }
});

module.exports = router;
