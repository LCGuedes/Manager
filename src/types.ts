import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface signUpTypes {
  user: string;
  password: string;
  passwordConfirmation: string;
}

export interface signInTypes {
  user: string;
  password: string;
}

export interface clientType {
  client_apartament: string;
  client_block: string;
  client_id: number;
  client_name: string;
  client_street: string;
  client_touch: string;
}

export interface clientInfoTypes {
  name: string;
  touch: string;
  street: string;
  apartament: string;
  block: string;
}

export type RootStackParamList = {
  SplashScreen: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Home: undefined;
  Clients: undefined;
  addClient: undefined;
  ClientDetails: { item: clientType };
  AddDebt: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
