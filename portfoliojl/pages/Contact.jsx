
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'Julio Costaa',
    email: 'Julioleal1404@gmail.com',
    message: '@julio_cdl1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <h1>Entre em Contato</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

