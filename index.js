const express = require("express");
const bodyParser  = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const  typeDefs = require('./schema');
const resolvers  = require('./resolvers');
const models  = require('./models');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    
  }),
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { models } }),
);

app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});
// models.sequelize.sync().then(() => app.listen(3000));
