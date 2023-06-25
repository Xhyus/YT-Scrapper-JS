import express from "express";
import { sendEmail } from "../services/nodemailer.js";
import { playListIds } from "../utils/constants.js";
import { scrapper } from "../services/scrapper.js";

const Router = express.Router();

Router.get("/", async (req, res) => {
  const playList = [];
  for (const id of playListIds) {
    const playlistItems = await scrapper(id);
    playList.push({
      id: id,
      playList: playlistItems,
    });
  }
  console.log(playList);

  await sendEmail(playList);

  res.send(
    "Se ha enviado el correo con las modificaciones de las playlist indicadas!"
  );
});

export default Router;
