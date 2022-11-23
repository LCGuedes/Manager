import * as query from "../querys";
import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

export const createUserTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      query.create_user_table,
      [],
      (tx, res) => {
        console.log("user table item", res.rows.length);
      },
      function (tx, err) {
        console.log("create user table error =>>", err);
      }
    );
  });
};
