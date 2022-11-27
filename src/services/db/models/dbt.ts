import * as query from "../querys";
import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

export const createDebtTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      query.create_debt_table,
      [],
      (tx, res) => {
        console.log("debt table ==>", res.rows.length);
      },
      function (tx, err) {
        console.log("criar dbt table error =>>", err);
      }
    );
  });
};

export const updateProductInTable = (productInfo: any) => {
  const params = [
    productInfo.product_name,
    productInfo.product_value,
    productInfo.product_id,
  ];
  db.transaction((tx) =>
    tx.executeSql(
      "UPDATE debt_Table SET product_name=?, product_value=? WHERE product_id=?",
      params,
      (tx, results) => {
        console.log("results", results.rowsAffected);
      }
    )
  );
};

export const DeleteProductInTable = (productInfo: any) => {
  const params = [productInfo.product_id];
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM debt_table WHERE product_id=?",
      params,
      (tx, results) => {
        console.log("res", results);
      }
    );
  });
};
