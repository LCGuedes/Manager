import * as query from "../querys/users";
import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

export const createUserTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.create_user_table, [], (tx, res) => {});
  });
};
