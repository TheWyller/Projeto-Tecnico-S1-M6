import { useContext } from "react";
import { SendInfosContext } from "../../contexts/SendInfosContext";
import { DivStyled } from "./style";

const ResponseBox = () => {
  const { resData } = useContext(SendInfosContext);

  return (
    <DivStyled>
      <h1>Você Receberá</h1>
      <p>
        Amanhã:
        <span>
          {" "}
          R$ {Object.keys(resData).length > 0 ? resData?.["1"] : "0,00"}
        </span>
      </p>
      <p>
        Em 15 dias:
        <span>
          {" "}
          R$ {Object.keys(resData).length > 0 ? resData?.["15"] : "0,00"}
        </span>
      </p>
      <p>
        Em 30 dias:
        <span>
          {" "}
          R$ {Object.keys(resData).length > 0 ? resData?.["30"] : "0,00"}
        </span>
      </p>
      <p>
        Em 90 dias:
        <span>
          {" "}
          R$ {Object.keys(resData).length > 0 ? resData?.["90"] : "0,00"}
        </span>
      </p>
    </DivStyled>
  );
};

export default ResponseBox;
