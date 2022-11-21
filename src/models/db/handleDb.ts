import * as query from "./querys";
import { DatabaseConection } from "./config";

const db = DatabaseConection.getConection();

export const createUserTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.selectTable("user_table"), [], (tx, res) => {
      console.log("user table item", res.rows.length);
      if (res.rows.length == 0) {
        tx.executeSql(query.dropTable("user_table"), []);
        tx.executeSql(query.createUsersTable, []);
      }
    });
  });
};

export const registerUser = (user: string, password: string) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO user_table (user_name, USER_password) VALUES(?,?)",
      [user, password],
      (tx, res) => {
        console.log("register results =>>", res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log("Usuário registrado com sucesso !");
        } else {
          console.log("Erro ao tentar registrar usuário");
        }
      }
    );
  });
};

export const loginUser = (user: string, password: string) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM user_table WHERE user_name = ? AND USER_password = ?`,
      [user, password],
      (tx, results) => {
        var len = results.rows.length;
        console.log("len", len);
        if (len > 0) {
          console.log("login resultado => ", results.rows.item(0));
        } else {
          console.log("Usuário não encontrado !");
        }
      }
    );
  });
};

export const createClientsTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.selectTable("clients_table"), [], (tx, res) => {
      console.log("clients table", res.rows.length);
      if (res.rows.length == 0) {
        tx.executeSql(query.dropTable("clients_table"), []);
        tx.executeSql(query.createClientsTable, []);
      }
    });
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
      "INSERT INTO clients_table (name, touch, street, apartament, block) VALUES(?,?,?,?,?)",
      [name, touch, street, apartament, block],
      (tx, res) => {
        console.log("addClientInTable  results =>>", res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log("cliente registrado com sucesso !");
        } else {
          console.log("Erro ao tentar registrar cliente");
        }
      }
    );
  });
};

export const showClientsTable = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from clients_table", [], (tx, res) => {
      /*       console.log("show clients_table ==>", res.rows._array);
       */ return res.rows._array;
    });
  });
};

export const showTables = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from user_table", [], (tx, res) => {
      console.log("show user_table ==>", res.rows._array);
    });
  });
};
