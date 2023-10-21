import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; // Import the CSS file

function ThankYou() {
  const { name } = useParams();

  return (
    <section className="ThankYou-container">
      <h1 className="ThankYou-heading">Thank You, {name}!</h1>
      <p className="ThankYou-message">We will get back to you.</p>
    </section>
  );
}

export default ThankYou;
