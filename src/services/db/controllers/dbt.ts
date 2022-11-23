import { DatabaseConection } from "../config";

const db = DatabaseConection.getConection();

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
