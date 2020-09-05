import styled from 'styled-components';

export const PrimaryButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: 0;
  border-radius: 1.6rem;
  background-color: ${props => props.theme.colors.greenDark};

  color: ${props => props.theme.colors.textBase};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;

  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.greenDarkHover};
  }
`;

export const SecondaryButtonStyled = styled(PrimaryButtonStyled)`
  background-color: ${props => props.theme.colors.ghostWhite};
  color: ${props => props.theme.colors.greenDark};

  &:hover {
    opacity: 0.9;
    background-color: ${props => props.theme.colors.ghostWhite};
  }
`;
