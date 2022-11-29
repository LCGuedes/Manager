import styled from "styled-components/native";
import {
  TouchableNativeFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { updateClientController } from "../../../services/db/controllers/clients";
import { clientType } from "../../../types";

interface editModalType {
  client: clientType;
  setOpenEditModal: any;
}

const EditModal = ({ client, setOpenEditModal }: editModalType) => {
  const [editClient, setEditClient] = useState<clientType>(client);
  const [successSection, setSuccessSection] = useState<boolean>(false);

  const handleEditClient = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;
    setEditClient({ ...editClient, [name]: value });
  };

  const updateClient = () => {
    updateClientController(editClient);
    setSuccessSection(true);
  };

  return (
    <TouchableNativeFeedback onPress={() => setOpenEditModal(false)}>
      {successSection ? (
        <Container>
          <ValidateModalBox>
            <ValidateMsgBox>
              <ValidateText>Cliente deletado com sucesso !</ValidateText>
            </ValidateMsgBox>
          </ValidateModalBox>
        </Container>
      ) : (
        <Container>
          <Box>
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
            </Form>
            <ConfirmButton onPress={updateClient}>
              <P>Confirmar modificações</P>
            </ConfirmButton>
          </Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default EditModal;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.View`
  width: 90%;
  height: 360px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.View``;

const FormBox = styled.View`
  flex-direction: row;
  //align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  // background-color: blue;
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

const ValidateMsgBox = styled.View`
  width: 80%;
  height: 60px;
  //background-color: white;
  border: 0.5px solid #4bb543;
  border-radius: 12px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

const ValidateModalBox = styled.View`
  width: 90%;
  height: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

const ValidateText = styled.Text`
  color: #4bb543;
`;
