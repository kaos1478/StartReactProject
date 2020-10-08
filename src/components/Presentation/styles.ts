import styled from 'styled-components';
import riot from '../../assets/riot.jpg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${riot});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f9ff;
  font-size: 2rem;

  #gradient {
    position: absolute;
    bottom: 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #040402);
    width: 100vw;
    height: 50vh;
  }
`;
