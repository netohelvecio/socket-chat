import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;
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
      width: 12.6rem;
      height: 4rem;
      margin-left: 0.8rem;
      border-radius: 1.2rem;
    }
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  width: 100%;
  height: 100vh;
  overflow: auto;

  padding-right: 1.4rem;

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
