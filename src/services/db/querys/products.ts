export const create_debt_table =
  "CREATE TABLE IF NOT EXISTS debt_table (" +
  "product_id INTEGER PRIMARY KEY AUTOINCREMENT, " +
  "product_name VARCHAR(255), " +
  "product_value VARCHAR(255), " +
  "product_client VARCHAR(255), " +
  "FOREIGN KEY (product_client) REFERENCES clients_table (client_name) );";

export const insert_into_product_table =
  "INSERT INTO debt_table (product_name, product_value, product_client) VALUES (?,?,?)";

export const select_from_product_table =
  "SELECT * FROM debt_table WHERE product_client=?";

export const update_product_from_product_table =
  "UPDATE debt_Table SET product_name=?, product_value=? WHERE product_id=?";

export const delete_product_from_product_table =
  "DELETE FROM debt_table WHERE product_id=?";
