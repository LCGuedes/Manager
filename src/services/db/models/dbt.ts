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
