import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface signUpTypes {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface signInTypes {
  email: string;
  password: string;
}

export interface clientInfoTypes {
  name: string;
  touch: string;
  street: string;
  apartament: string;
  block: string;
}

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Home: undefined;
  Clients: undefined;
  addClient: undefined;
  ClientDetails: undefined;
  AddDebt: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
