const PDFDocument = require('pdfkit');

function generatePdfBuffer(booking){
  return new Promise((resolve, reject)=>{
    const doc = new PDFDocument({ size: 'A4' });
    const buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', ()=> {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    doc.fontSize(20).text('Ticket Confirmation', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(`Booking ID: ${booking._id}`);
    doc.text(`Name: ${booking.user?.name || booking.user}`);
    doc.text(`Route: ${booking.route.from} → ${booking.route.to}`);
    doc.text(`Date/Time: ${booking.route.datetime}`);
    doc.text(`Seats: ${booking.seatNumbers.join(', ')}`);
    doc.text(`Amount: ₹${booking.amount}`);
    doc.text(`Status: ${booking.status}`);
    doc.end();
  });
}

module.exports = { generatePdfBuffer };
