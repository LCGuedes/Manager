import { useState, useEffect } from "react";
import Header from "../../components/header";
import { Container, Box, ClientButton } from "./styles";
import Typography from "../../components/typography";
import { FlatList } from "react-native";
import { RootStackScreenProps } from "../../types";
import { DatabaseConection } from "../../models/db/config";

const Clients = ({ navigation }: RootStackScreenProps<"Clients">) => {
  let [clientList, setClientList] = useState<string[]>([]);

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

  console.log("lista de cliente =>>>", clientList);

  const renderCard = ({ item }: any) => {
    return (
      <ClientButton
        onPress={() => navigation.navigate("ClientDetails", { item })}
      >
        <Typography
          label={item.client_name}
          fontColor="#726a95"
          fontSize="16px"
        />
      </ClientButton>
    );
  };

  return (
    <Container>
      <Header label="Clientes" />
      <Box>
        <FlatList
          data={clientList}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Container>
  );
};

export default Clients;
