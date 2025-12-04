import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function Ticket() {
  const { booking } = useContext(BookingContext);

  if (!booking) return <h2>No booking found</h2>;

  return (
    <div className="container">
      <h2>Your Ticket</h2>
      <p>Name: {booking.name}</p>
      <p>Route: {booking.route.from} → {booking.route.to}</p>
      <p>Seat: {booking.seat}</p>
      <p>Price: ₹{booking.route.price}</p>
    </div>
  );
}