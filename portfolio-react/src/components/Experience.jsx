import { useEffect, useRef } from 'react';
import certPdf from '../assets/DICT cert.pdf';

function Experience() {
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

  const experiences = [
    {
      date: 'Dec 2024',
      title: 'DICT Certificate',
      description: 'Data Privacy Awareness.',
      certificate: certPdf
    }
  ];

  return (
    <section id="experience" className="section reveal" ref={sectionRef}>
      <div className="section-title">
        <p className="eyebrow">Experience</p>
        <h2>Certifications</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">{exp.date}</p>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              {exp.certificate && (
                <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '12px'}}>
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
