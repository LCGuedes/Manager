import { useState } from "react";
import styled from "styled-components/native";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../theme";
import { clientType } from "../../../types";

interface dropDownType {
  list: Array<clientType>;
  placeholder: string;
  value: string;
  setValue: (clientName: string) => void;
}

const DropDownList = ({ list, placeholder, value, setValue }: dropDownType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderItem = ({ item }: ListRenderItemInfo<clientType>) => {
    const handleList = (item: string) => {
      setValue(item);
      setIsOpen(false);
    };

    return (
      <ListItem onPress={() => handleList(item.client_name)}>
        {item.client_name}
      </ListItem>
    );
  };

  return (
    <Container>
      <InputBox>
        <InputField value={value} placeholder={placeholder} editable={false} />
        <Button onPress={() => setIsOpen(!isOpen)}>
          <Ionicons
            name="arrow-down"
            size={18}
            color={theme.pallete.primary.main}
          />
        </Button>
      </InputBox>

      {isOpen ? (
        <ListBox>
          <FlatList
            data={list}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </ListBox>
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: 12px;
`;

const InputBox = styled.View`
  flex-direction: row;
`;

const InputField = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.pallete.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 240px;
  height: 48px;
  padding-left: 12px;
`;

const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.pallete.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const ListBox = styled.View`
  width: 288px;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.pallete.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 4px;
  padding: 12px;
`;

const ListItem = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.main};
  margin-bottom: 4px;
`;

export default DropDownList;
