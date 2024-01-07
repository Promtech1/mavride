import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      contactNumber,
      streetAddress,
      appointmentDate,
      appointmentTime,
      tripType,
      modeOfTransportation,
      otherSpecificInfo,
      email,
      streetAddress2,
      state,
      state2,
      city,
      city2,
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
      subject: "I want to book a ride",
      text: `
        First Name: ${firstName}
        \nLast Name: ${lastName}
        \nContact Number: ${contactNumber}
        \n Pickup Street Address: ${streetAddress}
        \nAppointment Date: ${appointmentDate}
        \nAppointment Time: ${appointmentTime}
        \nTrip Type: ${tripType}
        \nMode of Transportation: ${modeOfTransportation}
        \nOther Specific Info: ${otherSpecificInfo}
        \nEmail: ${email}
        \nPickup State: ${state}
        \nPickup City: ${city}
        \nDropoff Address: ${streetAddress2}
        \nDropoff State: ${state2}
        \nDropoff City: ${city2}
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
