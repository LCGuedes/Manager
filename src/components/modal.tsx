import styled from "styled-components/native";
import { TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useState } from "react";
const DefaultModal = ({ openModal, successMsg }: any) => {
  const [successSection, setSuccessSection] = useState(false);
  return (
    <TouchableNativeFeedback onPress={() => openModal(false)}>
      {successSection ? (
        <Container>
          <ValidateModalBox>
            <ValidateMsgBox>
              <ValidateText>{successMsg}</ValidateText>
            </ValidateMsgBox>
          </ValidateModalBox>
        </Container>
      ) : (
        <Container>
          <Box>
            <Form>
              <FormBox>
                <InputBox>
                  <Input placeholder="Telefone de contato" />
                </InputBox>
                <EditButton>
                  <Feather name="edit" size={24} color="#726a95" />
                </EditButton>
              </FormBox>

              <FormBox>
                <InputBox>
                  <Input placeholder="Rua" />
                </InputBox>
                <EditButton>
                  <Feather name="edit" size={24} color="#726a95" />
                </EditButton>
              </FormBox>
            </Form>
            <ConfirmButton>
              <P>Confirmar modificações</P>
            </ConfirmButton>
          </Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default DefaultModal;

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
