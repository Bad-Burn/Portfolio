import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Make sure the backend is running.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="section reveal" ref={sectionRef}>
      <div className="section-title">
        <p className="eyebrow">Contact</p>
        <h2>Let's Connect</h2>
        <p className="section-subtitle">Have a question or want to work together? Feel free to reach out!</p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h4>Email</h4>
            <a href="mailto:Janjacobdriodoco@gmail.com">Janjacobdriodoco@gmail.com</a>
          </div>
          
          <div className="contact-info-card">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h4>GitHub</h4>
            <a href="https://github.com/Bad-Burn" target="_blank" rel="noopener noreferrer">github.com/Bad-Burn</a>
          </div>
          
          <div className="contact-info-card">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/janjacob-driodoco-a52065397" target="_blank" rel="noopener noreferrer">Jan Jacob Driodoco</a>
          </div>
          
          <div className="contact-info-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h4>Location</h4>
            <p>Laguna, Philippines</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
          <h3>Send a Message</h3>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tell me about your opportunity" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            <FaPaperPlane /> Send Message
          </button>
          <p className="form-note">This form is a front-end demo. Connect it to Formspree or your backend.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
