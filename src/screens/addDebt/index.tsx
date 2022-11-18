import { Container, Form, FormBox, Input } from "./styles";
import DropDownList from "../../components/dropDownList";
import Header from "../../components/header";
import Button from "../../components/button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { rootState } from "../../redux/store";

const bau: string[] = [];

export default function AddDebt() {
  const clients = useSelector(
    (state: rootState) => state.defaultReducer.clients
  );
  const [value, setValue] = useState("");
  return (
    <>
      <Header label="Adicionar débito" />

      <Container>
        <Form>
          <FormBox>
            <DropDownList
              list={bau}
              placeholder="Selecione o cliente"
              value={value}
              setValue={setValue}
            />
            <Input placeholder="valor" />
          </FormBox>
        </Form>
        <Button description="Adicionar débito" />
      </Container>
    </>
  );
}
