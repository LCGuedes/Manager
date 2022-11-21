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
  color: ${({ theme }) => theme.pallete.primary.main};
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

export const SignInButton = styled.TouchableOpacity`
  border-radius: 12px;
  color: white;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const SignUpButton = styled.TouchableOpacity``;
