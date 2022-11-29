import { DatabaseConection } from "./config";

const db = DatabaseConection.getConection();

export const showTable = (name: string) => {
  db.transaction((tx) => {
    tx.executeSql(select_table(name), [], (tx, res) => {
      console.log(`${name} =>>`, res.rows._array);
    });
  });
};

export const dropTable = (name: string) => {
  db.transaction((tx) =>
    tx.executeSql(drop_table(name), [], (tx, res) => {
      console.log("drop table results =>>", res);
    })
  );
};

const select_table = (name: string) =>
  `SELECT name FROM sqlite_master WHERE type='table' AND name='${name}'`;

const drop_table = (name: string) => `DROP TABLE IF EXISTS ${name}`;
