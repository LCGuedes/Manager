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

export interface newClientType {
  clientName: string;
  clientTouch: string;
  clientStreet: string;
  clientApartament: string;
  clientBlock: string;
}

export interface productType {
  product_id: number;
  product_name: string;
  product_value: string;
  product_client: string;
}

export interface newProductType {
  productName: string;
  productValue: string;
}

export interface errorType {
  status: boolean;
  payload: string;
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
