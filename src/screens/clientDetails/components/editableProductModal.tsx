import styled from "styled-components/native";
import {
  TouchableNativeFeedback,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { productType, errorType } from "../../../types";
import {
  updateProductController,
  DeleteProductController,
} from "../../../services/db/controllers/dbt";

interface editableProductModalType {
  editableProduct: productType;
  setOpenModal: any;
}

const successStatus = {
  status: false,
  payload: "",
};

const EditableProductModal = ({
  setOpenModal,
  editableProduct,
}: editableProductModalType) => {
  const [editedProduct, setEditedProduct] = useState<productType>(editableProduct);
  const [successSection, setSuccessSection] = useState<errorType>(successStatus);

  const handleEditedProduct = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const updateEditedProduct = () => {
    updateProductController(editedProduct);
    setSuccessSection({
      ...successSection,
      status: true,
      payload: "Produto atualizado com sucesso !",
    });
  };

  const deleteEditableProduct = () => {
    DeleteProductController(editedProduct);
    setSuccessSection({
      ...successSection,
      status: true,
      payload: "Produto deletado com sucesso !",
    });
  };

  return (
    <TouchableNativeFeedback onPress={() => setOpenModal(false)}>
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
                    value={editedProduct.product_name}
                    onChange={(e) => handleEditedProduct(e, "product_name")}
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
                    value={editedProduct.product_value}
                    onChange={(e) => handleEditedProduct(e, "product_value")}
                  />
                </InputBox>
                <EditButton>
                  <Feather name="edit" size={24} color="#726a95" />
                </EditButton>
              </FormBox>
            </Form>
            <ConfirmButton onPress={updateEditedProduct}>
              <P>Atualizar produto</P>
            </ConfirmButton>
            <DeleteButton onPress={deleteEditableProduct}>
              <P>Deletar produto</P>
            </DeleteButton>
          </Box>
        </Container>
      )}
    </TouchableNativeFeedback>
  );
};

export default EditableProductModal;

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
