import { clientType, newClientType } from "../../../types";
import {
  selectClientsFromTable,
  insertIntoClientsTable,
  deleteFromClientsTable,
  updateClientFromTable,
} from "../models/clients";

export const newClientController = (
  newClient: newClientType,
  handleErrorMsg: (status: string, errorMsg: string) => void
) => {
  insertIntoClientsTable(newClient, getResults, getdbError);

  function getResults(queryResults: any) {
    if (queryResults.rowsAffected > 0) {
      handleErrorMsg("success", "Cliente cadastrado com sucesso !");
    } else {
      handleErrorMsg("fail", "Não foi possível cadastrar o cliente");
    }
  }

  function getdbError(error: any) {
    if (error) {
      handleErrorMsg("fail", "O cliente já existe");
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
