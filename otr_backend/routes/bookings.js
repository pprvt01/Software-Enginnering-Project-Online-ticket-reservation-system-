const express = require('express');
const Booking = require('../models/Booking');
const Route = require('../models/Route');
const jwt = require('jsonwebtoken');
const { generatePdfBuffer } = require('../utils/generatePdf');
const router = express.Router();

function auth(req,res,next){
  const header = req.headers.authorization;
  if(!header) return res.status(401).json({ error: 'Unauthorized' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch(e) { res.status(401).json({ error: 'Unauthorized' }) }
}

router.post('/create', auth, async (req,res)=>{
  try{
    const { routeId, seatNumbers, amount } = req.body;
    const booking = new Booking({ user: req.user.id, route: routeId, seatNumbers, amount, status: 'PENDING' });
    await booking.save();
    res.json(booking);
  }catch(err){ res.status(400).json({ error: err.message }) }
});

router.get('/mine', auth, async (req,res)=>{
  const bookings = await Booking.find({ user: req.user.id }).populate('route').sort({ createdAt: -1 });
  res.json(bookings);
});

router.post('/:id/cancel', auth, async (req,res)=>{
  const { id } = req.params;
  const bk = await Booking.findOne({ _id: id, user: req.user.id });
  if(!bk) return res.status(404).json({ error: 'Booking not found' });
  bk.status = 'CANCELLED';
  await bk.save();
  res.json(bk);
});

router.get('/:id/ticket', auth, async (req,res)=>{
  const { id } = req.params;
  const bk = await Booking.findById(id).populate('route').populate('user');
  if(!bk) return res.status(404).json({ error: 'Not found' });

  const buffer = await generatePdfBuffer(bk);
  res.setHeader('Content-Type','application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=ticket-${bk._id}.pdf`);
  res.send(buffer);
});

module.exports = router;
