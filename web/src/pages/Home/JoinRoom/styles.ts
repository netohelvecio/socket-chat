import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 12.4rem;

  button {
    margin-top: 3.6rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom:  3.6rem;

  h3 {
    font-size: 2.6rem;
  }

  svg {
    cursor: pointer;
  }
`;