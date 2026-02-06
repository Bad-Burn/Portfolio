import { useEffect, useRef } from 'react';
import { FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMysql, SiCanva } from 'react-icons/si';

function Skills() {
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

  const skills = {
    Languages: [
      { name: 'Java', icon: <FaJava data-icon="java" /> },
      { name: 'Python', icon: <FaPython data-icon="python" /> },
      { name: 'PHP', icon: <FaPhp data-icon="php" /> },
      { name: 'C#', icon: <FaCode data-icon="code" /> },
      { name: 'SQL', icon: <FaDatabase data-icon="database" /> }
    ],
    Frontend: [
      { name: 'HTML', icon: <FaHtml5 data-icon="html" /> },
      { name: 'CSS', icon: <FaCss3Alt data-icon="css" /> },
      { name: 'JavaScript', icon: <FaJs data-icon="js" /> },
      { name: 'Bootstrap', icon: <FaBootstrap data-icon="bootstrap" /> },
      { name: 'React', icon: <FaReact data-icon="react" /> }
    ],
    Backend: [
      { name: 'MySQL', icon: <SiMysql data-icon="mysql" /> },
      { name: 'Node.js', icon: <FaNodeJs data-icon="nodejs" /> }
    ],
    Tools: [
      { name: 'Git', icon: <FaGitAlt data-icon="git" /> },
      { name: 'VS Code', icon: <FaCode data-icon="code" /> },
      { name: 'Canva', icon: <SiCanva data-icon="canva" /> }
    ]
  };

  return (
    <section id="skills" className="section reveal" ref={sectionRef}>
      <div className="section-title">
        <p className="eyebrow">Tech Stack</p>
        <h2>Tools & Technologies</h2>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h4>{category}</h4>
            <div className="badge-row">
              {items.map(skill => (
                <span className="badge" key={skill.name}>
                  <span className="badge-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
