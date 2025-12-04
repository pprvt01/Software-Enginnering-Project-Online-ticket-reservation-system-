import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#1976d2", padding: "10px" }}>
      <Link style={{ color: "#fff", marginRight: "15px" }} to="/">Home</Link>
      <Link style={{ color: "#fff" }} to="/search">Search</Link>
    </nav>
  );
}