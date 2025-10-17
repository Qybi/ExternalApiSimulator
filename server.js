import fastify from "fastify";
import autoLoad from "@fastify/autoload";
import fastifySensible from "@fastify/sensible";

import { join } from "node:path";

export async function createServer(__filename, __dirname) {    
  const app = fastify({
    logger: true,
  });
  
  await app.register(fastifySensible);

  await app.register(autoLoad, {
    dir: join(__dirname, "./routes"),
    options: {
      __filename, __dirname
    },
    forceESM: true
  });

  await app.ready();
  console.log(app.printRoutes());

  return app;
}