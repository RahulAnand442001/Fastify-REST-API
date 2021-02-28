const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

// require routes
const routes = require("./src/routes/course");

// db connection
mongoose
  .connect("mongodb://localhost:27017/fastifyStore")
  .then(console.log("MongoDB is ready !"))
  .catch((err) => console.log(err));

// routes
fastify.get("/", async (request, reply) => {
  return { visitor: "Hello Fastify" };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

// start server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running on port: 3000`);
  } catch (error) {
    fastify.log.error(error);
    process.exit();
  }
};
start();
