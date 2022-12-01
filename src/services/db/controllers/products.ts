import {
  selectProductsFromProductsTable,
  insertProductInProductsTable,
  updateProductInProductsTable,
  DeleteProductInProductsTable,
} from "../models/products";

import { productType, newProductType } from "../../../types";

export const newProductController = (
  newProduct: newProductType,
  clientName: string,
  handleErrorMsg: (status: string, errorMsg: string) => void
) => {
  insertProductInProductsTable(newProduct, clientName, getResults, getdbError);

  function getResults(results: any) {
    if (results.rowsAffected > 0) {
      handleErrorMsg("success", "Produto cadastrado com sucesso !");
    } else {
      handleErrorMsg("fail", "Não foi possível cadastrar o produto");
    }
  }

  function getdbError(error: any) {
    console.log(error);
  }
};

export const selectProductsController = (
  clientName: string,
  setProductList: any
) => {
  selectProductsFromProductsTable(clientName, getResults);

  function getResults(results: any) {
    let productList = <productType[]>[];

    for (let i = 0; i < results.rows.length; ++i) {
      productList.push(results.rows.item(i));
    }
    setProductList(productList);
  }
};

export const updateProductController = (editedProduct: productType) => {
  updateProductInProductsTable(editedProduct);
};

export const DeleteProductController = (editedProduct: productType) => {
  DeleteProductInProductsTable(editedProduct);
};
