import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  to: string;
  description: string;
}

const HeaderItem: React.FC<Props> = ({ to, description }: Props) => {
  return (
    <Container>
      <Link to={to}>{description.toUpperCase()}</Link>
    </Container>
  );
};

export default HeaderItem;
