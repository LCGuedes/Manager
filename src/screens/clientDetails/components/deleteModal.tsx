import styled from "styled-components/native";
import { TouchableNativeFeedback } from "react-native";

const DeleteModal = ({ openDeleteModal }: any) => {
  return (
    <TouchableNativeFeedback onPress={() => openDeleteModal(false)}>
      <Container>
        <Box>
          <TextBox>
            <P>Deletar cliente</P>
            <D>Tem certeza que quer deletar o cliente ... ?</D>
          </TextBox>
          <Input placeholder="Digite o nome do cliente" />
          <ButtonBox>
            <CancelButton>
              <BtnP>Cancelar</BtnP>
            </CancelButton>
            <Button>
              <BtnP>Deletar</BtnP>
            </Button>
          </ButtonBox>
        </Box>
      </Container>
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
  height: 200px;
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
