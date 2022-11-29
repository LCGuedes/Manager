import {
  selectProductsFromTable,
  insertProductInTable,
  updateProductInTable,
  DeleteProductInTable,
} from "../models/dbt";

import { productType, newProductType } from "../../../types";

export const newProductController = (newProduct: newProductType, clientName: string) => {
  insertProductInTable(newProduct, clientName, getResults);

  function getResults(results: any) {}
};

export const selectProductsController = (clientName: string, setProductList: any) => {
  selectProductsFromTable(clientName, getResults);

  function getResults(results: any) {
    let productList = <productType[]>[];

    for (let i = 0; i < results.rows.length; ++i) {
      productList.push(results.rows.item(i));
    }
    setProductList(productList);
  }
};

export const updateProductController = (editedProduct: productType) => {
  updateProductInTable(editedProduct);
};

export const DeleteProductController = (editedProduct: productType) => {
  DeleteProductInTable(editedProduct);
};
