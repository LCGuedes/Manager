import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Box = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #01599a;
  margin-bottom: 36px;
  margin-top: 36px;
`;
export const Form = styled.View`
  width: 100%;
  padding: 24px;
`;
export const InputError = styled.Text`
  color: #ec1d25;
  margin-bottom: 6px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border: 1px solid #01599a;
  border-radius: 20px;
  margin-bottom: 12px;
  padding-left: 12px;
`;

export const SignInButton = styled.TouchableOpacity`
  border-radius: 20px;
  color: white;
  background-color: #01599a;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const SignUpButton = styled.TouchableOpacity``;
