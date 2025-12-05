import { useEffect, useRef } from 'react';
import './Skills.css';
import './Portfolio.css';
import './CertificateCard.css';
import CertificateCard from './CertificateCard';
import ExploreAllButton from './ExploreAllButton';

const Skills = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for container to be properly rendered
    const initPhysics = () => {
      
      // Get actual container dimensions
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Icon dimensions
      const iconSize = 60;
      
      // Define strict boundaries - icons must stay completely inside
      const boundaries = {
        left: 10,
        right: containerWidth - iconSize - 10,
        top: 10,
        bottom: containerHeight - iconSize - 10
      };
      
      console.log('Container dimensions:', containerWidth, 'x', containerHeight);
      console.log('Boundaries:', boundaries);
      
      const skillElements = skillsRef.current.filter(Boolean);
      
      // Initialize physics for each skill with constant speed
      const baseSpeed = 4; // Constant speed for all icons - increased for more energy
      const skillPhysics = skillElements.map((element) => {
        const x = boundaries.left + Math.random() * (boundaries.right - boundaries.left);
        const y = boundaries.top + Math.random() * (boundaries.bottom - boundaries.top);
        
        // Generate random direction but normalize to constant speed
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * baseSpeed;
        const vy = Math.sin(angle) * baseSpeed;
        
        return {
          element,
          x: x,
          y: y,
          vx: vx,
          vy: vy,
          speed: baseSpeed, // Store original speed for normalization
          radius: iconSize / 2
        };
      });

      const animate = () => {
        skillPhysics.forEach((skill, index) => {
          // Ensure velocity never becomes zero - safety check
          const currentMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
          if (currentMagnitude < 0.1) {
            // If somehow velocity becomes too small, reset to random direction with base speed
            const angle = Math.random() * Math.PI * 2;
            skill.vx = Math.cos(angle) * skill.speed;
            skill.vy = Math.sin(angle) * skill.speed;
          }
          
          // Update position
          skill.x += skill.vx;
          skill.y += skill.vy;

          // Boundary enforcement with speed preservation
          if (skill.x <= boundaries.left) {
            skill.x = boundaries.left;
            skill.vx = Math.abs(skill.vx);
            // Normalize velocity to maintain constant speed
            const currentMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
            if (currentMagnitude > 0) {
              skill.vx = (skill.vx / currentMagnitude) * skill.speed;
              skill.vy = (skill.vy / currentMagnitude) * skill.speed;
            }
          }
          if (skill.x >= boundaries.right) {
            skill.x = boundaries.right;
            skill.vx = -Math.abs(skill.vx);
            // Normalize velocity to maintain constant speed
            const currentMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
            if (currentMagnitude > 0) {
              skill.vx = (skill.vx / currentMagnitude) * skill.speed;
              skill.vy = (skill.vy / currentMagnitude) * skill.speed;
            }
          }
          if (skill.y <= boundaries.top) {
            skill.y = boundaries.top;
            skill.vy = Math.abs(skill.vy);
            // Normalize velocity to maintain constant speed
            const currentMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
            if (currentMagnitude > 0) {
              skill.vx = (skill.vx / currentMagnitude) * skill.speed;
              skill.vy = (skill.vy / currentMagnitude) * skill.speed;
            }
          }
          if (skill.y >= boundaries.bottom) {
            skill.y = boundaries.bottom;
            skill.vy = -Math.abs(skill.vy);
            // Normalize velocity to maintain constant speed
            const currentMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
            if (currentMagnitude > 0) {
              skill.vx = (skill.vx / currentMagnitude) * skill.speed;
              skill.vy = (skill.vy / currentMagnitude) * skill.speed;
            }
          }

          // FORCE boundaries - absolutely no escape
          skill.x = Math.max(boundaries.left, Math.min(boundaries.right, skill.x));
          skill.y = Math.max(boundaries.top, Math.min(boundaries.bottom, skill.y));

          // Check collision with other skills
          skillPhysics.forEach((otherSkill, otherIndex) => {
            if (index !== otherIndex) {
              const dx = skill.x - otherSkill.x;
              const dy = skill.y - otherSkill.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDistance = skill.radius + otherSkill.radius;

              if (distance < minDistance && distance > 0) {
                // Separate overlapping icons
                const angle = Math.atan2(dy, dx);
                const targetX = otherSkill.x + Math.cos(angle) * minDistance;
                const targetY = otherSkill.y + Math.sin(angle) * minDistance;
                
                skill.x = targetX;
                skill.y = targetY;
                
                // Ensure separated icons stay within boundaries
                skill.x = Math.max(boundaries.left, Math.min(boundaries.right, skill.x));
                skill.y = Math.max(boundaries.top, Math.min(boundaries.bottom, skill.y));
                
                // Exchange velocities without speed loss
                const tempVx = skill.vx;
                const tempVy = skill.vy;
                skill.vx = otherSkill.vx;
                skill.vy = otherSkill.vy;
                otherSkill.vx = tempVx;
                otherSkill.vy = tempVy;
                
                // Normalize both velocities to maintain constant speed
                let magnitude1 = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
                let magnitude2 = Math.sqrt(otherSkill.vx * otherSkill.vx + otherSkill.vy * otherSkill.vy);
                
                if (magnitude1 > 0) {
                  skill.vx = (skill.vx / magnitude1) * skill.speed;
                  skill.vy = (skill.vy / magnitude1) * skill.speed;
                }
                
                if (magnitude2 > 0) {
                  otherSkill.vx = (otherSkill.vx / magnitude2) * otherSkill.speed;
                  otherSkill.vy = (otherSkill.vy / magnitude2) * otherSkill.speed;
                }
              }
            }
          });

          // Final speed verification - ensure constant speed is maintained
          const finalMagnitude = Math.sqrt(skill.vx * skill.vx + skill.vy * skill.vy);
          if (Math.abs(finalMagnitude - skill.speed) > 0.01) {
            // Normalize to exact speed if deviation detected
            skill.vx = (skill.vx / finalMagnitude) * skill.speed;
            skill.vy = (skill.vy / finalMagnitude) * skill.speed;
          }

          // Apply position to element
          skill.element.style.transform = `translate(${skill.x}px, ${skill.y}px)`;
        });

        requestAnimationFrame(animate);
      };

      animate();
      
      return skillPhysics;
    };

    // Initialize after a short delay to ensure container is rendered
    const timer = setTimeout(initPhysics, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const skills = [
    {
      name: 'Power BI',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="Power BI" className="skill-icon" style={{filter: 'brightness(0) saturate(100%) invert(77%) sepia(48%) saturate(1234%) hue-rotate(359deg) brightness(98%) contrast(93%)'}} />
      )
    },
    {
      name: 'Python',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
      )
    },
    {
      name: 'MySQL',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-icon" />
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-icon" />
      )
    },
    {
      name: 'n8n',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#EA4B71" d="M11.5429 0C11.2714 0 11.0286 0.1714 10.9429 0.4286L7.8 10.2857C7.7143 10.5429 7.8857 10.8 8.1429 10.8857L17.9143 13.9714C18.1714 14.0571 18.4286 13.8857 18.5143 13.6286L21.6571 3.7714C21.7429 3.5143 21.5714 3.2571 21.3143 3.1714L11.5429 0ZM2.4857 10.1143C2.2286 10.0286 1.9714 10.2 1.8857 10.4571L0.0857 16.2286C0 16.4857 0.1714 16.7429 0.4286 16.8286L10.2 19.9143C10.4571 20 10.7143 19.8286 10.8 19.5714L12.6 13.8C12.6857 13.5429 12.5143 13.2857 12.2571 13.2L2.4857 10.1143ZM13.7143 13.7143C13.4571 13.6286 13.2 13.8 13.1143 14.0571L10.0286 23.8286C9.9429 24.0857 10.1143 24.3429 10.3714 24.4286L20.1429 27.5143C20.4 27.6 20.6571 27.4286 20.7429 27.1714L23.8286 17.4C23.9143 17.1429 23.7429 16.8857 23.4857 16.8L13.7143 13.7143Z"/>
        </svg>
      )
    },
    {
      name: 'Jira',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#0052CC" d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.97 4.35 4.35 4.35V2.84A.84.84 0 0021.16 2H11.53zM6.77 6.8c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.97 4.35 4.35 4.35V7.64a.84.84 0 00-.84-.84H6.77zM2 11.6c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.97 4.35 4.35 4.35v-9.56a.84.84 0 00-.84-.84H2z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-icon" />
      )
    },
    {
      name: 'GitHub',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-icon" />
      )
    },
    {
      name: 'VS Code',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="skill-icon" />
      )
    },
    {
      name: 'Postman',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#FF6C37" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"/>
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.078 6.078 0 006.283 2.9 5.952 5.952 0 003.524.003 6.065 6.065 0 0010.274-2.165 5.985 5.985 0 003.998-2.9 6.046 6.046 0 00-.743-7.097l.008-.003z"/>
        </svg>
      )
    },
    {
      name: 'Tableau',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#E97627" d="M11.654 1.5l-.05.006-.05.006v2.058l-.696.001-.696.001v.696l.001.696h.695l.695.001v2.058l.05.006.05.006.05-.006.05-.006V4.958l.695-.001.695-.001v-.696l-.001-.696h-.694l-.695-.001V1.506l-.05-.006-.05-.006zm8.165 4.662l-.05.006-.05.006v1.371l-.464.001-.464.001v.464l.001.464h.463l.463.001v1.371l.05.006.05.006.05-.006.05-.006V8.475l.463-.001.463-.001v-.464l-.001-.464h-.462l-.463-.001V6.174l-.05-.006-.05-.006z"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="skill-icon" />
      )
    },
    {
      name: 'Google Gemini',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#8E75B2" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.58Q21.51 12 24 12q-2.49 0-4.68-.93-2.19-.96-3.81-2.58T12.93 4.68Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81t-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.93 2.19.96 3.81 2.58t2.55 3.81z"/>
        </svg>
      )
    },
    {
      name: 'Jupyter',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" className="skill-icon" />
      )
    },
    {
      name: 'Google Colab',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#F9AB00" d="M16.9414 4.9757a7.033 7.033 0 0 0-9.8829 0 7.033 7.033 0 0 0 0 9.8829 7.033 7.033 0 0 0 9.8829 0 7.033 7.033 0 0 0 0-9.8829zM12 17.0142a5.0142 5.0142 0 1 1 0-10.0284 5.0142 5.0142 0 0 1 0 10.0284z"/>
          <path fill="#F9AB00" d="M8.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
      )
    },
    {
      name: 'PyCharm',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#000000" d="M0 0v24h24V0H0zm7.031 3h9.938v1.5H7.031V3zm0 3h6.938v1.5H7.031V6zm0 3h4.938v1.5H7.031V9zm0 3h2.938v1.5H7.031V12z"/>
          <path fill="#21D789" d="M7.031 15h9.938v1.5H7.031V15z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Excel',
      icon: (
        <svg viewBox="0 0 24 24" className="skill-icon">
          <path fill="#217346" d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H7.5v3.75zm0-5.25V7.5H7.5v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"/>
        </svg>
      )
    },
    {
      name: 'Anaconda',
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" alt="Anaconda" className="skill-icon" />
      )
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="underline"></div>
        <div className="skills-container" ref={containerRef}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              ref={el => skillsRef.current[index] = el}
              className="floating-skill physics-skill"
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div className="certificate-section">
          <h2 className="section-title centered">Certificates</h2>
          <div className="underline centered"></div>
          <div className="certificates-grid">
            <CertificateCard
              title="Introduction to Internet of Things"
              description="Completed a 12-week IIT-led course covering IoT architecture, sensors, communication models, and real-world applications. Demonstrated strong understanding through assignments and a proctored exam with an overall elite score."
              image="/images/IOT.jpeg"
              link="https://drive.google.com/file/d/1rQ80t11G3fb5Zjh2wMgroZtkztD-LOBe/view?usp=sharing"
            />
            <CertificateCard
              title="Data Analysis and Visualization Foundations"
              description="Gained hands-on skills in data analysis, Excel-based reporting, and creating interactive dashboards using IBM Cognos Analytics. Built visualizations like treemaps, scatter charts, histograms, and pivot tables to interpret complex datasets."
              image="/images/DAV.jpeg"
              link="https://drive.google.com/file/d/1B7qcrsH0lpVQMrDLtL_STcbeI_uK5mmc/view?usp=sharing"
            />
            <CertificateCard
              title="Generative AI For Data Analyst"
              description="Mastered generative AI fundamentals and tools such as DALL·E, Stable Diffusion, and ChatGPT, along with prompt-engineering techniques. Learned to apply AI models for data insights, automation, and enhanced analytics workflows."
              image="/images/GENai.jpeg"
              link="https://drive.google.com/file/d/1sgQJmO-rqiTpF-rU0SqB0JnqDHTS2u9m/view?usp=sharing"
            />
          </div>
          
          <div className="explore-all-button-container">
            <ExploreAllButton link="https://drive.google.com/drive/folders/1q9qvo4HW5FzaaheYlysjKRz9D9h209Ph?usp=sharing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
