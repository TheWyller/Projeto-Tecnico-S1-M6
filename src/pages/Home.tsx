import { CardStyled } from "../components/Card/style";
import Form from "../components/Form";
import ResponseBox from "../components/ResponseBox";

const Home = () => {
  return (
    <CardStyled>
      <Form />
      <ResponseBox />
    </CardStyled>
  );
};

export default Home;
