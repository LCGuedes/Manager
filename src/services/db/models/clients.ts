import * as query from "../querys/clients";
import { DatabaseConection } from "../config";
import { clientType, newClientType } from "../../../types";

const db = DatabaseConection.getConection();

export const createClientsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.create_clients_table, [], (tx, results) => {});
  });
};

export const selectClientsFromTable = (getResults: any) => {
  const db = DatabaseConection.getConection();
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM clients_table", [], (tx, results) =>
      getResults(results)
    );
  });
};

export const insertIntoClientsTable = (
  newClient: newClientType,
  getResults: any
) => {
  const {
    clientName,
    clientTouch,
    clientStreet,
    clientApartament,
    clientBlock,
  } = newClient;

  const params = [
    clientName,
    clientTouch,
    clientStreet,
    clientApartament,
    clientBlock,
  ];
  db.transaction((tx) => {
    tx.executeSql(query.insert_into_clients_table, params, (tx, queryResults) =>
      getResults(queryResults)
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

export const updateClientFromTable = (
  editedClient: clientType,
  getResults: any
) => {
  const params = [
    editedClient.client_touch,
    editedClient.client_street,
    editedClient.client_apartament,
    editedClient.client_block,
    editedClient.client_name,
  ];

  db.transaction((tx) =>
    tx.executeSql(query.update_client, params, (tx, results) =>
      getResults(results)
    )
  );
};
