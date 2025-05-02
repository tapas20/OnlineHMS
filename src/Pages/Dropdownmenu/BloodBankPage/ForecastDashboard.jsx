import React, { useState } from 'react';

export default function ForecastDashboard() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! 👋 I am your Blood Stock Forecast Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    const newMessages = [...messages, { sender: 'user', text: input }];

    // Simple AI response logic
    let aiResponse = "I'm here to assist you!";

    if (input.toLowerCase().includes('forecast')) {
      aiResponse = "Blood Stock Forecast: 🩸 Zone 1 - Critical shortage, Zone 3 - Warning.";
    } else if (input.toLowerCase().includes('drive')) {
      aiResponse = "Suggested Drives: 🚑 City Center Drive and University Blood Camp.";
    } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
      aiResponse = "Hi there! Ask me about blood stock forecasts or upcoming donation drives.";
    }

    // AI message
    setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    setInput('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">🧠 AI Forecast Assistant</h2>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-2 bg-gray-100 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200 text-right' : 'bg-green-200 text-left'}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your question..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}
