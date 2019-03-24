const express = require('express')
const graphqlHttp = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 4000;

const app = express()

// allow cross origin requests
app.use(cors())

// connect to mongodb database at mLab
mongoose.connect('mongodb+srv://graphql:graphql@cluster0-graphql-i8bxl.mongodb.net/test?retryWrites=true', {
	useNewUrlParser: true
})
mongoose.connection.once('open', () => {
	console.log('Connected to database')
})


app.use('/graphql', graphqlHttp({
	schema: schema,
	graphiql: true
}))

app.listen(PORT, () => {
	console.log('Server running at 4000');
})



