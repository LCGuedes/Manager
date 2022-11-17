import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.pallete.primary.main};
  width: 64px;
  height: 64px;
  border-radius: 999px;
  elevation: 4;
  position: absolute;
  right: 24px;
  bottom: 36px;
`;

export const SheetButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 12px;
`;

export const P = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.contrastText};
`;
