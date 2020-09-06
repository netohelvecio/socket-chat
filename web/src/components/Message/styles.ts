import styled from 'styled-components';

interface IContainerProps {
  myself: boolean;
}

export const Container = styled.div<IContainerProps>`
  padding: 1.2rem;
  border-radius: 1.2rem;
  align-self: ${props => props.myself ? 'flex-end' : 'flex-start'};

  background-color: ${props => props.myself ? props.theme.colors.greyGreenDark : props.theme.colors.greenDark};

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
