import styled from "styled-components/native";
import { View, Modal, FlatList, ListRenderItemInfo } from "react-native";
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

const ProductList = ({ client }: ClientType) => {
  const [productList, setProductList] = useState<productType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editableProduct, setEditableProduct] =
    useState<productType>(mockEditedProduct);

  useEffect(() => {
    selectProductsController(client.client_name, setProductList);
  }, [openModal]);

  const renderProduct = ({ item }: ListRenderItemInfo<productType>) => {
    return (
      <View key={item.product_id}>
        <Box onPress={() => (setOpenModal(true), setEditableProduct(item))}>
          <P>{item.product_name}</P>
          <P>{`R$ ${item.product_value}`}</P>
        </Box>
      </View>
    );
  };

  return (
    <Container>
      <FlatlistBox>
        <FlatList
          data={productList}
          renderItem={renderProduct}
          showsVerticalScrollIndicator={false}
        />
      </FlatlistBox>
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
    </Container>
  );
};

export default ProductList;

const Container = styled.View`
  padding: 12px;
`;

const FlatlistBox = styled.View`
  height: 77%;
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
