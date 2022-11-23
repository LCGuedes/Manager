import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
`;

export const FormBox = styled.View`
  width: 80%;
`;
export const Input = styled.TextInput`
  width: 288px;
  height: 48px;
  border-radius: 12px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.pallete.primary.main};
  margin-bottom: 12px;
`;

export const AddressButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  elevation: 4;
  background-color: ${(props) => props.theme.pallete.primary.main};
  width: 150px;
  height: 36px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.pallete.common.errorColor};
`;

export const ValidateMsgBox = styled.View`
  width: 80%;
  height: 60px;
  //background-color: white;
  border: 0.5px solid #4bb543;
  border-radius: 12px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

export const ValidateText = styled.Text`
  color: #4bb543;
`;
