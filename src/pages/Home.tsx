import { useContext } from "react";
import { CardStyled, PStyled } from "../components/Card/style";
import Form from "../components/Form";
import ResponseBox from "../components/ResponseBox";
import { SendInfosContext } from "../contexts/SendInfosContext";

const Home = () => {
  const { loading } = useContext(SendInfosContext);
  return (
    <CardStyled>
      {loading && <PStyled>Loading...</PStyled>}
      <Form />
      <ResponseBox />
    </CardStyled>
  );
};

export default Home;
