import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: row;
  width: 100vw;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  padding: 10px;
  color: #f0f9ff;
  z-index: 1;

  h1 {
    letter-spacing: 0.4rem;
    font-family: 'Audiowide', cursive;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;
