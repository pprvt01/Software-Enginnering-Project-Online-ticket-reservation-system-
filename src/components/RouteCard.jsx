export default function RouteCard({ r, onBook }) {
  return (
    <div style={{ padding: 15, border: "1px solid #ccc", marginBottom: 10 }}>
      <h3>{r.from} → {r.to}</h3>
      <p>Price: ₹{r.price}</p>
      <p>Duration: {r.duration}</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
}