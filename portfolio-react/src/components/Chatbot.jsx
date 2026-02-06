import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim().toLowerCase();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: input.trim() }]);
    setIsLoading(true);

    // Simple FAQ responses
    setTimeout(() => {
      let response = '';
      
      if (userMessage.includes('skill') || userMessage.includes('technology') || userMessage.includes('tech')) {
        response = 'Jan Jacob has skills in Python, Java, PHP, C#, SQL, HTML, CSS, JavaScript, React, Bootstrap, Node.js, MySQL, and Git.';
      } else if (userMessage.includes('project')) {
        response = 'Jan Jacob has worked on two main projects: VMAS (Visitor Management and Analysis System) and CCS Attendance Management System. You can view them in the Projects section!';
      } else if (userMessage.includes('education') || userMessage.includes('university') || userMessage.includes('school')) {
        response = 'Jan Jacob is a 3rd year BSIT student at Laguna State Polytechnic University, specializing in Web and Mobile Application Development.';
      } else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('reach')) {
        response = 'You can contact Jan Jacob at Janjacobdriodoco@gmail.com or check out his GitHub at github.com/Bad-Burn';
      } else if (userMessage.includes('experience') || userMessage.includes('internship')) {
        response = 'Jan Jacob has completed a DICT Certificate in Data Privacy Awareness. He is currently open to internship opportunities!';
      } else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
        response = 'Hello! I can help you learn about Jan Jacob\'s portfolio. Ask me about his skills, projects, education, or contact information!';
      } else {
        response = 'I can help you with information about Jan Jacob\'s skills, projects, education, experience, or contact details. What would you like to know?';
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <button 
        className="chatbot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <FaTimes />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <FaRobot size={40} />
                <p>Hi! I'm here to help you learn about Jan Jacob's portfolio. Ask me anything!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.role}`}>
                <p>{msg.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <p>Typing...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
