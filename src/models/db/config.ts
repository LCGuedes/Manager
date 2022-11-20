import * as SQlite from "expo-sqlite";

export const DatabaseConection = {
  getConection: () => SQlite.openDatabase("miniBox_v1.db", "1"),
};
