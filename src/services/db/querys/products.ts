export const create_products_table =
  "CREATE TABLE IF NOT EXISTS products_table (" +
  "product_id INTEGER PRIMARY KEY AUTOINCREMENT, " +
  "product_name VARCHAR(255), " +
  "product_value FLOAT, " +
  "product_client VARCHAR(255), " +
  "FOREIGN KEY (product_client) REFERENCES clients_table (client_name) );";

export const insert_into_products_table =
  "INSERT INTO products_table (product_name, product_value, product_client) VALUES (?,?,?)";

export const select_from_products_table =
  "SELECT * FROM products_table WHERE product_client=?";

export const update_product_from_products_table =
  "UPDATE products_table SET product_name=?, product_value=? WHERE product_id=?";

export const delete_product_from_products_table =
  "DELETE FROM products_table WHERE product_id=?";
