import { useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import DeleteModal from "./components/deleteModal";
import EditModal from "./components/editModal";

export default function Description({ clientInfo }: any) {
  const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <Container>
      <Box>
        <P>Nome:</P>
        <D>{clientInfo.client_name}</D>
      </Box>
      <Box>
        <P>Telefone de contato:</P>
        <D>{clientInfo.client_touch}</D>
      </Box>
      <Box>
        <P>Rua: </P>
        <D>{clientInfo.client_street}</D>
      </Box>
      <Box>
        <P>Quadra: </P>
        <D>{clientInfo.client_apartament}</D>
      </Box>

      <Box>
        <P>Casa:</P>
        <D>{clientInfo.client_block}</D>
      </Box>

      <ButtonsBox>
        <OptionsButton onPress={() => setOpenEditModal(true)}>
          <B>Editar informações</B>
        </OptionsButton>
        <Modal
          animationType="fade"
          transparent
          visible={openEditModal}
          onRequestClose={() => setOpenEditModal(false)}
        >
          <EditModal
            setOpenEditModal={setOpenEditModal}
            clientInfo={clientInfo}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent
          visible={openDeleteModal}
          onRequestClose={() => setDeleteModal(false)}
        >
          <DeleteModal
            openDeleteModal={setDeleteModal}
            clientName={clientInfo.client_name}
          />
        </Modal>
        <OptionsButton onPress={() => setDeleteModal(true)}>
          <B>Deletar cliente</B>
        </OptionsButton>
      </ButtonsBox>
    </Container>
  );
}

const Container = styled.View`
  padding: 24px;
`;

const Box = styled.View`
  margin-bottom: 12px;
`;

const P = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
`;

const D = styled.Text`
  margin-left: 4px;
`;

const ButtonsBox = styled.View`
  flex-direction: row;
`;

const OptionsButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  elevation: 4;
  background-color: ${(props) => props.theme.pallete.primary.main};
  width: 150px;
  height: 36px;
  border-radius: 12px;
  margin-right: 8px;
`;

const B = styled.Text`
  color: white;
`;
