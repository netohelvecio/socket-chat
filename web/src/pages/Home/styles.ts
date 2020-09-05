import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  width: 60%;

  display: flex;
  align-items: center;

  button {
    height: 4.3rem;
    font-size: 1.6rem;

    & + button {
      margin-left: 1.4rem;
    }
  }
`;
