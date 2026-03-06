import React, { useState } from 'react';

const Login: React.FC<{ onLogin: (token: string) => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const j = await res.json();
      if (j.token) onLogin(j.token);
      else alert('Login failed');
    } finally { setLoading(false); }
  }

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Admin Login</h3>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border rounded" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full py-2 bg-slate-900 text-white rounded">{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  );
};

export default Login;
