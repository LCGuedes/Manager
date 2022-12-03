import styled from "styled-components/native";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import DefaultModal from "../../../components/defaultModal";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { updateClientController } from "../../../services/db/controllers/clients";
import { clientType } from "../../../types";

interface editModalType {
  client: clientType[];
  setOpenEditModal: (state: boolean) => void;
}

const EditModal = ({ client, setOpenEditModal }: editModalType) => {
  const [editClient, setEditClient] = useState<clientType>(client[0]);
  const [openFeedBackSection, setopenFeedBackSection] =
    useState<boolean>(false);

  const handleEditClient = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;
    setEditClient({ ...editClient, [name]: value });
  };

  const updateClient = () => {
    updateClientController(editClient);
    setopenFeedBackSection(true);
  };

  return (
    <DefaultModal
      setOpenModal={setOpenEditModal}
      feedBack={{
        status: openFeedBackSection,
        type: "success",
        payload: "Informações atualizadas com sucesso !",
      }}
    >
      <Form>
        <FormBox>
          <InputBox>
            <Input
              placeholder="Telefone de contato"
              value={editClient.client_touch}
              onChange={(e) => handleEditClient(e, "client_touch")}
            />
          </InputBox>
          <EditButton>
            <Feather name="edit" size={24} color="#726a95" />
          </EditButton>
        </FormBox>

        <FormBox>
          <InputBox>
            <Input
              placeholder="Rua"
              value={editClient.client_street}
              onChange={(e) => handleEditClient(e, "client_street")}
            />
          </InputBox>
          <EditButton>
            <Feather name="edit" size={24} color="#726a95" />
          </EditButton>
        </FormBox>

        <FormBox>
          <InputBox>
            <Input
              placeholder="Casa"
              value={editClient.client_apartament}
              onChange={(e) => handleEditClient(e, "client_apartament")}
            />
          </InputBox>
          <EditButton>
            <Feather name="edit" size={24} color="#726a95" />
          </EditButton>
        </FormBox>

        <FormBox>
          <InputBox>
            <Input
              placeholder="Quadra"
              value={editClient.client_block}
              onChange={(e) => handleEditClient(e, "client_block")}
            />
          </InputBox>
          <EditButton>
            <Feather name="edit" size={24} color="#726a95" />
          </EditButton>
        </FormBox>
        <ConfirmButton onPress={updateClient}>
          <P>Confirmar modificações</P>
        </ConfirmButton>
      </Form>
    </DefaultModal>
  );
};

export default EditModal;

const Form = styled.View`
  width: 100%;
  padding: 24px;
`;

const FormBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InputBox = styled.View`
  width: 85%;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  padding: 12px;
  border: 0.5px solid ${(props) => props.theme.pallete.primary.main};
`;

const EditButton = styled.TouchableOpacity`
  justify-content: center;
`;

const ConfirmButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  elevation: 4;
  background-color: ${(props) => props.theme.pallete.primary.main};
  width: 100%;
  height: 36px;
  border-radius: 12px;
  margin-right: 8px;
`;

const P = styled.Text`
  color: white;
`;
