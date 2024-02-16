const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
require("dotenv").config({ path: "./.env" });

const cors = require("cors");

// Get MongoDB driver connection
const dbo = require("./db/conn");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 5000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require("./routes/record"));
app.use(require("./routes/authRoutes"));


app.use(express.json());

const newApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));
  dbo.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}



newApolloServer();
