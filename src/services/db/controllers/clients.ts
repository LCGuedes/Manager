import {
  selectClientsFromTable,
  insertIntoClientsTable,
  deleteFromClientsTable,
  updateClientFromTable,
} from "../models/clients";

export const addClientInTheTable = (
  name: string,
  touch: string,
  street: string,
  apartament: string,
  block: string,
  handleErrorMsg: any
) => {
  insertIntoClientsTable(
    name,
    touch,
    street,
    apartament,
    block,
    queryFeedBack,
    dbFeedBack
  );

  function queryFeedBack(queryResults: any) {
    if (queryResults.rowsAffected > 0) {
      handleErrorMsg("Cliente cadastrado com sucesso !");
    } else {
      handleErrorMsg("Não foi possível cadastrar o cliente");
    }
  }

  function dbFeedBack(dbError: any) {
    console.log("db error", dbError);
  }
};

export const selectClients = (setClientList: any) => {
  selectClientsFromTable(getResults);

  function getResults(results: any) {
    let clientList = [];
    for (let i = 0; i < results.rows.length; ++i)
      clientList.push(results.rows.item(i));
    setClientList(clientList);
  }
};

export const updateClient = (clientInfo: any) => {
  console.log("dados no controller", clientInfo);
  updateClientFromTable(clientInfo);
};

export const deleteClient = (clientName: string) => {
  deleteFromClientsTable(clientName);
};
