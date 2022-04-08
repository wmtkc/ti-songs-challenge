import { ApolloServer } from 'apollo-server-micro';
import schema from '../../graphql/schema';
import getConfig from 'next/config';
import initSqlJs from 'sql.js';

let sqliteDb;
async function initDb() {
  const { serverRuntimeConfig } = getConfig();

  if (!sqliteDb) {
    const SQL = await initSqlJs();
    sqliteDb = new SQL.Database(serverRuntimeConfig.db);
  }
  return sqliteDb;
}

const apolloServer = new ApolloServer({
  schema,
  subscriptions: false,
  introspection: true,
  context: async () => ({
    db: await initDb()
  })
});

export const config = {
  api: {
    bodyParser: false
  }
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res);
}
