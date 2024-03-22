const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require('./src/schema/schema');
const graphqlResolver = require('./src/resolver/resolver');
const { mongoose } = require("mongoose");
const express = require('express');

const app = express();
app.use('/graphql',graphqlHTTP({
    schema: graphqlSchema,
    rootValue:  graphqlResolver,
    graphiql: true
}))


mongoose.connect("mongodb://localhost:27017/graphql")
.then(()=> app.listen(3000,console.log('Server running on http://localhost:3000/graphql')))
.catch((error)=> {
    throw error;
})

