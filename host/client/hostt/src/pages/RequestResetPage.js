import React, { useState } from 'react';
import axios from 'axios';

const RequestResetPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/request-reset', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Password reset request failed');
    }
  };

  return (
    <div>
      <h1>Request Password Reset</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleRequestReset}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <br />
        <button type="submit">Request Reset</button>
      </form>
    </div>
  );
};

export default RequestResetPage;
