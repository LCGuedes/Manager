import {
  Container,
  Form,
  FormBox,
  Input,
  AddressButton,
  Error,
  ValidateMsgBox,
  ValidateText,
} from "./styles";
import Header from "../../components/header";
import Button from "../../components/button";
import Typography from "../../components/typography";
import { useState } from "react";
import { newClientType, errorType } from "../../types";
import { newClientController } from "../../services/db/controllers/clients";
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

const initialClient = {
  clientName: "",
  clientTouch: "",
  clientStreet: "",
  clientApartament: "",
  clientBlock: "",
};

const initialErrorStatus = {
  status: false,
  payload: "",
};

const AddClient = () => {
  const [newClient, setNewClient] = useState<newClientType>(initialClient);
  const [errorStatus, setErrorStatus] = useState<errorType>(initialErrorStatus);
  const [addressSection, setAddressSection] = useState<boolean>(false);
  const [validationMsg, setValidationMsg] = useState<string>("");

  const handleNewClient = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;

    if (name === "clientName" && value.length > 0) {
      setErrorStatus({ ...errorStatus, status: false, payload: "" });
    }

    setNewClient({ ...newClient, [name]: value });
  };

  const addNewClient = () => {
    if (newClient.clientName === "") {
      setErrorStatus({
        ...errorStatus,
        status: true,
        payload: "Informe o nome do cliente",
      });
    } else {
      const handleErrorMsg = (errorMsg: string) => {
        setValidationMsg(errorMsg);
      };
      newClientController(newClient, handleErrorMsg);
    }
    Keyboard.dismiss();
  };

  return (
    <>
      <Header label="Adicionar Cliente" />
      <Container>
        <Form>
          <FormBox>
            <Input
              placeholder="Nome:"
              value={newClient.clientName}
              onChange={(e) => handleNewClient(e, "clientName")}
            />
            {errorStatus.status ? <Error>{errorStatus.payload}</Error> : null}
            <Input
              placeholder="Contato:"
              value={newClient.clientTouch}
              onChange={(e) => handleNewClient(e, "clientTouch")}
            />

            <AddressButton onPress={() => setAddressSection(!addressSection)}>
              <Typography label="Adicionar endereço" fontSize="14px" />
            </AddressButton>

            {addressSection ? (
              <>
                <Input
                  placeholder="Rua:"
                  value={newClient.clientStreet}
                  onChange={(e) => handleNewClient(e, "clientStreet")}
                />
                <Input
                  placeholder="Casa:"
                  value={newClient.clientApartament}
                  onChange={(e) => handleNewClient(e, "clientApartament")}
                />
                <Input
                  placeholder="Quadra:"
                  value={newClient.clientBlock}
                  onChange={(e) => handleNewClient(e, "clientBlock")}
                />
              </>
            ) : null}
          </FormBox>

          <Button
            onPress={addNewClient}
            description="Adicionar cliente"
            disabled={errorStatus.status}
          />
        </Form>
        {validationMsg ? (
          <ValidateMsgBox>
            <ValidateText>{validationMsg}</ValidateText>
          </ValidateMsgBox>
        ) : null}
      </Container>
    </>
  );
};

export default AddClient;
