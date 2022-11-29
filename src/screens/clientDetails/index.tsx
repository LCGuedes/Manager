import {
  Container,
  HeaderCard,
  PhotoMock,
  NavigationBar,
  P,
  NavigationButton,
} from "./styles";
import { useState } from "react";
import Typography from "../../components/typography";
import ClientDescription from "./clientDescription";
import ProductList from "./productList";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

interface routeType {
  route: RouteProp<RootStackParamList, "ClientDetails">;
}

const ClientDetails = ({ route }: routeType) => {
  const client = route.params.item;
  const [openClientDescription, setOpenClientDescription] =
    useState<boolean>(true);
  const [openProductList, setOpenProductList] = useState<boolean>(false);

  return (
    <Container>
      <HeaderCard>
        <PhotoMock />
        <Typography label={route.params.item.client_name} fontSize="18px" />
      </HeaderCard>
      <NavigationBar>
        <NavigationButton
          onPress={() => (
            setOpenClientDescription(!openClientDescription),
            setOpenProductList(false)
          )}
        >
          <P>Descrição</P>
        </NavigationButton>
        <NavigationButton
          onPress={() => (
            setOpenProductList(!openProductList),
            setOpenClientDescription(false)
          )}
        >
          <P>Histórico de compras</P>
        </NavigationButton>
      </NavigationBar>
      {openClientDescription ? <ClientDescription client={client} /> : null}
      {openProductList ? <ProductList client={client} /> : null}
    </Container>
  );
};

export default ClientDetails;
