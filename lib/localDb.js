import mysql from "mysql2/promise";

let pool;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.LOCAL_DB_HOST || "127.0.0.1",
      port: Number(process.env.LOCAL_DB_PORT || 3306),
      user: process.env.LOCAL_DB_USER || "root",
      password: process.env.LOCAL_DB_PASSWORD || "",
      database: process.env.LOCAL_DB_NAME || "montutravel",
      connectTimeout: Number(process.env.LOCAL_DB_CONNECT_TIMEOUT || 1200),
      waitForConnections: true,
      connectionLimit: Number(process.env.LOCAL_DB_CONNECTION_LIMIT || 10),
      charset: "utf8mb4",
      dateStrings: true,
    });
  }
  return pool;
}

export async function localQuery(sql, params = []) {
  const [rows] = await getPool().execute(sql, params);
  return rows;
}

export async function localHealthCheck() {
  await localQuery("SELECT 1 AS ok");
  return true;
}

export { getPool };
