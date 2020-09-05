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

export const RoomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.6rem;

  p {
    font-size: 1.3rem;
  }

  a {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.blue};

    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
