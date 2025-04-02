import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

interface CountdownRingProps {
  duration: number; // Duration in seconds
  size?: number; // Optional size for the ring
  strokeWidth?: number; // Optional stroke width
  cancel: () => void;
}

export const CountdownRing: React.FC<CountdownRingProps> = ({
  duration,
  size = 300,
  strokeWidth = 10,
  cancel,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = (size - strokeWidth) / 2; // Calculate radius based on size and stroke width
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Calculate the stroke-dashoffset based on time left
  const strokeDashoffset =
    circumference - ((timeLeft - 1) / duration) * circumference;

  return (
    <CircleContainer>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3498db"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <Message>Are you there?</Message>
      <CountdownText>
        <Button onPointerDown={cancel}>{`Yes (${timeLeft})`}</Button>
      </CountdownText>
    </CircleContainer>
  );
};
const CircleContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CountdownText = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  width: 100px;
  height: 50px;
  z-index: 100;
`;
export default CountdownRing;
