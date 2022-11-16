import * as yup from "yup";

export const schemaInfos = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("O Valor da venda de é obrigatório")
    .min(1000, "O Valor mínimo é de 1000 reais"),
  installments: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Quantidade de parcelas é obrigatório")
    .positive("Quantidade de parcelas deve ser positivo")
    .max(12, "Máximo de 12 parcelas")
    .integer(),
  mdr: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("O percentual de MDR é obrigatório"),
});
