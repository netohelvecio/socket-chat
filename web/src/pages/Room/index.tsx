import React, { useEffect, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRoomData, sendMessage, socket } from '../../services/socket';

import { useRoom } from '../../context/Room';
import { PrimaryButton } from '../../components/Buttons';
import Menu from '../../components/Menu';
import Message from '../../components/Message';

import { Container, Content, Chat } from './styles';
import { useUser } from '../../context/User';

const Room: React.FC = () => {
  const { room, setRoom } = useRoom();
  const { user } = useUser();
  const [ message, setMessage ] = useState('');
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    getRoomData(room => {
      setRoom(room);
    });
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!message.length) return;

    sendMessage({ author: user, message, roomId });

    setMessage('');

    getRoomData(responseRoom => setRoom(responseRoom));
  }

  return (
    <Container>
      <Menu />

      <Content>
        <Chat>
          {room.messages?.map((message, index) => (
            <Message key={index} myself={message.clientId === socket.id} author={message.author} message={message.message} />
          ))}
        </Chat>

        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={event => setMessage(event.target.value)} />

          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </form>
      </Content>
    </Container>
  );
}

export default Room;