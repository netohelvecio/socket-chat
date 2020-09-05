import React, { useEffect, FormEvent } from 'react';

import { getRoomData } from '../../services/socket';

import { useRoom } from '../../context/Room';
import { PrimaryButton } from '../../components/Buttons';
import Menu from '../../components/Menu';
import Message from '../../components/Message';

import { Container, Content, Chat } from './styles';

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
          <Message myself author="Helvécio" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit totam enim excepturi nostrum veritatis et iusto nihil nobis." />
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