import * as query from "./querys";
import { DatabaseConection } from "./config";

const db = DatabaseConection.getConection();

export const showTable = (name: string) => {
  db.transaction((tx) => {
    tx.executeSql(query.select_table(name), [], (tx, res) => {
      console.log(`${name} =>>`, res.rows._array);
    });
  });
};

export const dropTable = (name: string) => {
  db.transaction((tx) =>
    tx.executeSql(query.drop_table(name), [], (tx, res) => {
      console.log("drop table results =>>", res);
    })
  );
};
