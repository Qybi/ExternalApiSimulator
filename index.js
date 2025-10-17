import { createServer } from "./server.js";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(
  `Starting server with API_URI: ${process.env.API_URI} and FILE_PATH: ${process.env.FILE_PATH}`
);

const app = await createServer(__filename, __dirname);
await app.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
