import { useEffect } from "react";
import { Container, Form, FormBox, Input, AddressButton } from "./styles";
import Header from "../../components/header";
import Button from "../../components/button";
import Typography from "../../components/typography";
import { useState } from "react";
import { clientInfoTypes } from "../../types";

import {
  createClientsTable,
  addClientInTheTable,
} from "../../models/db/handleDb";

const initialClientInfo: clientInfoTypes = {
  name: "",
  touch: "",
  street: "",
  apartament: "",
  block: "",
};

const AddClient = () => {
  const [clientInfo, setClientInfo] = useState(initialClientInfo);
  const [openAddress, setOpenAddress] = useState<boolean>(false);

  useEffect(() => {
    createClientsTable();
  }, []);

  const handleClientInfo = (e: any, name: string) => {
    const value = e.nativeEvent.text;
    setClientInfo({ ...clientInfo, [name]: value });
  };

  const handleAddClient = () => {
    setOpenAddress(false);
    addClientInTheTable(
      clientInfo.name,
      clientInfo.touch,
      clientInfo.street,
      clientInfo.apartament,
      clientInfo.block
    );
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

            <Input
              placeholder="Contato:"
              data-name="touch"
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

          <Button onPress={handleAddClient} description="Adicionar cliente" />
        </Form>
      </Container>
    </>
  );
};

export default AddClient;
