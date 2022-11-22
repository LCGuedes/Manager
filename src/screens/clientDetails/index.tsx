import {
  Container,
  HeaderCard,
  NavigationBar,
  NavigationButton,
} from "./styles";
import { useState } from "react";
import Typography from "../../components/typography";

import Description from "./components/description";
import History from "./components/history";

export default function ClientDetails({ route }: any) {
  const { name } = route.params.item;
  const clientInfo = route.params.item;
  const [openDescription, setOpenDescription] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <Container>
      <HeaderCard>
        <Typography label={name} />
      </HeaderCard>
      <NavigationBar>
        <NavigationButton onPress={() => setOpenDescription(!openDescription)}>
          <Typography label="descrição" fontColor="red" />
        </NavigationButton>
        <NavigationButton onPress={() => setOpenHistory(!openHistory)}>
          <Typography label="histórico de compras" fontColor="red" />
        </NavigationButton>
      </NavigationBar>
      {openDescription ? <Description clientInfo={clientInfo} /> : null}
      {openHistory ? <History clientInfo={clientInfo} /> : null}
    </Container>
  );
}
