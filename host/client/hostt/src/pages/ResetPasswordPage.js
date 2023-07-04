import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/reset-password', { resetToken, newPassword });
      setMessage(response.data.message);
      setNewPassword('');
      setResetToken('');
    } catch (error) {
      console.error(error);
      setMessage('Password reset failed');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleResetPassword}>
        <input type="text" value={resetToken} onChange={(e) => setResetToken(e.target.value)} placeholder="Reset Token" required />
        <br />
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
