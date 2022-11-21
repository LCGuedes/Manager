import { useState, useEffect } from "react";
import Header from "../../components/header";
import { Container, Box, ClientButton } from "./styles";
import Typography from "../../components/typography";
import { FlatList } from "react-native";

import { RootStackScreenProps } from "../../types";
import { clientInfoTypes } from "../../types";

import { DatabaseConection } from "../../models/db/config";

const Clients = ({ navigation }: RootStackScreenProps<"Clients">) => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    const db = DatabaseConection.getConection();
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM clients_table", [], (tx, results) => {
        setFlatListItems(results.rows._array);
      });
    });
  }, []);

  console.log("flastt", flatListItems);

  const renderCard = ({ item }: any) => {
    return (
      <ClientButton
        onPress={() => navigation.navigate("ClientDetails", { item })}
      >
        <Typography label={item.name} fontColor="#726a95" fontSize="16px" />
      </ClientButton>
    );
  };

  return (
    <Container>
      <Header label="Clientes" />
      <Box>
        <FlatList
          data={flatListItems}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Container>
  );
};

export default Clients;
