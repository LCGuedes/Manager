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
  const [clientName, setClientName] = useState<string>("");
  const [feedBack, setFeedBack] = useState({ status: "", msg: "" });

  useEffect(() => {
    selectClientsController(setClientList);
  }, []);

  const haandleNewProduct = (values: newProductType) => {
    const handleErrorMsg = (status: string, errorMsg: string) => {
      setFeedBack({ ...feedBack, status: status, msg: errorMsg });
    };
    newProductController(values, clientName, handleErrorMsg);
  };

  return (
    <>
      <Header label="Adicionar produto" />

      <Container>
        <Formik
          initialValues={initialProduct}
          validationSchema={newProductSchema}
          onSubmit={haandleNewProduct}
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
