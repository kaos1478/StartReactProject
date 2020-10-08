import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  padding: 5vw;
  text-align: justify;

  #how {
    margin-bottom: 20vh;
  }

  table {
    width: 50%;
    border: 1px solid red;
  }

  table,
  td,
  tr,
  th {
    border: 1px solid gray;
  }

  #info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid white;
    width: 100%;
  }

  #info > form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    border-left: 1px solid white;
  }
`;
