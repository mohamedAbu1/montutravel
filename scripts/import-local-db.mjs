import fs from "node:fs/promises";
import path from "node:path";
import mysql from "mysql2/promise";

const root = process.cwd();
const sourceDir = process.env.DB_DATA_DIR || path.join(root, "database", "seed");
const files = ["categories.sql", "cities.sql", "currency_rates.sql", "trips.sql", "trip_categories.sql", "trip_cities.sql", "trip_days.sql", "day_activities.sql", "includes.sql", "reviews.sql", "purchases.sql", "messages.sql", "notifications.sql", "push_tokens.sql"];

function splitStatements(sql) {
  const result = [];
  let start = 0;
  let quote = null;
  let escaped = false;
  for (let i = 0; i < sql.length; i += 1) {
    const ch = sql[i];
    if (escaped) { escaped = false; continue; }
    if (quote && ch === "\\") { escaped = true; continue; }
    if ((ch === "'" || ch === '"' || ch === "`") && (!quote || quote === ch)) quote = quote ? null : ch;
    if (ch === ";" && !quote) {
      const statement = sql.slice(start, i).trim();
      if (statement) result.push(statement);
      start = i + 1;
    }
  }
  const tail = sql.slice(start).trim();
  if (tail) result.push(tail);
  return result;
}

function normalizeMariaDbValues(sql) {
  // MariaDB DATETIME does not accept the PostgreSQL-style trailing +00/+00:00.
  return sql.replace(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)?)[+-]\d{2}(?::?\d{2})?/g, "$1");
}

const connection = await mysql.createConnection({ host: process.env.LOCAL_DB_HOST || "127.0.0.1", port: Number(process.env.LOCAL_DB_PORT || 3306), user: process.env.LOCAL_DB_USER || "root", password: process.env.LOCAL_DB_PASSWORD || "" });
await connection.query("CREATE DATABASE IF NOT EXISTS `montutravel` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
await connection.changeUser({ database: process.env.LOCAL_DB_NAME || "montutravel" });
const schema = await fs.readFile(path.join(root, "database", "schema.sql"), "utf8");
for (const statement of splitStatements(schema).filter((s) => !/^CREATE DATABASE|^USE /i.test(s))) await connection.query(statement);

let imported = 0;
for (const file of files) {
  const fullPath = path.join(sourceDir, file);
  try {
    const sql = normalizeMariaDbValues(await fs.readFile(fullPath, "utf8"));
    for (const statement of splitStatements(sql)) {
      if (/^INSERT INTO/i.test(statement)) {
        await connection.query(statement.replace(/^INSERT INTO/i, "INSERT IGNORE INTO"));
        imported += 1;
      }
    }
    console.log(`Imported ${file}`);
  } catch (error) {
    if (error.code === "ENOENT") console.warn(`Skipped missing file: ${fullPath}`);
    else throw error;
  }
}
await connection.end();
console.log(`Local database ready. Imported ${imported} statements from ${sourceDir}`);
