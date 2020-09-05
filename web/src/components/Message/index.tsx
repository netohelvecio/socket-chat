import React from 'react';

import { Container } from './styles';

interface IMessageProps {
  author: string;
  message: string;
  myself: boolean;
}

const Message: React.FC<IMessageProps> = ({ author, message, myself }) => {
  return (
    <Container myself={myself}>
      <span>{author}</span>
      <p>{message}</p>
    </Container>
  );
}

export default Message;