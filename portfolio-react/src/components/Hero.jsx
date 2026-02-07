import { useState } from 'react';
import profileImg from '../assets/Profile.png';
import profileDarkImg from '../assets/profilesleep.png';
import resumePdf from '../assets/jdresume.pdf';
import { FaDownload, FaTimes } from 'react-icons/fa';

function Hero({ theme }) {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="profile-img-wrapper">
            <img 
              src={theme === 'dark' ? profileDarkImg : profileImg} 
              alt="Jan Jacob D. Driodoco" 
              className="profile-img" 
            />
          </div>
          <p className="eyebrow">BSIT 3rd Year • Web & Mobile Application Development</p>
          <h1>Jan Jacob D. Driodoco</h1>
          <p className="lead">BSIT student focused on building practical, user-friendly software and dependable systems for real-world needs.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#skills">View Tech Stack</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
            <button className="btn btn-outline" onClick={() => setShowResume(true)}>
              <FaDownload /> View Resume
            </button>
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">University</span>
              <span>Laguna State Polytechnic University</span>
            </div>
            <div>
              <span className="meta-label">Email</span>
              <span>Janjacobdriodoco@gmail.com</span>
            </div>
            <div>
              <span className="meta-label">Availability</span>
              <span>Open to internships</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-inner">
            <h3>Quick Highlights</h3>
            <ul>
              <li>Focused on web and mobile development</li>
              <li>Strong foundation in databases & web</li>
              <li>Still Improving my skills</li>
              <li>Open to collaborative team projects</li>
            </ul>
            <div className="mini-cards">
              <div className="mini-card">
                <p className="mini-title">Current Focus</p>
                <p>Web & mobile apps</p>
              </div>
              <div className="mini-card">
                <p className="mini-title">Next Goal</p>
                <p>Real-world deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>Resume Preview</h3>
              <button onClick={() => setShowResume(false)} className="resume-close">
                <FaTimes />
              </button>
            </div>
            <iframe src={resumePdf} className="resume-iframe" title="Resume Preview" />
            <div className="resume-modal-footer">
              <a href={resumePdf} download="JanJacob_Driodoco_Resume.pdf" className="btn btn-primary">
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
