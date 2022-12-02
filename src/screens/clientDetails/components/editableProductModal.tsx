import styled from "styled-components/native";
import DefaultModal from "../../../components/defaultModal";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { productType, feedBackHandlingType } from "../../../types";
import {
  updateProductController,
  DeleteProductController,
} from "../../../services/db/controllers/products";

interface editableProductModalType {
  editableProduct: productType;
  setOpenModal: (state: boolean) => void;
}

const successStatus = {
  status: false,
  payload: "",
};

const EditableProductModal = ({
  setOpenModal,
  editableProduct,
}: editableProductModalType) => {
  const [editedProduct, setEditedProduct] =
    useState<productType>(editableProduct);
  const [feedBackSection, setFeedBackSection] =
    useState<feedBackHandlingType>(successStatus);

  console.log("produto", editableProduct);

  const handleEditedProduct = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string
  ) => {
    const value = e.nativeEvent.text;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const updateEditedProduct = () => {
    updateProductController(editedProduct);
    setFeedBackSection({
      ...feedBackSection,
      status: true,
      payload: "Produto atualizado com sucesso !",
    });
  };

  const deleteEditableProduct = () => {
    DeleteProductController(editedProduct);
    setFeedBackSection({
      ...feedBackSection,
      status: true,
      payload: "Produto deletado com sucesso !",
    });
  };

  return (
    <DefaultModal
      setOpenModal={setOpenModal}
      feedBack={{
        status: feedBackSection.status,
        type: "success",
        payload: feedBackSection.payload,
      }}
    >
      <Container>
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
      </Container>
    </DefaultModal>
  );
};

export default EditableProductModal;

const Container = styled.View`
  width: 100%;

  padding: 24px;
`;

const Form = styled.View``;

const FormBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InputBox = styled.View`
  width: 90%;
  margin-right: 8px;
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
  width: 100%;
  background-color: ${({ theme }) => theme.pallete.common.errorColor};
  margin-bottom: 0;
`;

const P = styled.Text`
  color: white;
`;
