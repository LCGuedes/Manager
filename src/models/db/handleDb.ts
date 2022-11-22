import * as query from "./querys";
import { DatabaseConection } from "./config";

const db = DatabaseConection.getConection();

export const createUserTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      query.create_user_table,
      [],
      (tx, res) => {
        console.log("user table item", res.rows.length);
      },
      function (tx, err) {
        console.log("create user table error =>>", err);
      }
    );
  });
};

export const registerUser = (user: string, password: string) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO user_table (user_name, user_password) VALUES(?,?)",
      [user, password],
      (tx, res) => {
        console.log("register results =>>", res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log("Usuário registrado com sucesso!");
        } else {
          console.log("Erro ao tentar registrar usuário");
        }
      },
      function (tx, err) {
        console.log("register user error =>>", err);
      }
    );
  });
};

export const loginUser = (user: string, password: string) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM user_table WHERE user_name = ? AND user_password = ?`,
      [user, password],
      (tx, results) => {
        var len = results.rows.length;
        console.log("login results ==>", len);
        if (len > 0) {
          console.log("login resultado => ", results.rows.item(0));
        } else {
          console.log("Usuário não encontrado !");
        }
      },
      function (tx, err) {
        console.log("login user error =>>", err);
      }
    );
  });
};

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

export const addClientInTheTable = (
  name: string,
  touch: string,
  street: string,
  apartament: string,
  block: string
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO clients_table (client_name, client_touch, client_street, client_apartament, client_block) VALUES(?,?,?,?,?)",
      [name, touch, street, apartament, block],
      (tx, res) => {
        console.log("addClientInTable  results =>>", res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log("cliente registrado com sucesso !");
        } else {
          console.log("Erro ao tentar registrar cliente");
        }
      },
      function (tx, err) {
        console.log("adicionar cliente error =>>", err);
      }
    );
  });
};

export const createDebtTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      query.create_debt_table,
      [],
      (tx, res) => {
        console.log("debt table ==>", res.rows.length);
      },
      function (tx, err) {
        console.log("criar dbt table error =>>", err);
      }
    );
  });
};

export const addDebtInTheTable = (
  product_name: string,
  product_value: string,
  product_client: string
) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO debt_table (product_name, product_value, product_client) VALUES (?,?,?)",
      [product_name, product_value, product_client],
      (tx, res) => {
        console.log("addDebtInTable  results =>>", res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log("debito registrado com sucesso !");
        } else {
          console.log("Erro ao tentar registrar debito");
        }
      },
      function (tx, err) {
        console.log("adicionar debito error =>>", err);
      }
    );
  });
};
