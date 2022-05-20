import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 4fr 0.58fr;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;