import { insertIntoClientsTable } from "../models/clients";

export const addClientInTheTable = (
  name: string,
  touch: string,
  street: string,
  apartament: string,
  block: string,
  handleErrorMsg: any
) => {
  insertIntoClientsTable(name, touch, street, apartament, block, queryFeedBack, dbFeedBack);

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
