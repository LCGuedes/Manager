import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const HeaderCard = styled.View`
  width: 100%;
  height: 240px;
  background-color: ${(props) => props.theme.pallete.primary.main};
  align-items: center;
  justify-content: space-evenly;
`;

export const PhotoMock = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 999px;
  //margin-bottom: 12px;
  background-color: white;
`;

export const NavigationBar = styled.View`
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  background-color: white;
  elevation: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const P = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.main};
`;

export const NavigationButton = styled.TouchableOpacity``;
