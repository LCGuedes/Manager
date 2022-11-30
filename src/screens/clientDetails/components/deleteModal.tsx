import styled from "styled-components/native";
import DefaultModal from "../../../components/defaultModal";
import { useState } from "react";
import { deleteClient } from "../../../services/db/controllers/clients";
import { feedBackHandlingType } from "../../../types";

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
    }
  };

  return (
    <DefaultModal
      openFeedBackSection={openFeedBackSection}
      setOpenModal={openDeleteModal}
      feedBackMsg={"Cliente deletado com sucesso !"}
    >
      <TextBox>
        <P>Deletar cliente</P>
        <D>Tem certeza que quer deletar o cliente {<A>{clientName}</A>} ?</D>
      </TextBox>
      <Input
        placeholder="Digite o nome do cliente"
        onChange={(e) => setInputClientName(e.nativeEvent.text)}
      />
      {handleFeedBack.status ? (
        <ErrorMsg>{handleFeedBack.payload}</ErrorMsg>
      ) : null}
      <ButtonBox>
        <CancelButton>
          <BtnP onPress={() => openDeleteModal(false)}>Cancelar</BtnP>
        </CancelButton>
        <Button>
          <BtnP onPress={handleDeleteClient}>Deletar</BtnP>
        </Button>
      </ButtonBox>
    </DefaultModal>
  );
};

export default DeleteModal;

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
