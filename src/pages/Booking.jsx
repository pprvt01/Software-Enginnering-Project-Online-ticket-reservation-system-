import { useParams, useNavigate } from "react-router-dom";
import { routes } from "../data/routes";
import { useContext, useState } from "react";
import SeatSelector from "../components/SeatSelector";
import { BookingContext } from "../context/BookingContext";

export default function Booking() {
  const { id } = useParams();
  const route = routes.find(r => r.id == id);
  const { setBooking } = useContext(BookingContext);
  const [name, setName] = useState("");
  const [seat, setSeat] = useState(null);
  const nav = useNavigate();

  const handleConfirm = () => {
    setBooking({ name, seat, route });
    nav("/ticket");
  };

  return (
    <div className="container">
      <h2>Booking - {route.from} to {route.to}</h2>

      <label>Your Name</label>
      <input value={name} onChange={e => setName(e.target.value)} />

      <SeatSelector seat={seat} setSeat={setSeat} />

      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}