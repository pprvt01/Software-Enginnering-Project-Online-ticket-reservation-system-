export default function CitySelector({ label, value, onChange }) {
  const cities = ["Mumbai", "Pune", "Delhi", "Agra", "Bengaluru", "Mysuru", "Chennai", "Coimbatore", "Hyderabad", "Vijayawada"];

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="">Select</option>
        {cities.map(c => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
}