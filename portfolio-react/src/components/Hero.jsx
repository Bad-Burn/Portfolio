import profileImg from '../assets/Profile.png';
import profileDarkImg from '../assets/profilesleep.png';

function Hero({ theme }) {
  return (
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
  );
}

export default Hero;
