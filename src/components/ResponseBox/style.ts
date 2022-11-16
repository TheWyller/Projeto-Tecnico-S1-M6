import styled from "styled-components";

export const DivStyled = styled.div`
  margin: auto auto;
  h1 {
    color: var(--Blue-2);
    text-transform: uppercase;
    font-style: italic;
    border-bottom: solid var(--Grey-3) 2px;
    padding-bottom: 15px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    color: var(--Blue-0);
    font-style: italic;
    margin-bottom: 15px;
    span {
      font-weight: bold;
    }
  }
`;
