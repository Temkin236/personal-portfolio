import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Array<{from: 'user'|'bot', text: string}>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input) return;
    const userMsg = input;
    setMessages(m => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/rag/query', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: userMsg }) });
      const j = await res.json();
      setMessages(m => [...m, { from: 'bot', text: j.answer || 'No answer available.' }]);
    } catch (err) {
      setMessages(m => [...m, { from: 'bot', text: 'Error fetching answer' }]);
    } finally { setLoading(false); }
  }

  return (
    <div className="w-full max-w-md border rounded-lg p-4 bg-white">
      <div className="h-64 overflow-auto mb-3">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.from==='user'?'text-right':'text-left'}`}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 p-2 border rounded" />
        <button onClick={send} className="px-4 py-2 bg-slate-900 text-white rounded">{loading ? '...' : 'Send'}</button>
      </div>
    </div>
  );
};

export default ChatWidget;
