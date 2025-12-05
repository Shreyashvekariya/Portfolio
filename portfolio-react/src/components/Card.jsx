import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="wrap_card">
        <div className="card">
          <div className="content">
            <span className="card-text">Data Analyst</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <span className="card-text">Business Analyst</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <span className="card-text">Data Scientist</span>
          </div>
        </div>
        <svg style={{visibility: 'hidden', width: 0, height: 0}}>
          <defs>
            <linearGradient id="gradient-full" x1="0%" y1="0%" x2="120%" y2="120%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff00" />
            </linearGradient>
            <linearGradient id="gradient-half" x1="-50%" y1="-50%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff00" />
            </linearGradient>
          </defs>
        </svg>
        <div className="lines">
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrap_card {
    position: relative;
    overflow: hidden;
    width: var(--w-wrap-card);
    height: calc(var(--h-card) / 1.25);
    display: flex;
    align-items: center;
    justify-content: center;
    --w-card: 220px;
    --h-card: 300px;
    --rotate-card: 15deg;
    --insetX-card: 40px;
    --t-card: calc(var(--insetX-card) * 1.25);
    --w-wrap-card: calc(var(--w-card) + calc(calc(var(--w-card) / 2) * 2));
  }

  .content {
    background-color: rgba(15, 15, 15, 0.7);
    overflow: hidden;
    position: relative;
    width: calc(100% - calc(var(--pd) * 2));
    height: calc(100% - calc(var(--pd) * 2));
    border-radius: calc(var(--round) - var(--pd));
    border: 1px solid rgba(212, 165, 116, 0.2);
  }

  .card-text {
    font-size: 2.0rem;
    font-weight: 600;
    line-height: 1.3;
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 50% 0 0 50%;
    transform: translate(-50%, -50%);
    color: #E8E5E0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    text-shadow: 0 2px 10px rgba(15, 15, 15, 0.5);
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.5px;
  }

  .card:nth-child(1) {
    --delay: 4.3s;
  }

  .card:nth-child(2) {
    --delay: 7.3s;
  }

  .card:nth-child(3) {
    --delay: 10.3s;
  }

  @keyframes opacity {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    animation: rotating 9s cubic-bezier(0.75, 0, 0, 1.01) infinite 0s;
    border-radius: var(--round);
    background: var(--bg);
    order: var(--order);
    width: var(--w-card);
    height: var(--h-card);
    z-index: var(--z1);
    top: var(--t1);
    left: var(--l1);
    right: var(--r1);
    transform: var(--trans1);
    --pd: 4px;
    --round: 16px;
    --x1: var(--insetX-card);
    --x2: calc(var(--w-wrap-card) - calc(var(--w-card) + var(--insetX-card)));
    --to-left: rotate(calc(var(--rotate-card) * -1));
    --to-center: calc(var(--w-card) / 2);
    --to-right: rotate(calc(var(--rotate-card) * 1));
  }

  .card:nth-child(1) {
    --order: 2;
    --bg: radial-gradient(circle, #D4A574 0%, rgba(212, 165, 116, 0.8) 50%, rgba(212, 165, 116, 0.6) 100%);
    --z1: 2;
    --t1: 0;
    --l1: var(--to-center);
    --r1: var(--to-center);
    --trans1: rotate(calc(var(--rotate-card) * 0));
    --z2: 0;
    --t2: var(--t-card);
    --l2: var(--x1);
    --r2: var(--x2);
    --trans2: var(--to-left);
    --z3: 0;
    --t3: var(--t-card);
    --l3: var(--x2);
    --r3: var(--x1);
    --trans3: var(--to-right);
  }

  .card:nth-child(2) {
    --order: 3;
    --bg: linear-gradient(135deg, #0f0f0f 0%, rgba(15, 15, 15, 0.95) 50%, rgba(212, 165, 116, 0.2) 100%);
    --z1: 0;
    --t1: var(--t-card);
    --l1: var(--x2);
    --r1: var(--x1);
    --trans1: var(--to-right);
    --z2: 2;
    --t2: 0;
    --l2: var(--to-center);
    --r2: var(--to-center);
    --trans2: rotate(calc(var(--rotate-card) * 0));
    --z3: 0;
    --t3: var(--t-card);
    --l3: var(--x1);
    --r3: var(--x2);
    --trans3: var(--to-left);
  }

  .card:nth-child(3) {
    --order: 1;
    --bg: linear-gradient(135deg, #E8E5E0 0%, rgba(232, 229, 224, 0.9) 50%, rgba(212, 165, 116, 0.7) 100%);
    --z1: 0;
    --t1: var(--t-card);
    --l1: var(--x1);
    --r1: var(--x2);
    --trans1: var(--to-left);
    --z2: 0;
    --t2: var(--t-card);
    --l2: var(--x2);
    --r2: var(--x1);
    --trans2: var(--to-right);
    --z3: 2;
    --t3: 0;
    --l3: var(--to-center);
    --r3: var(--to-center);
    --trans3: rotate(calc(var(--rotate-card) * 0));
  }

  @keyframes rotating {
    0%, 99.99% {
      z-index: var(--z1);
      top: var(--t1);
      left: var(--l1);
      right: var(--r1);
      transform: var(--trans1);
    }
    33.33% {
      z-index: var(--z2);
      top: var(--t2);
      left: var(--l2);
      right: var(--r2);
      transform: var(--trans2);
    }
    66.66% {
      z-index: var(--z3);
      top: var(--t3);
      left: var(--l3);
      right: var(--r3);
      transform: var(--trans3);
    }
  }

  .lines {
    position: absolute;
    inset: auto 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
  }

  .lines::after {
    content: "";
    width: 100%;
    height: 0px;
    position: absolute;
    z-index: 2;
    inset: 0;
    --mask-bg: #e8e8e8;
    background: var(--mask-bg);
    mask-image: radial-gradient(50% 200px at top, transparent 20%, var(--mask-bg));
  }

  .line {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line::before,
  .line::after {
    content: "";
    position: absolute;
    inset: auto;
    background: linear-gradient(to right, var(--gradient-a-line, #0000), var(--gradient-b-line, #0000), var(--gradient-c-line, #0000));
    filter: var(--blur-line);
    width: var(--w-line);
    height: var(--h-line);
  }

  .line:nth-child(1)::before {
    --blur-line: blur(4px);
    --w-line: 100%;
    --h-line: 5px;
    --gradient-b-line: #D4A574;
  }

  .line:nth-child(1)::after {
    --w-line: 100%;
    --h-line: 1px;
    --gradient-b-line: #D4A574;
  }

  .line:nth-child(2)::before {
    --blur-line: blur(4px);
    --w-line: 50%;
    --h-line: 5px;
    --gradient-b-line: rgba(212, 165, 116, 0.7);
  }

  .line:nth-child(2)::after {
    --w-line: 50%;
    --h-line: 1px;
    --gradient-b-line: rgba(212, 165, 116, 0.9);
  }
`;

export default Card;
