import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  background: tomato;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    width: 50vw;
    justify-content: space-around;
  }
`;
