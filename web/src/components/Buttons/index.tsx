import React, { ButtonHTMLAttributes } from 'react';

import { PrimaryButtonStyled, SecondaryButtonStyled } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const PrimaryButton: React.FC<IButtonProps> = ({ children, loading, ...props }) => {
  return (
    <PrimaryButtonStyled {...props}>
      {loading ? 'Carregando...' : children}
    </PrimaryButtonStyled>
  );
}

export const SecondaryButton: React.FC<IButtonProps> = ({ children, loading, ...props }) => {
  return (
    <SecondaryButtonStyled {...props}>
      {loading ? 'Carregando...' : children}
    </SecondaryButtonStyled>
  );
}
