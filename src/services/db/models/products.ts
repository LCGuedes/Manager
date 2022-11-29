import * as query from "../querys/products";
import { DatabaseConection } from "../config";
import { newProductType, productType } from "../../../types";

const db = DatabaseConection.getConection();

export const createProductsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.create_products_table, [], (tx, results) => {});
  });
};

export const insertProductInProductsTable = (
  newProduct: newProductType,
  clientName: string,
  getResults: any
) => {
  const params = [newProduct.productName, newProduct.productValue, clientName];
  db.transaction((tx) => {
    tx.executeSql(query.insert_into_products_table, params, (tx, results) =>
      getResults(results)
    );
  });
};

export const selectProductsFromProductsTable = (clientName: string, getResults: any) => {
  const params = [clientName];
  db.transaction((tx) => {
    tx.executeSql(query.select_from_products_table, params, (tx, results) =>
      getResults(results)
    );
  });
};

export const updateProductInProductsTable = (editedProduct: productType) => {
  const params = [
    editedProduct.product_name,
    editedProduct.product_value,
    editedProduct.product_id,
  ];
  db.transaction((tx) =>
    tx.executeSql(query.update_product_from_products_table, params, (tx, results) => {})
  );
};

export const DeleteProductInProductsTable = (editedProduct: productType) => {
  const params = [editedProduct.product_id];
  db.transaction((tx) => {
    tx.executeSql(query.delete_product_from_products_table, params, (tx, results) => {});
  });
};
