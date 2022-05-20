import styled from 'styled-components';

export const Top = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-top: 15px;
    height: 140px;
    font-size: 1.2em;
  }
`;

export const Middle = styled.div`
  height: 210px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const GridCard = styled.div`
  height: 287px;
  width: 300px;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;