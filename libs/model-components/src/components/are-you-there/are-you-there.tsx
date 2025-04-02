/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import { CountdownRing } from './countdown-ring';

// TypeScript types for props
interface ModalProps {
  show: boolean;
  onClose: () => void;
  countdown: number;
}

export const AreYouThere: FC<ModalProps> = ({ show, onClose, countdown }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CountdownRing
          duration={countdown}
          size={300}
          strokeWidth={10}
          cancel={onClose}
        />
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root') as HTMLElement // Type assertion for the portal target
  );
};

AreYouThere.displayName = 'AreYouThere';

// Styled components using Emotion
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #94b8e7;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
