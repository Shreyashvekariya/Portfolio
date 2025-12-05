import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, description, image, tags, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <StyledWrapper>
      <article className="article-wrapper" onClick={handleClick}>
        <div className="rounded-lg container-project" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover">
              <svg style={{ color: '#D4A574' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth={2} fill="none" stroke="currentColor">
                <line y2={12} x2={19} y1={12} x1={5} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            {tags && tags.map((tag, index) => (
              <span key={index} className="project-type">• {tag}</span>
            ))}
          </div>
        </div>
      </article>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 100%;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: #E8E5E0;
  }

  .article-wrapper:hover {
    box-shadow: 10px 10px 0 #D4A574, 20px 20px 0 rgba(212, 165, 116, 0.6);
    border-color: #D4A574;
    transform: translate(-20px, -20px);
  }

  .article-wrapper:active {
    box-shadow: none;
    transform: translate(0, 0);
  }

  .types {
    gap: 10px;
    display: flex;
    place-content: flex-start;
    flex-wrap: wrap;
  }

  .rounded-lg {
    border-radius: 10px;
  }

  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg);
    background-color: rgba(212, 165, 116, 0.3);
  }

  .project-info {
    padding-top: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .project-title {
    font-size: 1.5em;
    margin: 0;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #0F0F0F;
  }

  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-type {
    background: rgba(212, 165, 116, 0.3);
    color: #0F0F0F;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
  }

  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-project {
    width: 100%;
    height: 170px;
    background-color: rgba(15, 15, 15, 0.3);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default ProjectCard;
