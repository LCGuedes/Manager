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
    tx.executeSql(query.select_clients_from_clients_table, [], (tx, results) =>
      getResults(results)
    );
  });
};

export const insertIntoClientsTable = (
  newClient: newClientType,
  getResults: any,
  getdbError: any
) => {
  const params = [
    newClient.clientName,
    newClient.clientTouch,
    newClient.clientStreet,
    newClient.clientApartament,
    newClient.clientBlock,
  ];
  db.transaction((tx) => {
    tx.executeSql(
      query.insert_into_clients_table,
      params,
      (tx, queryResults) => {
        getResults(queryResults);
      },
      (tx, error) => getdbError(error)
    );
  });
};

export const deleteFromClientsTable = (clientName: string) => {
  db.transaction((tx) =>
    tx.executeSql(
      query.delete_client_from_clients_table,
      [clientName],
      (tx, results) => {}
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
