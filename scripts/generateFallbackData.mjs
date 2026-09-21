import fs from "node:fs";
import path from "node:path";

const sourceDir = process.argv[2] || process.env.DB_DATA_DIR;
const outputFile = process.argv[3] || path.resolve("database/fallbackData.json");

if (!sourceDir) throw new Error("Pass the SQL dump directory as the first argument.");

const tables = [
  "cities",
  "categories",
  "trips",
  "trip_cities",
  "trip_categories",
  "trip_days",
  "day_activities",
  "includes",
];

function splitRows(values) {
  const rows = [];
  let row = [];
  let token = "";
  let quote = false;
  let depth = 0;
  let escaped = false;

  const pushToken = () => {
    const value = token.trim();
    row.push(value.toUpperCase() === "NULL" ? null : value);
    token = "";
  };

  for (let index = 0; index < values.length; index += 1) {
    const char = values[index];
    const next = values[index + 1];
    if (quote) {
      token += char;
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === "'" && next === "'") { token += next; index += 1; }
      else if (char === "'") quote = false;
      continue;
    }
    if (char === "'") { quote = true; token += char; continue; }
    if (char === "(") { depth += 1; if (depth > 1) token += char; continue; }
    if (char === ")") {
      depth -= 1;
      if (depth === 0) { pushToken(); rows.push(row); row = []; }
      else token += char;
      continue;
    }
    if (char === "," && depth === 1) { pushToken(); continue; }
    if (depth > 0) token += char;
  }
  return rows;
}

function decode(value) {
  if (value === null) return null;
  const trimmed = value.trim();
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    const inner = trimmed.slice(1, -1).replaceAll("''", "'");
    return inner.replace(/\\([\\'"nrt])/g, (_, char) => ({ "\\": "\\", "'": "'", '"': '"', n: "\n", r: "\r", t: "\t" }[char] || char));
  }
  return trimmed;
}

function parseFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const sql = fs.readFileSync(filePath, "utf8");
  const records = [];
  const insertPattern = /INSERT INTO\s+`[^`]+`\s*\(([^;]+?)\)\s*VALUES\s*/gis;
  let match;
  while ((match = insertPattern.exec(sql))) {
    const columns = [...match[1].matchAll(/`([^`]+)`/g)].map((item) => item[1]);
    const start = insertPattern.lastIndex;
    const end = sql.indexOf(";", start);
    if (end === -1) break;
    splitRows(sql.slice(start, end)).forEach((row) => {
      const record = {};
      columns.forEach((column, index) => { record[column] = decode(row[index]); });
      records.push(record);
    });
    insertPattern.lastIndex = end + 1;
  }
  return records;
}

const output = {};
for (const table of tables) output[table] = parseFile(path.join(sourceDir, `${table}.sql`));
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(output)}\n`, "utf8");
console.log(`Generated ${outputFile}: ${Object.entries(output).map(([key, rows]) => `${key}=${rows.length}`).join(", ")}`);
