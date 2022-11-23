import * as query from "../querys";
import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

export const createClientsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      query.create_clients_table,
      [],
      (tx, res) => {
        console.log("clients table", res.rows.length);
      },
      function (tx, err) {
        console.log("create clients table error =>>", err);
      }
    );
  });
};

export const insertIntoClientsTable = (
  name: string,
  touch: string,
  street: string,
  apartament: string,
  block: string,
  queryFeedBack: any,
  dbFeedBack: any
) => {
  db.transaction((tx) => {
    tx.executeSql(
      query.insert_into_clients_table,
      [name, touch, street, apartament, block],
      (tx, queryResults) => queryFeedBack(queryResults),
      (tx, dbError) => dbFeedBack(dbError)
    );
  });
};
