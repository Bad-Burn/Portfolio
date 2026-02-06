import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import vmas1 from '../assets/VMAS/Screenshot 2026-02-06 094712.png';
import vmas2 from '../assets/VMAS/Screenshot 2026-02-06 094806.png';
import vmas3 from '../assets/VMAS/Screenshot 2026-02-06 094840.png';
import vmas4 from '../assets/VMAS/Screenshot 2026-02-06 094859.png';
import vmas5 from '../assets/VMAS/Screenshot 2026-02-06 094942.png';
import ams1 from '../assets/AMS/Screenshot 2026-02-06 095310.png';
import ams2 from '../assets/AMS/Screenshot 2026-02-06 095408.png';
import ams3 from '../assets/AMS/Screenshot 2026-02-06 095441.png';
import ams4 from '../assets/AMS/Screenshot 2026-02-06 095502.png';
import ams5 from '../assets/AMS/Screenshot 2026-02-06 095520.png';
import ams6 from '../assets/AMS/Screenshot 2026-02-06 095547.png';
import ams7 from '../assets/AMS/Screenshot 2026-02-06 095621.png';
import ams8 from '../assets/AMS/Screenshot 2026-02-06 095708.png';

function Projects() {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const projects = [
    {
      title: 'Visitor Management and Analysis System (VMAS)',
      description: 'The Visitor Management and Analysis System (VMAS) is a modern digital solution designed to simplify, secure, and optimize the process of managing visitors in office environments.',
      tech: ['Python', 'HTML/CSS', 'MySQL'],
      github: 'https://github.com/Bad-Burn/VMAS.git',
      demo: null,
      images: [vmas1, vmas2, vmas3, vmas4, vmas5]
    },
    {
      title: 'CCS Attendance Management System',
      description: 'The College Computer Study (CCS) Attendance Management System is a web-based application that streamlines the attendance tracking process for students.',
      tech: ['PHP', 'HTML/CSS', 'MySQL'],
      github: 'https://github.com/Bad-Burn/AttendanceManagementSystem.git',
      demo: null,
      images: [ams1, ams2, ams3, ams4, ams5, ams6, ams7, ams8]
    },
    {
      title: 'Project Title 3',
      description: 'Brief description of your project and what technologies you used.',
      tech: ['Python', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/yourusername/project',
      demo: 'https://project-demo.com',
      images: []
    }
  ];

  const openImageModal = (images) => {
    setSelectedImage(images);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="projects" className="section reveal" ref={sectionRef}>
        <div className="section-title">
          <p className="eyebrow">Projects</p>
          <h2>Featured Work</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.images && project.images.length > 0 && (
                <div className="project-image" onClick={() => openImageModal(project.images)}>
                  <img src={project.images[0]} alt={project.title} />
                </div>
              )}
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="badge" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.images && project.images.length > 0 && (
                  <button onClick={() => openImageModal(project.images)} className="btn btn-outline">
                    <FaImage /> Preview
                  </button>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && selectedImage.length > 0 && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
            <div className="image-gallery">
              {selectedImage.map((img, i) => (
                <img key={i} src={img} alt={`Screenshot ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
