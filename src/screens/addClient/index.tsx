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
import { clientInfoTypes } from "../../types";
import { addClientInTheTable } from "../../services/db/controllers/clients";
import { Keyboard } from "react-native";

const initialClientInfo = {
  name: "",
  touch: "",
  street: "",
  apartament: "",
  block: "",
};

interface errorStatusType {
  status: boolean;
  payload: string;
}

const initialErrorStatus = {
  status: false,
  payload: "",
};

const AddClient = () => {
  const [clientInfo, setClientInfo] = useState<clientInfoTypes>(initialClientInfo);
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<errorStatusType>(initialErrorStatus);
  const [validateMsg, setValidateMsg] = useState<string>("");

  const handleClientInfo = (e: any, name: string) => {
    const value = e.nativeEvent.text;

    if (name === "name" && value.length > 0) {
      setErrorStatus({ ...errorStatus, status: false, payload: "" });
    }

    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleAddClient = () => {
    setOpenAddress(false);

    if (clientInfo.name === "") {
      setErrorStatus({
        ...errorStatus,
        status: true,
        payload: "Informe o nome do cliente",
      });
    } else {
      const handleErrorMsg = (errorMsg: any) => {
        setValidateMsg(errorMsg);
      };
      addClientInTheTable(
        clientInfo.name,
        clientInfo.touch,
        clientInfo.street,
        clientInfo.apartament,
        clientInfo.block,
        handleErrorMsg
      );
    }
    Keyboard.dismiss();
  };

  const handleAddress = () => {
    setOpenAddress(!openAddress);
  };

  return (
    <>
      <Header label="Adicionar Cliente" />
      <Container>
        <Form>
          <FormBox>
            <Input
              placeholder="Nome:"
              value={clientInfo.name}
              onChange={(e) => handleClientInfo(e, "name")}
            />
            {errorStatus.status ? <Error>{errorStatus.payload}</Error> : null}
            <Input
              placeholder="Contato:"
              value={clientInfo.touch}
              onChange={(e) => handleClientInfo(e, "touch")}
            />

            <AddressButton onPress={handleAddress}>
              <Typography label="Adicionar endereço" fontSize="14px" />
            </AddressButton>

            {openAddress ? (
              <>
                <Input
                  placeholder="Rua:"
                  value={clientInfo.street}
                  onChange={(e) => handleClientInfo(e, "street")}
                />
                <Input
                  placeholder="Casa:"
                  value={clientInfo.apartament}
                  onChange={(e) => handleClientInfo(e, "apartament")}
                />
                <Input
                  placeholder="Quadra:"
                  value={clientInfo.block}
                  onChange={(e) => handleClientInfo(e, "block")}
                />
              </>
            ) : null}
          </FormBox>

          <Button
            onPress={handleAddClient}
            description="Adicionar cliente"
            disabled={errorStatus.status}
          />
        </Form>
        {validateMsg ? (
          <ValidateMsgBox>
            <ValidateText>{validateMsg}</ValidateText>
          </ValidateMsgBox>
        ) : null}
      </Container>
    </>
  );
};

export default AddClient;
