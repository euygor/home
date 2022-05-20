import styled from 'styled-components';

type Props = {
  isOpen: boolean;
}

export const Toggle = styled.div`
  img {
    display: none;
  }

  @media (max-width: 768px) {
    background-color: rgb(250, 250, 250);
    height: 32px;
    width: 32px;
    border: 2px solid #000;
    border-radius: 5px;
    position: fixed;
    top: 0;
    right: 0;

    img {
      display: block;
    }
  }
`;

export const RightSide = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(250, 250, 250);
  height: 100vh;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    margin-top: 40px;
    position: fixed;
    top: 0;
    right: 0;
    width: 38px;
  }
`;

export const Menu = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 30px;
    height: 30px;
    margin: 5px;
  }

  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;