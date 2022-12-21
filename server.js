const express = require("express");
const expressGraphQL = require("graphql-express");
const { GraphQlSchema, GraphQlObjectType, GraphQlString } = require("graphql");



// import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';


const schema = new GraphQlSchema({
    query: new GraphQlObjectType({
        name: "HelloWorld",
        fields: () => ({
            message: {
                type: GraphQlString,
                resolve: () => "Hello World",
            }
        }),  
    }),

});  


const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
  }),
  schema
);

app.listen(4000, () => {
  console.log("Listening");
});
