import { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", purpose: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://your-backend-url.com/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, time: new Date().toISOString() }),
    });
    setSubmitted(true);
  };

  if (submitted) return <h1>Welcome! You've been checked in.</h1>;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Check In</h1>
      <input placeholder="Your Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Company" onChange={(e) => setForm({ ...form, company: e.target.value })} />
      <input placeholder="Purpose of Visit" required onChange={(e) => setForm({ ...form, purpose: e.target.value })} />
      <button type="submit">Check In</button>
    </form>
  );
}
