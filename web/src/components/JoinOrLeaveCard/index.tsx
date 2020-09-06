import React from 'react';

import { Container } from './styles';

interface IJoinedCardProps {
  userName: string;
  status: 'join' | 'leave';
}

const JoinOrLeaveCard: React.FC<IJoinedCardProps> = ({ userName, status }) => {
  return (
    <Container>
      {userName} {status === 'join' ? 'entrou' : 'saiu'}
    </Container>
  );
}

export default JoinOrLeaveCard;