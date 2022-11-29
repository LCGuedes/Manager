import * as query from "../querys/products";
import { DatabaseConection } from "../config";
import { newProductType, productType } from "../../../types";

const db = DatabaseConection.getConection();

export const createDebtTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.create_debt_table, [], (tx, results) => {});
  });
};

export const insertProductInTable = (
  newProduct: newProductType,
  clientName: string,
  getResults: any
) => {
  const { productName, productValue } = newProduct;
  const params = [productName, productValue, clientName];
  db.transaction((tx) => {
    tx.executeSql(query.insert_into_product_table, params, (tx, results) =>
      getResults(results)
    );
  });
};

export const selectProductsFromTable = (
  clientName: string,
  getResults: any
) => {
  const params = [clientName];
  db.transaction((tx) => {
    tx.executeSql(query.select_from_product_table, params, (tx, results) =>
      getResults(results)
    );
  });
};

export const updateProductInTable = (editedProduct: productType) => {
  const params = [
    editedProduct.product_name,
    editedProduct.product_value,
    editedProduct.product_id,
  ];
  db.transaction((tx) =>
    tx.executeSql(
      query.update_product_from_product_table,
      params,
      (tx, results) => {}
    )
  );
};

export const DeleteProductInTable = (editedProduct: productType) => {
  const params = [editedProduct.product_id];
  db.transaction((tx) => {
    tx.executeSql(
      query.delete_product_from_product_table,
      params,
      (tx, results) => {
        console.log("res", results);
      }
    );
  });
};
