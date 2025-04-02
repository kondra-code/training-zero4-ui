import styled from '@emotion/styled';

export const Loading = () => {
  return <LoadingContainer></LoadingContainer>;
};

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: black;
  color: white;
  z-index: 100;
  font-size: 40px;
  font-family: sans-serif;
  background-image: url('/assets/background/loading.png');
`;
