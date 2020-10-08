import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

const Presentation: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      {children}
      <div id="gradient" />
    </Container>
  );
};

export default Presentation;
