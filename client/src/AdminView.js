// client/src/AdminView.js
import React, { useEffect, useState } from "react";

function AdminView() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/career")
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Form Submissions</h2>
      {entries.map((entry, index) => (
        <div key={index} style={{ border: "1px solid gray", marginBottom: "1rem", padding: "1rem" }}>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Age:</strong> {entry.age}</p>
          <p><strong>Education:</strong> {entry.education}</p>
          <p><strong>Interests:</strong> {entry.interests}</p>
          <p><strong>Location:</strong> {entry.location}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminView;
