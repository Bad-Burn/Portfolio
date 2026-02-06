import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

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

  return (
    <section id="about" className="section reveal" ref={sectionRef}>
      <div className="section-title">
        <p className="eyebrow">About</p>
        <h2>Professional Snapshot</h2>
      </div>
      <div className="about-grid">
        <div className="card">
          <h3>Summary</h3>
          <p>I am a BSIT student specializing in web and mobile application development. I enjoy translating requirements into clean, user-friendly software and collaborating to deliver practical solutions.</p>
        </div>
        <div className="card">
          <h3>Education</h3>
          <p><strong>Bachelor of Science in Information Technology</strong><br />Laguna State Polytechnic University • BSIT 3rd Year</p>
          <p>Track: Web and Mobile Application Development.</p>
        </div>
        <div className="card">
          <h3>Career Goals</h3>
          <p>To grow as a software developer and contribute to full-stack systems, mobile applications, and real-world deployments.</p>
        </div>
        <div className="card">
          <h3>Skills Overview</h3>
          <p>Strong in problem-solving, system analysis, and UI prototyping. Familiar with Git workflows and collaborative development.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
