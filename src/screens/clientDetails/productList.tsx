import styled from "styled-components/native";
import { View, Modal } from "react-native";
import EditableProductModal from "./components/editableProductModal";
import { useState, useEffect } from "react";
import { selectProductsController } from "../../services/db/controllers/products";
import { productType, clientType } from "../../types";

const mockEditedProduct = {
  product_id: 0,
  product_name: "",
  product_value: "",
  product_client: "",
};

interface ClientType {
  client: clientType;
}

interface cardType {
  productList: productType[];
  openModal: boolean;
  setOpenModal: any;
}

const ProductList = ({ client }: ClientType) => {
  const [productList, setProductList] = useState<productType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    selectProductsController(client.client_name, setProductList);
  }, [openModal]);

  return (
    <Container>
      <Card productList={productList} openModal={openModal} setOpenModal={setOpenModal} />
    </Container>
  );
};

const Card = ({ productList, openModal, setOpenModal }: cardType) => {
  const [editableProduct, setEditableProduct] = useState<productType>(mockEditedProduct);

  const getEditableProduct = (product: productType) => {
    setEditableProduct(product);
  };

  return (
    <>
      {productList.map((item: productType) => (
        <View key={item.product_id}>
          <Box onPress={() => (setOpenModal(true), getEditableProduct(item))}>
            <P>{item.product_name}</P>
            <P>{`R$ ${item.product_value}`}</P>
          </Box>
        </View>
      ))}
      <Modal
        animationType="fade"
        transparent
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <EditableProductModal
          setOpenModal={setOpenModal}
          editableProduct={editableProduct}
        />
      </Modal>
    </>
  );
};

export default ProductList;

const Container = styled.View`
  padding: 12px;
`;

const Box = styled.TouchableOpacity`
  elevation: 2;
  background-color: white;
  margin-bottom: 8px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

const P = styled.Text`
  color: ${({ theme }) => theme.pallete.primary.main};
`;
