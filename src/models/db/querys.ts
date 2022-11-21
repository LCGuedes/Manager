export const createUsersTable =
  "CREATE TABLE IF NOT EXISTS user_table (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(255), USER_password VARCHAR(255));";

export const createClientsTable =
  "CREATE TABLE IF NOT EXISTS clients_table (client_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), touch VARCHAR(255), street VARCHAR(255), apartament VARCHAR(255), block VARCHAR(255), user_id INTEGER, CONSTRAINT fk_UserClients FOREIGN KEY (user_id) REFERENCES createUsersTable (user_id), product_id INTEGER, CONSTRAINT fk_HisClient FOREIGN KEY (product_id) REFERENCES createDebtHistoryTable (id_product));";

export const createDebtHistoryTable =
  "CREATE TABLE IF NOT EXISTS" +
  "DebtHistory" +
  "(id_product INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_value TEXT);";

export const selectTable = (name: string) =>
  `SELECT name FROM sqlite_master WHERE type='table' AND name='${name}'`;

export const dropTable = (name: string) => `DROP TABLE IF EXISTS ${name}`;
