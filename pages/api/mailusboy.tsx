import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      fullName,
      message,
      email,
      phone

       
    } = req.body;

    // Replace these values with your SMTP server details
    const transporter = nodemailer.createTransport({
      host: "mail.nuviflix.com.ng",
      port: 465,
      secure: true,
      auth: {
        user: "mavride@nuviflix.com.ng",
        pass: "6Ew=.{)MrQB_",
      },
    });

    const mailOptions = {
      from: "mavride@nuviflix.com.ng",
      to: "testing@mavride.net",
      subject: "Mailus",
      text: `
        Full Name: ${fullName}
        \nPhone Number: ${phone}
         \nEmail: ${email}
         \nMessage: ${message}
            `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
