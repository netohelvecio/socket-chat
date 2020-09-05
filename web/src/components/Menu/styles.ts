import styled from 'styled-components';

export const Container = styled.menu`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 26rem;
  padding: 3.2rem 1.8rem;

  border-right: 0.05rem solid ${props => props.theme.colors.ghostWhite};
  background-color: ${props => props.theme.colors.chatBackground};

  div {
    width: 100%;

    h1 {
      font-size: 2.6rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  button {
    height: 4.2rem;
  }
`;

export const UsersList = styled.ul`
  margin-top: 2.4rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.8rem 0;

    img {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
    }

    span {
      font-size: 1.4rem;
    }
  }
`;
