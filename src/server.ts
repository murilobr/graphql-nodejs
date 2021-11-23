// import { buildSchema, graphql } from "graphql";

// const schema = buildSchema(`
// 	type Query {
// 		hello: String
// 	}`);

// const root = {
//     hello: () => "Hello World!",
// };

// const query = `{
// 	hello
// }`;

// graphql({ schema, rootValue: root, source: query }).then((result) => {
//     console.log(JSON.stringify(result, null, 4));
// });

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
