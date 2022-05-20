import styled from 'styled-components';

export const NotFound = styled.div`
  background-color: rgb(255, 255, 255);
  height: 300px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;

  a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    height: 230px;
    font-size: 1.2em;
  }
`;