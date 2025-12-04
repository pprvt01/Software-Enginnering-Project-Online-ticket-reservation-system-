import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Online Ticket Reservation System</h1>
      <p>Search and book bus tickets between major Indian cities.</p>
      <Link to="/search">
        <button>Search Routes</button>
      </Link>
    </div>
  );
}
