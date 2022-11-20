export const createUsersTableQuery =
  "CREATE TABLE IF NOT EXISTS user_table (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(255), USER_password VARCHAR(255));";

export const createClientsTable =
  "CREATE TABLE IF NOT EXISTS" +
  "Clients" +
  "(id_client INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, touch TEXT, street TEXT, apartament TEXT, block TEXT, id_user INTEGER, CONSTRAINT fk_UserClients FOREIGN KEY (id_user) REFERENCES createUsersTable (id_user), id_product INTEGER, CONSTRAINT fk_HisClient FOREIGN KEY (id_product) REFERENCES createDebtHistoryTable (id_product));";

export const createDebtHistoryTable =
  "CREATE TABLE IF NOT EXISTS" +
  "DebtHistory" +
  "(id_product INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_value TEXT);";

export const selectTable = (name: string) =>
  `SELECT name FROM sqlite_master WHERE type='table' AND name='${name}'`;

export const dropTable = (name: string) => `DROP TABLE IF EXISTS ${name}`;
