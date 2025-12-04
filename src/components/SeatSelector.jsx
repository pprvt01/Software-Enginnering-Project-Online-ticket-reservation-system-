export default function SeatSelector({ seat, setSeat }) {
  const seats = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h3>Select Seat</h3>
      {seats.map(s => (
        <button
          key={s}
          onClick={() => setSeat(s)}
          style={{
            margin: 5,
            padding: 10,
            background: seat === s ? "green" : "lightgray"
          }}
        >
          Seat {s}
        </button>
      ))}
    </div>
  );
}