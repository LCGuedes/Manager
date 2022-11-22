import styled from "styled-components/native";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { DatabaseConection } from "../../../models/db/config";

//const query = `SELECT * FROM debt_table WHERE product_client=${clientInfo.client_name}`
const name = "Lucas";

export default function History({ clientInfo }: any) {
  const [clientDebtList, setClientDebtList] = useState([]);

  useEffect(() => {
    const db = DatabaseConection.getConection();
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM debt_table WHERE product_client = '${clientInfo.client_name}' `,
        [],
        (tx, res) => {
          let temp = [];
          for (let i = 0; i < res.rows.length; ++i) {
            temp.push(res.rows.item(i));
          }
          setClientDebtList(temp);
        }
      );
    });
  }, []);

  console.log("debt table =>>", clientDebtList);

  return (
    <>
      {clientDebtList.map((item) => (
        <Container key={item.product_id}>
          <Text>{item.product_name}</Text>
          <Text>{item.product_value}</Text>
        </Container>
      ))}
    </>
  );
}

export const Container = styled.View`
  flex-direction: row;
`;
