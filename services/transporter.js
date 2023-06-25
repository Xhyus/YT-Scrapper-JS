import { createTransport } from "nodemailer";
import { user, pass } from "../utils/constants.js";

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: user,
    pass: pass,
  },
  port: 465,
});
