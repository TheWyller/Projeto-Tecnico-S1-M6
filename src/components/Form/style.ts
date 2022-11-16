import styled from "styled-components";

export const DivStyled = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  padding: 50px;
  justify-content: space-evenly;
  h1 {
    color: rgb(101, 101, 101);
    margin-bottom: 15px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: rgb(101, 101, 101);

  button {
    border: none;
    height: 40px;
    width: 100px;
    color: rgb(101, 101, 101);
    border-radius: 10px;
    margin-top: 15px;

    &:hover {
      background-color: rgb(117, 170, 238);
      color: white;
    }
  }
`;
