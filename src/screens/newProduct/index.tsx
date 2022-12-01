import { Container, Form, FormBox, Input } from "./styles";
import DropDownList from "./components/dropDownList";
import Header from "../../components/header";
import FeedBackMsgBox from "../../components/feedBackMsgBox";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { newProductController } from "../../services/db/controllers/products";
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
  const [validationMsg, setValidationMsg] = useState<string>("");

  console.log("validtion", validationMsg);

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
    const handleErrorMsg = (errorMsg: string) => {
      setValidationMsg(errorMsg);
    };
    newProductController(newProduct, clientName, handleErrorMsg);
  };

  return (
    <>
      <Header label="Adicionar produto" />

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
          <Button description="Adicionar produto" onPress={addNewProduct} />
        </Form>

        {validationMsg ? <FeedBackMsgBox feedBackMsg={validationMsg} /> : null}
      </Container>
    </>
  );
}
