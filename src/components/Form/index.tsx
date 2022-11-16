import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaInfos } from "./schema";
import { DivStyled, FormStyled } from "./style";
import { Input } from "../Input";
import { useContext } from "react";
import { SendInfosContext } from "../../contexts/SendInfosContext";

const Form = () => {
  const { setData, setloading } = useContext(SendInfosContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaInfos) });

  const onSubmitFunction = (data: FieldValues) => {
    setData(data);
    setloading(true);
  };

  return (
    <DivStyled>
      <h1>Simule sua Antecipação</h1>
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          name="amount"
          type="number"
          label="Informe o valor da venda *"
          placeholder=""
          register={register}
          step="0.01"
          min={1000}
          error={errors.amount?.message}
        />
        <Input
          name="installments"
          type="number"
          label="Em quantas parcelas *"
          placeholder=""
          register={register}
          min={1}
          error={errors.installments?.message}
        />
        <Input
          name="mdr"
          label="Informe o percentual de MDR *"
          type="number"
          placeholder=""
          register={register}
          min={0}
          error={errors.mdr?.message}
        />
        <button type="submit">Simular</button>
      </FormStyled>
    </DivStyled>
  );
};

export default Form;
