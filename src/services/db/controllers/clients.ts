import { clientType, newClientType } from "../../../types";
import {
  selectClientsFromTable,
  insertIntoClientsTable,
  deleteFromClientsTable,
  updateClientFromTable,
} from "../models/clients";

export const newClientController = (
  newClient: newClientType,
  handleErrorMsg: any
) => {
  insertIntoClientsTable(newClient, getResults);

  function getResults(queryResults: any) {
    if (queryResults.rowsAffected > 0) {
      handleErrorMsg("Cliente cadastrado com sucesso !");
    } else {
      handleErrorMsg("Não foi possível cadastrar o cliente");
    }
  }
};

export const selectClientsController = (setClientList: any) => {
  selectClientsFromTable(getResults);

  function getResults(results: any) {
    let clientList = [];
    for (let i = 0; i < results.rows.length; ++i)
      clientList.push(results.rows.item(i));
    setClientList(clientList);
  }
};

export const updateClientController = (editedClient: clientType) => {
  updateClientFromTable(editedClient, getResults);
  function getResults(results: any) {}
};

export const deleteClient = (clientName: string) => {
  deleteFromClientsTable(clientName);
};
