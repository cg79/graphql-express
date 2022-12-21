
const { ApolloServer } = require("apollo-server");
require("dotenv").config();

//graphql server

//types query/mutation/subscription


const  schema = require('./schema');
const resolvers  = require('./resolvers');

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    debugger;
    const token = req.headers.authorization || "";
  },
});

const port = process.env.PORT || 4001;
apolloServer.listen(port, () => {
  console.log(`🚀 GRAPHQL Server is running at http://localhost:${port}`);
});
