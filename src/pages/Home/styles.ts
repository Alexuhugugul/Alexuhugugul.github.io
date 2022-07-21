import styled from "styled-components";

export const PageHome = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  
  & div{
      margin-bottom: 30px;

      &:last-child{
          margin-bottom: 0;
      }
  }
`;
