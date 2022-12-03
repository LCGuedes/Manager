import styled from "styled-components/native";
import DefaultModal from "../../../components/defaultModal";
import { useState } from "react";
import { deleteClient } from "../../../services/db/controllers/clients";
import { feedBackHandlingType } from "../../../types";
import { useNavigation } from "@react-navigation/native";

interface deleteModalType {
  openDeleteModal: (state: boolean) => void;
  clientName: string;
}

const feedBackStatus = {
  status: false,
  payload: "",
};

const DeleteModal = ({ openDeleteModal, clientName }: deleteModalType) => {
  const [inputClientName, setInputClientName] = useState<string>("");
  const [handleFeedBack, setHandleFeedBack] =
    useState<feedBackHandlingType>(feedBackStatus);
  const [openFeedBackSection, setopenFeedBackSection] =
    useState<boolean>(false);

  const navigation = useNavigation();

  const handleDeleteClient = () => {
    if (inputClientName === "") {
      setHandleFeedBack({
        ...handleFeedBack,
        status: true,
        payload: "Digite o nome do cliente",
      });
    } else if (inputClientName !== clientName) {
      setHandleFeedBack({
        ...handleFeedBack,
        status: true,
        payload: "Digite corretamente o nome do cliente",
      });
    } else {
      deleteClient(inputClientName);
      setopenFeedBackSection(true);
      navigation.navigate("Home");
    }
  };

  return (
    <DefaultModal
      feedBack={{
        status: openFeedBackSection,
        type: "success",
        payload: "Cliente deletado com sucesso !",
      }}
      setOpenModal={openDeleteModal}
    >
      <Container>
        <TextBox>
          <P>Deletar cliente</P>
          <D>Tem certeza que quer deletar o cliente {<A>{clientName}</A>} ?</D>
        </TextBox>
        {handleFeedBack.status ? (
          <ErrorMsg>{handleFeedBack.payload}</ErrorMsg>
        ) : null}
        <Input
          placeholder="Digite o nome do cliente"
          onChange={(e) => setInputClientName(e.nativeEvent.text)}
        />

        <ButtonBox>
          <CancelButton>
            <BtnP onPress={() => openDeleteModal(false)}>Cancelar</BtnP>
          </CancelButton>
          <Button>
            <BtnP onPress={handleDeleteClient}>Deletar</BtnP>
          </Button>
        </ButtonBox>
      </Container>
    </DefaultModal>
  );
};

export default DeleteModal;

const Container = styled.View`
  padding: 24px;
`;

const TextBox = styled.View`
  margin-bottom: 12px;
`;

const P = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
`;

const D = styled.Text`
  color: rgba(0, 0, 0, 0.4);
`;

const Input = styled.TextInput`
  border: 1px solid red;

  height: 40px;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
`;

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

const A = styled.Text`
  color: ${({ theme }) => theme.pallete.common.errorColor};
`;

const ErrorMsg = styled.Text`
  color: ${({ theme }) => theme.pallete.common.errorColor};
  margin-bottom: 6px;
`;
