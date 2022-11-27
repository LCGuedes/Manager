import { useRef, useEffect } from "react";
import Header from "../../components/header";
import { Button, SheetButton, P } from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Dot from "../../../assets/icons/three-dots.svg";
import { RootStackScreenProps } from "../../types";
import { createClientsTable } from "../../services/db/models/clients";
import { createDebtTable } from "../../services/db/models/dbt";
import { dropTable } from "../../services/db/utils";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    /* dropTable("clients_table");
    dropTable("debt_table"); */
    createClientsTable();
    createDebtTable();
  }, []);

  const openModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <Header label="Olá Maria" />
      <Button onPress={openModal}>
        <Dot width={24} height={24} fill={"white"} />
      </Button>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[1, "40%"]}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={{ padding: 12 }}>
          <SheetButton onPress={() => navigation.navigate("addClient")}>
            <P>Adicionar cliente</P>
          </SheetButton>

          <SheetButton onPress={() => navigation.navigate("Clients")}>
            <P>Lista de clientes</P>
          </SheetButton>
          <SheetButton onPress={() => navigation.navigate("AddDebt")}>
            <P>Adicionar Débito</P>
          </SheetButton>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Home);
