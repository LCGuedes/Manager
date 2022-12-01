import { Container, Form, FormBox, Input, Error } from "./styles";
import DropDownList from "./components/dropDownList";
import Header from "../../components/header";
import FeedBackMsgBox from "../../components/feedBackMsgBox";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { newProductController } from "../../services/db/controllers/products";
import { selectClientsController } from "../../services/db/controllers/clients";
import { clientType, newProductType } from "../../types";

import { Formik } from "formik";
import { newProductSchema } from "../../schemas";

const initialProduct = {
  productName: "",
  productValue: "",
};

export default function NewProduct() {
  const [clientList, setClientList] = useState<clientType[]>([]);
  const [clientName, setClientName] = useState("");

  const clients = clientList.map((item) => item.client_name);

  const [feedBack, setFeedBack] = useState({ status: "", msg: "" });

  useEffect(() => {
    selectClientsController(setClientList);
  }, []);

  const handleNewProduct = (values: newProductType) => {
    const handleErrorMsg = (status: string, errorMsg: string) => {
      setFeedBack({ ...feedBack, status: status, msg: errorMsg });
    };

    if (clientName === "") {
      const errorMsg = "Selecione o cliente";
      setFeedBack({ ...feedBack, status: "select client", msg: errorMsg });
    } else if (!clients.includes(clientName)) {
      const errorMsg = "Seleciona um cliente já cadastrado";
      setFeedBack({ ...feedBack, status: "fail", msg: errorMsg });
    } else {
      newProductController(values, clientName, handleErrorMsg);
    }
  };

  return (
    <>
      <Header label="Adicionar produto" />

      <Container>
        <Formik
          initialValues={initialProduct}
          validationSchema={newProductSchema}
          onSubmit={handleNewProduct}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <Form>
              <FormBox>
                {feedBack.status === "select client" ? (
                  <Error>Selecione o cliente</Error>
                ) : null}
                <DropDownList
                  list={clientList}
                  placeholder="Selecione o cliente"
                  value={clientName}
                  setValue={setClientName}
                />
                {errors.productName && touched.productName && (
                  <Error>{errors.productName}</Error>
                )}
                <Input
                  placeholder="Produto"
                  value={values.productName}
                  onChangeText={handleChange("productName")}
                  onBlur={handleBlur("productName")}
                />
                {errors.productValue && touched.productValue && (
                  <Error>{errors.productValue}</Error>
                )}
                <Input
                  placeholder="valor"
                  value={values.productValue}
                  onChangeText={handleChange("productValue")}
                  onBlur={handleBlur("productValue")}
                />
              </FormBox>
              <Button
                description="Adicionar produto"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </Form>
          )}
        </Formik>
        {feedBack.status === "success" ? (
          <FeedBackMsgBox feedBackMsg={feedBack.msg} type={feedBack.status} />
        ) : feedBack.status === "fail" ? (
          <FeedBackMsgBox feedBackMsg={feedBack.msg} type={feedBack.status} />
        ) : null}
      </Container>
    </>
  );
}
