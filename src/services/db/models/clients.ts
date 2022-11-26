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

export const deleteFromClientsTable = (clientName: string) => {
  db.transaction((tx) =>
    tx.executeSql(
      "DELETE FROM clients_table WHERE client_name=?",
      [clientName],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log("client deletado");
        } else {
          console.log("digite um client existente");
        }
      }
    )
  );
};

export const updateClientFromTable = (clientInfo: any) => {
  console.log("dados no model", clientInfo);
  const {
    client_name,
    client_touch,
    client_street,
    client_apartament,
    client_block,
  } = clientInfo;

  db.transaction((tx) =>
    tx.executeSql(
      "UPDATE clients_table SET client_touch= ?, client_street= ?, client_apartament= ?, client_block= ?  WHERE client_name= ?",
      [
        client_touch,
        client_street,
        client_apartament,
        client_block,
        client_name,
      ],
      (tx, results) => {
        console.log("roll", results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log("editado com sucesso !");
        } else {
          console.log("n foi possivel");
        }
      },
      (tx, error) => {
        console.log(error);
      }
    )
  );
};

//UPDATE clients_table set client_name=?, client_touch=?, client_street=?, client_apartament=?, client_block=? WHERE client_name=?
