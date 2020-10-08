import React from 'react';
import { Container, Form } from './styles';
import Presentation from '../../components/Presentation';

const Home: React.FC = () => {
  const title = (
    <Form>
      <input placeholder="File Key" type="text" />
      <button>Find</button>
      <textarea disabled>Nothing at this moment</textarea>
    </Form>
  );

  return (
    <Container>
      <Presentation children={title} />
    </Container>
  );
};

export default Home;
