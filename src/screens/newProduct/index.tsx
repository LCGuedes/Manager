import { Container, Form, FormBox, Input } from "./styles";
import DropDownList from "./components/dropDownList";
import Header from "../../components/header";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { newProductController } from "../../services/db/controllers/dbt";
import { selectClientsController } from "../../services/db/controllers/clients";
import { clientType, newProductType } from "../../types";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

const initialProduct = {
  productName: "",
  productValue: "",
};

export default function NewProduct() {
  const [clientList, setClientList] = useState<clientType[]>([]);
  const [clientName, setClientName] = useState<string>("");
  const [newProduct, setNewProduct] = useState<newProductType>(initialProduct);

  useEffect(() => {
    selectClientsController(setClientList);
  }, []);

  const handleNewProduct = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addNewProduct = () => {
    newProductController(newProduct, clientName);
  };

  return (
    <>
      <Header label="Adicionar débito" />

      <Container>
        <Form>
          <FormBox>
            <DropDownList
              list={clientList}
              placeholder="Selecione o cliente"
              value={clientName}
              setValue={setClientName}
            />
            <Input
              placeholder="Produto"
              value={newProduct.productName}
              onChange={(e) => handleNewProduct(e, "productName")}
            />
            <Input
              placeholder="valor"
              value={newProduct.productValue}
              onChange={(e) => handleNewProduct(e, "productValue")}
            />
          </FormBox>
        </Form>
        <Button description="Adicionar débito" onPress={addNewProduct} />
      </Container>
    </>
  );
}
