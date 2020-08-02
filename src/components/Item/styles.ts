import styled from 'styled-components';

interface Props {
  bgImage: string;
}

export const Container = styled.div<Props>`
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
`;
