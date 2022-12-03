import { useState, useEffect } from "react";
import { Modal, FlatList, ListRenderItemInfo } from "react-native";
import styled from "styled-components/native";
import DeleteModal from "./components/deleteModal";
import EditModal from "./components/editModal";
import { clientType } from "../../types";
import { selectClientsController } from "../../services/db/controllers/clients";

interface ClientType {
  client: clientType;
}

const ClientDescription = ({ client }: ClientType) => {
  const [clientList, setClientList] = useState<clientType[]>([]);

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    selectClientsController(setClientList);
  }, [openEditModal]);

  const rightClient = clientList.filter(
    (item) => item.client_id === client.client_id
  );

  const renderClient = ({ item }: ListRenderItemInfo<clientType>) => {
    return (
      <>
        <Box>
          <P>Nome:</P>
          <D>{item.client_name}</D>
        </Box>
        <Box>
          <P>Telefone de contato:</P>
          <D>{item.client_touch}</D>
        </Box>
        <Box>
          <P>Rua: </P>
          <D>{item.client_street}</D>
        </Box>
        <Box>
          <P>Quadra: </P>
          <D>{item.client_apartament}</D>
        </Box>

        <Box>
          <P>Casa:</P>
          <D>{item.client_block}</D>
        </Box>
      </>
    );
  };

  return (
    <Container>
      <FlatList data={rightClient} renderItem={renderClient} />

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
          <EditModal setOpenEditModal={setOpenEditModal} client={rightClient} />
        </Modal>
        <Modal
          animationType="fade"
          transparent
          visible={openDeleteModal}
          onRequestClose={() => setOpenDeleteModal(false)}
        >
          <DeleteModal
            openDeleteModal={setOpenDeleteModal}
            clientName={client.client_name}
          />
        </Modal>
        <OptionsButton onPress={() => setOpenDeleteModal(true)}>
          <B>Deletar cliente</B>
        </OptionsButton>
      </ButtonsBox>
    </Container>
  );
};

export default ClientDescription;

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
