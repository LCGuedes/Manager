import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import SignUp from "./screens/auth/signUp";
import SignIn from "./screens/auth/signIn";

import Home from "./screens/home";
import Clients from "./screens/clients";
import addClient from "./screens/addClient";
import ClientDetails from "./screens/clientDetails";

import AddDebt from "./screens/addDebt";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="addClient" component={addClient} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />

        <Stack.Screen name="AddDebt" component={AddDebt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
