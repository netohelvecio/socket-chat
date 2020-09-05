import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;
`;

export const Menu = styled.menu`
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

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  padding: 1rem 1.4rem;
  padding-right: 0;

  form {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 0.8rem;
    padding-right: 1.4rem;

    input {
      background: none;
      border: 0.05rem solid ${props => props.theme.colors.ghostWhite};
      border-radius: 1.2rem;

      width: 100%;
      height: 4rem;
      padding: 0 1.4rem;

      color: ${props => props.theme.colors.ghostWhite};
      font-size: 1.6rem;
      font-weight: 400;
    }

    button {
      width: 8.6rem;
      height: 4rem;
      margin-left: 0.8rem;
      border-radius: 1.2rem;
    }
  }
`;

export const Chat = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar{
    background-color: none;
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.greenDark};
    border-radius: 1.4rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.greenDarkHover};
  }

  &::-webkit-scrollbar-button {
    display:none
  }

`;

export const Message = styled.div`
  padding: 1.2rem;
  border-radius: 1.2rem;

  background-color: ${props => props.theme.colors.greenDark};

  max-width: 40%;

  span {
    font-size: 1.4rem;
  }

  p {
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 0.8rem;
  }

  & + & {
    margin-top: 1.2rem;
  }
`;


