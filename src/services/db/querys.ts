export const create_user_table =
  "CREATE TABLE IF NOT EXISTS user_table ( " +
  "user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
  "user_name VARCHAR(255) UNIQUE NOT NULL, " +
  "user_password VARCHAR(255) NOT NULL );";

export const create_debt_table =
  "CREATE TABLE IF NOT EXISTS debt_table (" +
  "product_id INTEGER PRIMARY KEY AUTOINCREMENT, " +
  "product_name VARCHAR(255), " +
  "product_value VARCHAR(255), " +
  "product_client VARCHAR(255), " +
  "FOREIGN KEY (product_client) REFERENCES clients_table (client_name) );";

export const select_table = (name: string) =>
  `SELECT name FROM sqlite_master WHERE type='table' AND name='${name}'`;

export const drop_table = (name: string) => `DROP TABLE IF EXISTS ${name}`;
