import React from 'react';

import { Container } from './styles';
import HeaderItem from './HeaderItem';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>WPASEC</h1>
      <ul>
        <HeaderItem to="/" description="Home" />
        <HeaderItem to="/find" description="Find" />
      </ul>
    </Container>
  );
};

export default Header;
