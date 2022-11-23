import { Container, HeaderCard, PhotoMock, NavigationBar, P, NavigationButton } from "./styles";
import { useState } from "react";
import Typography from "../../components/typography";

import Description from "./components/description";
import History from "./components/history";

export default function ClientDetails({ route }: any) {
  const { client_name } = route.params.item;
  const clientInfo = route.params.item;
  const [openDescription, setOpenDescription] = useState(true);
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <Container>
      <HeaderCard>
        <PhotoMock />
        <Typography label={client_name} fontSize="18px" />
      </HeaderCard>
      <NavigationBar>
        <NavigationButton
          onPress={() => (setOpenDescription(!openDescription), setOpenHistory(false))}
        >
          <P>Descrição</P>
        </NavigationButton>
        <NavigationButton onPress={() => (setOpenHistory(!openHistory), setOpenDescription(false))}>
          <P>Histórico de compras</P>
        </NavigationButton>
      </NavigationBar>
      {openDescription ? <Description clientInfo={clientInfo} /> : null}
      {openHistory ? <History clientInfo={clientInfo} /> : null}
    </Container>
  );
}
