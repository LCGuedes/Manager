import {
  selectProductsFromProductsTable,
  insertProductInProductsTable,
  updateProductInProductsTable,
  DeleteProductInProductsTable,
} from "../models/products";

import { productType, newProductType } from "../../../types";

export const newProductController = (newProduct: newProductType, clientName: string) => {
  insertProductInProductsTable(newProduct, clientName, getResults);

  function getResults(results: any) {}
};

export const selectProductsController = (clientName: string, setProductList: any) => {
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
