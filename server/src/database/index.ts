import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "game",
  password: "dev2004))",
});

export default pool;
