import express from "express";
import http from "http";
import youtubeRoutes from "./routes/youtube.routes.js";
import cron from "node-cron";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(youtubeRoutes);

// cron.schedule("*/5 * * * * *", () => {
//   console.log("Running a task every 5 seconds");
// });

http.createServer(app).listen(port || 3000, (err) => {
  console.log(err || "Server is running on port 3000");
});
