import { Container, Form, FormBox, Input } from "./styles";
import DropDownList from "../../components/dropDownList";
import Header from "../../components/header";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { DatabaseConection } from "../../models/db/config";
import { addDebtInTheTable } from "../../models/db/handleDb";

export default function AddDebt() {
  const [clientList, setClientList] = useState<string[]>([]);
  const [clientName, setClientName] = useState("");
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");

  useEffect(() => {
    const db = DatabaseConection.getConection();
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM clients_table", [], (tx, results) => {
        let temp: string[] = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setClientList(temp);
      });
    });
  }, []);

  const handleAddDebt = () => {
    addDebtInTheTable(productName, productValue, clientName);
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
              value={productName}
              onChange={(e) => setProductName(e.nativeEvent.text)}
            />
            <Input
              placeholder="valor"
              value={productValue}
              onChange={(e) => setProductValue(e.nativeEvent.text)}
            />
          </FormBox>
        </Form>
        <Button description="Adicionar débito" onPress={handleAddDebt} />
      </Container>
    </>
  );
}
