import * as yup from "yup";

export const newClientSchema = yup.object().shape({
  clientName: yup.string().label("Nome").required("Digite o nome do cliente"),
  clientTouch: yup.string().label("Contato"),
  clientStreet: yup.string().label("Rua"),
  clientApartament: yup.string().label("Casa"),
  clientBlock: yup.string().label("Quadra"),
});
