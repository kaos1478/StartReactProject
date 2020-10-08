import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #040402;
  color: #f0f9ff;
`;

export const Form = styled.form`
  height: 200px;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);

  input {
    height: 30px;
    border-radius: 5px;
  }

  button {
    margin-top: 10px;
    height: 30px;
  }

  textarea {
    margin-top: 10px;
    height: 80px;
  }
`;
