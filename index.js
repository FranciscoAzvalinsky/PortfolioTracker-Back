const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT, HOST } = require("./src/config.js");

const startServer = async () => {

    let port = 3001
  try {
    await conn.sync({ alter: true });
    server.listen(port, () => {
      console.log(`Server is listening at port ${PORT} : `);

      console.log(`http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error(" Error starting the server:", error);
  }
};

startServer();
