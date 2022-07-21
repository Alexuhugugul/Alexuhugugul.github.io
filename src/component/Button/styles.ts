import styled from "styled-components";
//error ff1867
export const ButtonComponent = styled.button`
  position: relative;
  background: #fff;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  border: none;
  transition: 0.5s;

  &:hover {
    letter-spacing: 0.25em;
    background: #00dfc4;
    box-shadow: 0 0 35px #00dfc4;
    color: #00dfc4;

    & > i:before {
        width: 20px;
        left: 20%;
    }
    
    & > i:after {
        width: 20px;
        left: 80%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #1d2b3a;
  }

  & span {
    position: relative;
    z-index: 1;
  }

  & i {
    position: absolute;
    inset: 0;
    display: block;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 80%;
      width: 10px;
      height: 4px;
      background: #1d2b3a;
      transform: translateX(-50%) skewX(325deg);
      transition: 0.5s;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 20%;
      width: 10px;
      height: 4px;
      background: #1d2b3a;
      transform: translateX(-50%) skewX(325deg);
      transition: 0.5s;
    }
  }
`;
