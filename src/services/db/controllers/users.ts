import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

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
