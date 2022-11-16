import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 15px;

  label {
    font-weight: 600;
  }

  input {
    height: 30px;
    border: solid rgb(215, 215, 215) 2px;
    border-radius: 5px;
    width: 100%;
    padding-left: 5px;

    &:hover {
      border: solid rgb(192, 222, 246) 2px;
      -webkit-appearance: none;
    }
  }
  span {
    color: rgb(211, 211, 211);
    font-size: small;
    font-weight: bold;
  }
`;
