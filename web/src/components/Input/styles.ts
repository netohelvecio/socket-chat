import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: ${props => props.theme.colors.ghostWhite};
    font-size: 1.4rem;
    font-weight: 600;
    
  }

  input {
    background: none;
    border: 0.05rem solid ${props => props.theme.colors.ghostWhite};
    border-radius: 1.2rem;

    width: 100%;
    height: 4rem;
    padding: 0 1.4rem;
    margin-top: 0.8rem;

    color: ${props => props.theme.colors.ghostWhite};
    font-size: 1.6rem;
    font-weight: 400;
  }

  & + & {
    margin-top: 2.4rem;
  }

`;
