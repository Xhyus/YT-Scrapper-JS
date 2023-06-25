import { transporter } from "./transporter.js";
import { email, subject, text, user } from "../utils/constants.js";

export const sendEmail = async (playlist) => {
  try {
    const mailOptions = {
      from: user,
      to: email,
      subject: subject,
      text: text,
      attachments: playlist.map((playlist) => {
        return {
          filename: `${playlist.id}.json`,
          content: JSON.stringify(playlist.playList),
        };
      }),
    };
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return;
  } catch (error) {
    console.log(error);
  }
};
