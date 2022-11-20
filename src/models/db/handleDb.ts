import * as query from "./querys";
import { DatabaseConection } from "./config";

const db = DatabaseConection.getConection();

export const createUserTable = () => {
  db.transaction((tx) => {
    tx.executeSql(query.selectTable("user_table"), [], (tx, res) => {
      console.log("item", res.rows.length);
      if (res.rows.length == 0) {
        tx.executeSql(query.dropTable("user_table"), []);
        tx.executeSql(query.createUsersTableQuery, []);
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

export const showTables = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from user_table", [], (tx, res) => {
      console.log("show table ==>", res.rows._array);
    });
  });
};
