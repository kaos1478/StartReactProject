import React from 'react';
import { Container } from './styles';
import Presentation from '../../components/Presentation';
import Content from '../../components/Content';

const Home: React.FC = () => {
  const title = <h1>LET THE HARD-WORD WITH US!</h1>;

  return (
    <Container>
      <Presentation children={title} />
      <Content />
    </Container>
  );
};

export default Home;
