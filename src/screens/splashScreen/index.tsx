import styled from "styled-components/native";
import Button from "../../components/button";
import { RootStackScreenProps } from "../../types";
import { useEffect } from "react";

import {
  createUserTable,
  createClientsTable,
  createDebtTable,
} from "../../models/db/handleDb";
import { showTable, dropTable } from "../../models/db/utils";

const SplashScreen = ({ navigation }: RootStackScreenProps<"SplashScreen">) => {
  useEffect(() => {
    createUserTable();
    createClientsTable();
    createDebtTable();

    showTable("user_table");
    showTable("clients_table");
    showTable("debt_table");
  }, []);

  return (
    <Container>
      <Button
        description="Register"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        description="Login"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button description="home" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
