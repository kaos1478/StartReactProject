import React from 'react';

import { Container } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <div id="how">
        <h2>HOW IT WORKS?</h2>
        <br />
        <span>
          You alread tried do a pentest in a wifi network? its take alot of time
          and a high stress in you pc! So... We have great computational power
          without being used, why you dont send your file (.cap or .hccapx) and
          we wil try to break it?
        </span>
      </div>
      <div id="files">
        <h2>SOME FILES RECEIVED</h2>
        <br />
        <div id="info">
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Send</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teste.cap</td>
                <td>08/10/2020 14:55</td>
                <td>Processing</td>
              </tr>
            </tbody>
          </table>
          <form>
            <input id="file" name="file" type="file" />
            <input id="send" name="send" type="submit" />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Content;
