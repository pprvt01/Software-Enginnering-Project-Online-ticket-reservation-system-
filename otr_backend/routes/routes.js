const express = require('express');
const RouteModel = require('../models/Route');
const router = express.Router();

router.get('/', async (req,res) => {
  const all = await RouteModel.find().sort({ datetime: 1 });
  res.json(all);
});

router.get('/search', async (req,res) => {
  const { from, to, date } = req.query;
  const q = {};
  if(from) q.from = { $regex: new RegExp(from, 'i') };
  if(to) q.to = { $regex: new RegExp(to, 'i') };
  if(date) {
    const start = new Date(date); start.setHours(0,0,0,0);
    const end = new Date(date); end.setHours(23,59,59,999);
    q.datetime = { $gte: start, $lte: end };
  }
  const results = await RouteModel.find(q).sort({ datetime: 1 });
  res.json(results);
});

module.exports = router;
