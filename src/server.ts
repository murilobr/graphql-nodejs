import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
	type Query {
		hello: String
	}`);

const root = {
    hello: () => "Hello World!",
};

const query = `{
	hello
}`;

graphql({ schema, rootValue: root, source: query }).then((result) => {
    console.log(JSON.stringify(result, null, 4));
});
