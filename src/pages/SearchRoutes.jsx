import { useState } from "react";
import { routes } from "../data/routes";
import CitySelector from "../components/CitySelector";
import RouteCard from "../components/RouteCard";
import { useNavigate } from "react-router-dom";

export default function SearchRoutes() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const nav = useNavigate();

  const results = routes.filter(r => r.from === from && r.to === to);

  return (
    <div className="container">
      <h2>Search Routes</h2>

      <CitySelector label="From:" value={from} onChange={setFrom} />
      <CitySelector label="To:" value={to} onChange={setTo} />

      <br />

      {results.map(r => (
        <RouteCard
          key={r.id}
          r={r}
          onBook={() => nav(`/book/${r.id}`)}
        />
      ))}

      {results.length === 0 && <p>No routes found.</p>}
    </div>
  );
}