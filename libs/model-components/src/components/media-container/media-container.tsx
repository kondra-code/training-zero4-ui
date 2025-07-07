import styled from '@emotion/styled';

interface AmbientProps {
  onReset: () => void;
}
export const Ambient = ({ onReset }: AmbientProps) => (
  <MediaContainer onClick={onReset}>ambient screen</MediaContainer>
);

export const Attract = ({ onReset }: AmbientProps) => (
  <MediaContainer onClick={onReset}>attract screen</MediaContainer>
);

const MediaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: white;
  color: black;
  z-index: 100;
  font-size: 40px;
  font-family: sans-serif;
`;
