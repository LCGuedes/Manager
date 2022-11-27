import { useState, useEffect } from "react";
import Header from "../../components/header";
import { Container, Box, ClientButton } from "./styles";
import Typography from "../../components/typography";
import { FlatList, ListRenderItemInfo } from "react-native";
import { RootStackScreenProps } from "../../types";
import { selectClients } from "../../services/db/controllers/clients";
import { clientType } from "../../types";

const Clients = ({ navigation }: RootStackScreenProps<"Clients">) => {
  const [clientList, setClientList] = useState<clientType[]>([]);

  useEffect(() => {
    selectClients(setClientList);
  }, []);

  const renderClient = ({ item }: ListRenderItemInfo<clientType>) => {
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
          renderItem={renderClient}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Container>
  );
};

export default Clients;
