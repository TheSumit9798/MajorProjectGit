import React, { useState, useRef, useEffect } from "react";
// import "../components/AskAI.css";
const AskAI = () => {
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hi Sumit.. \nHow can i help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatboxRef = useRef(null);
  const textareaRef = useRef(null);
  const API_KEY = "AIzaSyAo32Ca7aPHDknNSr1uecLGxjfI_Z4CvTs";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const scrollToBottom = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { type: "outgoing", text: userMessage }]);
    setInput("");
    textareaRef.current.style.height = "auto";

    const thinkingMsg = { type: "incoming", text: "Thinking..." };
    setMessages((prev) => [...prev, thinkingMsg]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
        }),
      });

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.replace(
        /\*\*(.*?)\*\*/g,
        "$1"
      );

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "incoming", text: aiText || "No response." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "incoming", text: err.message, error: true },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="chat_container">
      <div className="robot">
      <img src="/robot.jpg" alt="robot" className="robot-img" />
    </div>
    <div className="chatbot">
      <header>
        <h2>Health-Care : Sumit Kumar</h2>
      </header>
      <ul className="chatbox" ref={chatboxRef}>
        {messages.map((msg, idx) => (
          <li key={idx} className={`chat ${msg.type}`}>
            {msg.type === "incoming" && (
              <span className="material-symbols-outlined">smart_toy</span>
            )}
            <p className={msg.error ? "error" : ""}>{msg.text}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          spellCheck="false"
          required
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={textareaRef}
        ></textarea>
        <span
          id="send-btn"
          className="material-symbols-rounded"
          onClick={handleSend}
        >
          send
        </span>
      </div>
    </div>
    </div>
  );
};

export default AskAI;