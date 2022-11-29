export const create_clients_table =
  "CREATE TABLE IF NOT EXISTS clients_table ( " +
  "client_id INTEGER PRIMARY KEY AUTOINCREMENT, " +
  "client_name VARCHAR(255) UNIQUE NOT NULL, " +
  "client_touch VARCHAR(255), " +
  "client_street VARCHAR(255), " +
  "client_apartament VARCHAR(255), " +
  "client_block VARCHAR(255) );";

export const select_clients_from_clients_table = "SELECT * FROM clients_table";

export const insert_into_clients_table =
  "INSERT INTO clients_table ( " +
  "client_name, " +
  "client_touch, " +
  "client_street, " +
  "client_apartament, " +
  "client_block) " +
  "VALUES(?,?,?,?,?)";

export const update_client =
  "UPDATE clients_table SET " +
  "client_touch= ?, " +
  "client_street= ?, " +
  "client_apartament= ?, " +
  "client_block= ? " +
  "WHERE client_name= ?";

export const delete_client_from_clients_table =
  "DELETE FROM clients_table WHERE client_name=?";
