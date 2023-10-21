import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function LetsTalk(props) {
  const [formData, setFormData] = useState({ name: '', number: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/thank-you/${formData.name}`);

    if (props.onSubmit) {
      props.onSubmit(formData);
    }
  };

  return (
    <section className="lets-talk-container">
      <h1>Let's Talk</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default LetsTalk;
