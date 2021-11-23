import { buildSchema } from "graphql";
import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

const schema = buildSchema(`
	type Query {
		hello: String
	}`);

const root = {
    hello: () => "Hello World!",
};

app.use(
    "/graphql",
    graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(4000);
