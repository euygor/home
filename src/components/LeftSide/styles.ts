import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

export const Toggle = styled.div`
  img {
    display: none;
  }

  @media (max-width: 768px) {
    background-color: rgb(250, 250, 250);
    height: 32px;
    width: 32px;
    border: 2px solid rgb(0, 0, 0);
    border-radius: 5px;
    position: fixed;

    img {
      display: block;
    }
  }
`;

export const LeftSide = styled.div<Props>`
  background-color: rgb(250, 250, 250);
  height: 100vh;

  hr {
    margin: 20px 30px 0 30px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  outline: 3px solid rgb(43, 43, 43);
  margin-bottom: 15px;

  &:hover {
    outline: 4px solid rgb(0, 0, 0);
  }
`;

export const Name = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: rgb(43, 43, 43);
  padding-top: 20px;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

export const Category = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
`;

export const Contacts = styled.div`
  margin-bottom: 20px;
  
  img {
    width: 30px;
    height: 30px;
    margin: 5px;
  }

  img:hover {
    width: 34px;
    height: 34px;
  }
`;

export const CV = styled.div`
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: rgb(43, 43, 43);
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;

export const Content = styled.div`
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    height: calc(100vh - 400px);
    margin: 0 30px;

    h5 {
      font-weight: 500;
      font-size: 17px;
      margin-bottom: 10px;
    }
`;

export const Techs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: rgb(118, 118, 118);

    p {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 15px;
    }

`;