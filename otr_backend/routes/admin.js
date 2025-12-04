const express = require('express');
const Route = require('../models/Route');
const jwt = require('jsonwebtoken');
const router = express.Router();

function adminAuth(req,res,next){
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({ error: 'Unauthorized' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if(payload.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    req.user = payload;
    next();
  } catch(e) { res.status(401).json({ error: 'Unauthorized' }) }
}

router.post('/route', adminAuth, async (req,res)=>{
  try{
    const r = new Route(req.body);
    await r.save();
    res.json(r);
  }catch(e){ res.status(400).json({ error: e.message }) }
});

router.get('/routes', adminAuth, async (req,res)=>{
  const list = await Route.find().sort({ datetime: 1 });
  res.json(list);
});

module.exports = router;
