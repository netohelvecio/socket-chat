import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  padding: 1rem 1.4rem;

  background-color: ${props => props.theme.colors.cardStatus};
  border-radius: 1.6rem;
  font-size: 1.3rem;

  & + & {
    margin-top: 1.2rem;
  }
`;
