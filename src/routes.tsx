import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import Home from "./screens/home";
import Clients from "./screens/clients";
import addClient from "./screens/addClient";
import ClientDetails from "./screens/clientDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="addClient" component={addClient} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;