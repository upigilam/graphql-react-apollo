/**
 * Created by upigilam on 1/1/19.
 */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema.js');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server started on the port ${PORT}`)
});