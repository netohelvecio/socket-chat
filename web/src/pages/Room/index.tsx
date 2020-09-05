import React, { useEffect, FormEvent } from 'react';

import { getRoomData } from '../../services/socket';

import { useRoom } from '../../context/Room';
import { PrimaryButton } from '../../components/Buttons';
import Menu from '../../components/Menu';

import { Container, Content, Chat, Message } from './styles';

const Room: React.FC = () => {
  const { setRoom } = useRoom();

  useEffect(() => {
    getRoomData(room => {
      setRoom(room);
    });
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log('foi');
  }

  return (
    <Container>
      <Menu />

      <Content>
        <Chat>
          <Message>
            <span>Helvécio</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe ipsam excepturi minima molestiae.</p>
          </Message>
        </Chat>

        <form onSubmit={handleSubmit}>
          <input type="text"/>

          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </form>
      </Content>
    </Container>
  );
}

export default Room;