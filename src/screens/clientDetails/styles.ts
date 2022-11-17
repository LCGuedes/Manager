import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const HeaderCard = styled.View`
  width: 100%;
  height: 240px;
  background-color: ${(props) => props.theme.pallete.primary.main};
`;

export const NavigationBar = styled.View`
  width: 100%;
  height: 48px;
  padding: 12px;
  background-color: white;
  elevation: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationButton = styled.TouchableOpacity``;
