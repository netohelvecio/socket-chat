import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IFieldContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input: React.FC<IFieldContainerProps> = ({ label, id, ...props }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </Container>
  );
}
