import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    interests: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      navigate("/success");
    } else {
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "500px", margin: "auto" }}>
      <h1>YuvaPath 🚀</h1>
      <p>Career Guidance Form</p>

      <form onSubmit={handleSubmit}>
        {/* form inputs */}
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <br /><br />
        <input name="age" placeholder="Your Age" value={formData.age} onChange={handleChange} required />
        <br /><br />
        <input name="education" placeholder="Your Education" value={formData.education} onChange={handleChange} required />
        <br /><br />
        <input name="interests" placeholder="Your Interests" value={formData.interests} onChange={handleChange} required />
        <br /><br />
        <input name="location" placeholder="Your Location" value={formData.location} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
