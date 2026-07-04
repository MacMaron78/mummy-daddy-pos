import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LoginPage.css'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Default credentials for Mummy and Daddy
    if (username === 'admin' && password === 'admin123') {
      // Store auth token
      localStorage.setItem('authToken', 'dummy-token')
      localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }))
      navigate('/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Mummy and Daddy POS</h1>
        <p className="subtitle">Point of Sale System</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="info-text">
          <p>Default credentials:</p>
          <p>Username: <strong>admin</strong></p>
          <p>Password: <strong>admin123</strong></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
