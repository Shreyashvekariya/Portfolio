import React from 'react';
import styled from 'styled-components';

const CertificateCard = ({ title, description, image, link }) => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <img src={image} alt={title} className="certificate-image" />
          </div>
          <div className="content">
            <p className="heading">{title}</p>
            <p className="description">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="button">
              <span className="button__icon-wrapper">
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                </svg>
              </span>
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    width: 100%;
    max-width: 650px;
    height: auto;
    aspect-ratio: 1.414 / 1;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background: rgba(15, 15, 15, 0.8);
    border: 1px solid rgba(212, 165, 116, 0.3);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    padding: 10px;
  }

  .certificate-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(135deg, #D4A574 0%, #B8956A 100%);
    color: #0F0F0F;
    padding: 20px;
    line-height: 1.0;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content .heading {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0F0F0F;
    font-family: 'Playfair Display', serif;
    margin-bottom: 10px;
  }

  .card .content .description {
    font-size: 0.9rem;
    color: #0F0F0F;
    opacity: 0.9;
  }

  .card:hover .content {
    transform: translateX(0);
  }

  .card:hover .front-content {
    transform: translateX(-100%);
  }

  .card:hover .certificate-image {
    opacity: 0;
  }

  .button {
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap: 0.5rem;
    background-color: #0F0F0F;
    color: #E8E5E0;
    border-radius: 10rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    padding-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s;
    margin-top: 10px;
    font-size: 0.85rem;
    pointer-events: auto;
    border: 1px solid #0F0F0F;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    color: #0F0F0F;
    background-color: #E8E5E0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
    background-color: #E8E5E0;
    color: #0F0F0F;
    border-color: #0F0F0F;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .button:hover .button__icon-wrapper {
    color: #E8E5E0;
    background-color: #0F0F0F;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }
`;

export default CertificateCard;
