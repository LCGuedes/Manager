import styled from "styled-components/native";
import { Text, View, Modal } from "react-native";
import HistoryModal from "./components/historyModal";
import { useState, useEffect } from "react";
import { DatabaseConection } from "../../services/db/config";

export default function History({ clientInfo }: any) {
  const [clientDebtList, setClientDebtList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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
      <Card
        clientDebtList={clientDebtList}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Container>
  );
}

const Card = ({ clientDebtList, openModal, setOpenModal }: any) => {
  const [productInfo, setProductInfo] = useState({});

  function getInfo(item: any) {
    console.log("item clicado", item);
    setProductInfo(item);
  }

  return (
    <>
      {clientDebtList.map((item) => (
        <View key={item.product_id}>
          <Box onPress={() => (setOpenModal(true), getInfo(item))}>
            <P>{item.product_name}</P>
            <P>{`R$ ${item.product_value}`}</P>
          </Box>
        </View>
      ))}
      <Modal
        animationType="fade"
        transparent
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <HistoryModal openModal={setOpenModal} clientInfo={productInfo} />
      </Modal>
    </>
  );
};

const Container = styled.View`
  padding: 12px;
`;

const Box = styled.TouchableOpacity`
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
