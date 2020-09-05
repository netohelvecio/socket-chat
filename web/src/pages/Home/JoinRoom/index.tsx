import React, { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

import { createOrJoinRoom, getRoomData } from '../../../services/socket';
import api from '../../../services/api';

import { useRoom } from '../../../context/Room';
import { PrimaryButton } from '../../../components/Buttons';
import { Input } from '../../../components/Input';

import { Container, Header } from './styles';

interface IJoinRoomProps {
  setStep(step: number): void;
}

const JoinRoom: React.FC<IJoinRoomProps> = ({ setStep }) => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const { colors } = useContext(ThemeContext);
  const history = useHistory();
  const { setRoom } = useRoom();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      await api.get(`room/${roomId}`);

      createOrJoinRoom({ roomId, userName });

      getRoomData(room => {
        setRoom(room);
      });

      history.push(`/room/${roomId}`);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <FiArrowLeft color={colors.textBase} size={24} onClick={() => setStep(0)} />

        <h3>Entrar sala</h3>
      </Header>

      <form onSubmit={handleSubmit}>
        <Input id="nickname" label="Nickname" value={userName} onChange={event => setUserName(event.target.value)}/>

        <Input id="room-id" label="ID da sala" value={roomId} onChange={event => setRoomId(event.target.value)}/>

        <PrimaryButton type="submit" loading={loading}>Entrar na sala</PrimaryButton>
      </form>

      
    </Container>
  );
}

export default JoinRoom;