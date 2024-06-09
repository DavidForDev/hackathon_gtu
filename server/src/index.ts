import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import http from "http";

import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();

// ------------- MiddleWare ------------- \\
config();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// -------------------- Resolver / TypeDefs ------------------- \\
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

async function main() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });

  await server.start();

  app.use("/", express.json(), expressMiddleware(server));

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 5000 }, resolve);
  });

  console.log("🚀 server is ready");
}

main().catch((err) => console.log(err));
