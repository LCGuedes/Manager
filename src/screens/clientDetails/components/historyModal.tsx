import styled from "styled-components/native";
import { TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  updateProduct,
  DeleteProduct,
} from "../../../services/db/controllers/dbt";

const successStatus = {
  status: false,
  payload: "",
};

// coletar os produtos com os ids em outros arrays e usar isso como

const HistoryModal = ({ openModal, clientInfo }: any) => {
  const [productInfo, setProductInfo] = useState(clientInfo);
  const [successSection, setSuccessSection] = useState(successStatus);

  console.log("lista de clientes", productInfo);

  const handleProductInfo = (e: any, name: string) => {
    const value = e.nativeEvent.text;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const updateProductInfo = () => {
    updateProduct(productInfo);
    setSuccessSection({
      ...successSection,
      status: true,
      payload: "Produto atualizado com sucesso !",
    });
  };

  const deleteProductInfo = () => {
    DeleteProduct(productInfo);
    setSuccessSection({
      ...successSection,
      status: true,
      payload: "Produto deletado com sucesso !",
    });
  };

  return (
    <TouchableNativeFeedback onPress={() => openModal(false)}>
      {successSection.status ? (
        <Container>
          <ValidateModalBox>
            <ValidateMsgBox>
              <ValidateText>{successSection.payload}</ValidateText>
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
                    placeholder="Nome do produto"
                    value={productInfo.product_name}
                    onChange={(e) => handleProductInfo(e, "product_name")}
                  />
                </InputBox>
                <EditButton>
                  <Feather name="edit" size={24} color="#726a95" />
                </EditButton>
              </FormBox>

              <FormBox>
                <InputBox>
                  <Input
                    placeholder="Valor do produto"
                    value={productInfo.product_value}
                    onChange={(e) => handleProductInfo(e, "product_value")}
                  />
                </InputBox>
                <EditButton>
                  <Feather name="edit" size={24} color="#726a95" />
                </EditButton>
              </FormBox>
            </Form>
            <ConfirmButton onPress={updateProductInfo}>
              <P>Atualizar produto</P>
            </ConfirmButton>
            <DeleteButton onPress={deleteProductInfo}>
              <P>Deletar produto</P>
            </DeleteButton>
          </Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default HistoryModal;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.View`
  width: 90%;
  // height: 260px;
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.View``;

const FormBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InputBox = styled.View`
  width: 90%;
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
  margin-bottom: 12px;
`;

const DeleteButton = styled(ConfirmButton)`
  background-color: ${({ theme }) => theme.pallete.common.errorColor};
  margin-bottom: 0;
`;

const P = styled.Text`
  color: white;
`;

const ValidateMsgBox = styled.View`
  width: 80%;
  height: 60px;
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
