import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getRoomData, leaveRoom } from '../../services/socket';

import { useRoom } from '../../context/Room';
import { PrimaryButton } from '../../components/Buttons';

import { Container, Menu, UsersList, Content, Chat, Message } from './styles';

const Room: React.FC = () => {
  const { room, setRoom } = useRoom();
  const { roomId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getRoomData(room => {
      setRoom(room);
    });
  }, []);

  function handleSingOut() {
    leaveRoom({ roomId });

    getRoomData(room => {
      setRoom(room);
    });

    history.push('/');
  }

  return (
    <Container>
      <Menu>
        <div>
          <h1>{room.name}</h1>

          <p>{room.users?.length} pessoas online</p>

          <UsersList>
            {room.users?.map(user => (
              <li key={user.id} >
                <span>{user.name}</span>

                <img src={`https://api.adorable.io/avatars/100/${user.name}.png`} alt="Helvécio"/>
              </li>
            ))}
          </UsersList>
        </div>

        <PrimaryButton onClick={handleSingOut}>Sair da sala</PrimaryButton>
      </Menu>

      <Content>
        <Chat>
          <Message>
            <span>Helvécio</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe ipsam excepturi minima molestiae.</p>
          </Message>
        </Chat>

        <form>
          <input type="text"/>

          <PrimaryButton>Enviar</PrimaryButton>
        </form>
      </Content>
    </Container>
  );
}

export default Room;