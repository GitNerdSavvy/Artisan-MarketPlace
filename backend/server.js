const app = require("./app");
const dotenv = require("dotenv");
const connectionDB = require("./config/database");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});



dotenv.config({ path: "backend/config/.env" });

// Database Connection
connectionDB();





app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});