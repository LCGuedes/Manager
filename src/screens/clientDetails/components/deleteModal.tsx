import styled from "styled-components/native";
import { TouchableNativeFeedback } from "react-native";
import { useState } from "react";
import { deleteClient } from "../../../services/db/controllers/clients";

const errorStatus = {
  status: false,
  payload: "",
};

const DeleteModal = ({ openDeleteModal, clientName }: any) => {
  const [inputClientName, setInputClientName] = useState("");
  const [handleError, setHandleError] = useState(errorStatus);
  const [successSection, setSuccessSection] = useState(false);

  const handleDeleteClient = () => {
    if (inputClientName === "") {
      setHandleError({
        ...handleError,
        status: true,
        payload: "Digite o nome do cliente",
      });
    } else if (inputClientName !== clientName) {
      setHandleError({
        ...handleError,
        status: true,
        payload: "Digite corretamente o nome do cliente",
      });
    } else {
      deleteClient(inputClientName);
      setSuccessSection(true);
    }
  };

  return (
    <TouchableNativeFeedback onPress={() => openDeleteModal(false)}>
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
            <TextBox>
              <P>Deletar cliente</P>
              <D>
                Tem certeza que quer deletar o cliente {<A>{clientName}</A>} ?
              </D>
            </TextBox>
            <Input
              placeholder="Digite o nome do cliente"
              onChange={(e) => setInputClientName(e.nativeEvent.text)}
            />
            {handleError.status ? (
              <ErrorMsg>{handleError.payload}</ErrorMsg>
            ) : null}
            <ButtonBox>
              <CancelButton>
                <BtnP onPress={() => openDeleteModal(false)}>Cancelar</BtnP>
              </CancelButton>
              <Button>
                <BtnP onPress={handleDeleteClient}>Deletar</BtnP>
              </Button>
            </ButtonBox>
          </Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default DeleteModal;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.View`
  width: 90%;
  height: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  border: 1px solid red;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  padding: 12px;
`;

const TextBox = styled.View``;

const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.pallete.common.errorColor};
  align-items: center;
  justify-content: center;
`;

const CancelButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.4);
`;

const BtnP = styled.Text`
  color: white;
`;

const P = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;
`;

const D = styled.Text`
  color: rgba(0, 0, 0, 0.4);
`;

const A = styled.Text`
  color: ${({ theme }) => theme.pallete.common.errorColor};
`;

const ErrorMsg = styled.Text`
  color: ${({ theme }) => theme.pallete.common.errorColor};
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
