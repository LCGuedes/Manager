export const create_user_table =
  "CREATE TABLE IF NOT EXISTS user_table ( " +
  "user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
  "user_name VARCHAR(255) UNIQUE NOT NULL, " +
  "user_password VARCHAR(255) NOT NULL );";
