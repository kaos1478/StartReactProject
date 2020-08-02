import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
