import styled from "styled-components/native";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { DatabaseConection } from "../../../services/db/config";

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

  return (
    <Container>
      {clientDebtList.map((item) => (
        <Box key={item.product_id}>
          <P>{item.product_name}</P>
          <P>{`R$ ${item.product_value}`}</P>
        </Box>
      ))}
    </Container>
  );
}

const Container = styled.View`
  padding: 12px;
`;

const Box = styled.View`
  elevation: 2;
  background-color: white;
  margin-bottom: 8px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

const P = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.main};
`;
