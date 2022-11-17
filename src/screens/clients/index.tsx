import Header from "../../components/header";
import Card from "./components/card";
import { Container, Box, ClientButton } from "./styles";
import Typography from "../../components/typography";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import { RootStackScreenProps } from "../../types";
import { clientInfoTypes } from "../../types";

interface Item {
  item: clientInfoTypes;
}

const Clients = ({ navigation }: RootStackScreenProps<"Clients">) => {
  const clients = useSelector(
    (state: rootState) => state.defaultReducer.clients
  );

  const renderCard = ({ item }: Item) => {
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
          data={clients}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Container>
  );
};

export default Clients;
