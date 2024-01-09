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
      subject: "Quote Request",
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
    const successRedirectUrl = "/success";  // Replace with your success redirect URL
    const failureRedirectUrl = "/quoteForm?id=500";    // Replace with your error redirect URL
    
    try {
      await transporter.sendMail(mailOptions);
      res.redirect(302, successRedirectUrl);
    } catch (error) {
      console.error("Error sending email:", error);
      res.redirect(302, failureRedirectUrl);
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
