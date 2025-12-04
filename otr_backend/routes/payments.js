const express = require('express');
const Razorpay = require('razorpay');
const Booking = require('../models/Booking');
const router = express.Router();

const razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/create-order', async (req,res)=>{
  try{
    const { amount, bookingId, currency='INR' } = req.body;
    const options = {
      amount: Math.round(amount * 100),
      currency,
      receipt: bookingId
    };
    const order = await razor.orders.create(options);
    await Booking.findByIdAndUpdate(bookingId, { razorpayOrderId: order.id });
    res.json(order);
  }catch(err){ res.status(500).json({ error: err.message }) }
});

router.post('/verify', async (req,res)=>{
  try{
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, bookingId } = req.body;
    const bk = await Booking.findById(bookingId);
    bk.razorpayOrderId = razorpay_order_id;
    bk.razorpayPaymentId = razorpay_payment_id;
    bk.status = 'CONFIRMED';
    await bk.save();
    res.json({ ok: true, booking: bk });
  }catch(err){ res.status(500).json({ error: err.message }) }
});

module.exports = router;
