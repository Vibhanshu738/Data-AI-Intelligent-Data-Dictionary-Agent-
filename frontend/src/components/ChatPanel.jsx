import React, { useState } from "react";

const ChatPanel = ({ tableName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col h-[400px]">
      <h3 className="font-bold mb-2">Assistant</h3>
      
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{msg.sender}: </span>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex">
        <input
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about ${tableName}`}
        />
        <button className="bg-blue-500 text-white px-4">Send</button>
      </form>
    </div>
  );
};

export default ChatPanel;