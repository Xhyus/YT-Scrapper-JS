import dotenv from "dotenv";
dotenv.config();

const user = process.env.user;
const pass = process.env.pass;
const email = "mail@correo.com";
const subject = "Cambios en tu playlist!";
const text = `En los archivos adjuntos de este correo encontraras un arhivo JSON con las modificaciones de la playlist con fecha ${new Date().toLocaleDateString()}`;
const playListIds = ["url playlist 1", "url playlist 2"];
const API_KEY = process.env.API_KEY;
export { email, subject, text, user, pass, playListIds, API_KEY };
