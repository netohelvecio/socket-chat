import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { leaveRoom, getRoomData } from '../../services/socket';

import { PrimaryButton } from '../Buttons';

import { Container, UsersList } from './styles';
import { useRoom } from '../../context/Room';

const Menu: React.FC = () => {
  const { room, setRoom } = useRoom();
  const { roomId } = useParams();
  const history = useHistory();

  function handleSingOut() {
    leaveRoom({ roomId });

    getRoomData(room => {
      setRoom(room);
    });

    history.push('/');
  }

  return (
    <Container>
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
    </Container>
  );
}

export default Menu;