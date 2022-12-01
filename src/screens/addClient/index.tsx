import {
  Container,
  Form,
  FormBox,
  Input,
  AddressButton,
  Error,
} from "./styles";
import Header from "../../components/header";
import Button from "../../components/button";
import FeedBackMsgBox from "../../components/feedBackMsgBox";
import Typography from "../../components/typography";
import { useState } from "react";
import { newClientType } from "../../types";
import { newClientController } from "../../services/db/controllers/clients";
import { Keyboard } from "react-native";

import { Formik } from "formik";
import { newClientSchema } from "../../schemas/newClient";

const initialClient = {
  clientName: "",
  clientTouch: "",
  clientStreet: "",
  clientApartament: "",
  clientBlock: "",
};

const AddClient = () => {
  const [addressSection, setAddressSection] = useState(false);
  const [feedBack, setFeedBack] = useState({ status: "", msg: "" });

  const haandleNewClient = (values: newClientType) => {
    const handleErrorMsg = (status: string, errorMsg: string) => {
      setFeedBack({ ...feedBack, status: status, msg: errorMsg });
    };
    newClientController(values, handleErrorMsg);

    Keyboard.dismiss();
  };

  return (
    <>
      <Header label="Adicionar Cliente" />
      <Container>
        <Formik
          initialValues={initialClient}
          validationSchema={newClientSchema}
          onSubmit={haandleNewClient}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            touched,
            values,
          }) => (
            <Form>
              <FormBox>
                {errors.clientName && touched.clientName && (
                  <Error>{errors.clientName}</Error>
                )}
                <Input
                  placeholder="Nome:"
                  value={values.clientName}
                  onChangeText={handleChange("clientName")}
                  onBlur={handleBlur("clientName")}
                />

                <Input
                  placeholder="Contato:"
                  value={values.clientTouch}
                  onChangeText={handleChange("clientTouch")}
                  onBlur={handleBlur("clientTouch")}
                />
                <AddressButton
                  onPress={() => setAddressSection(!addressSection)}
                >
                  <Typography label="Adicionar endereço" fontSize="14px" />
                </AddressButton>

                {addressSection ? (
                  <>
                    <Input
                      placeholder="Rua:"
                      value={values.clientStreet}
                      onChangeText={handleChange("clientStreet")}
                      onBlur={handleBlur("clientStreet")}
                    />
                    <Input
                      placeholder="Casa:"
                      value={values.clientApartament}
                      onChangeText={handleChange("clientApartament")}
                      onBlur={handleBlur("clientApartament")}
                    />
                    <Input
                      placeholder="Quadra:"
                      value={values.clientBlock}
                      onChangeText={handleChange("clientBlock")}
                      onBlur={handleBlur("clientBlock")}
                    />
                  </>
                ) : null}
              </FormBox>
              <Button
                onPress={handleSubmit}
                description="Adicionar cliente"
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
};

export default AddClient;
