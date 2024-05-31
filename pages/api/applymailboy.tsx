import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      email,
      streetAddress,
      aptSuite,
      city,
      state,
      zip,
      isUSCitizen,
      isAuthorizedToWork,
      hasWorkedForCompany,
      previousWorkDate,
      highSchoolName,
      highSchoolFrom,
      highSchoolTo,
      didGraduateHighSchool,
      collegeName,
      otherEducation,
    } = req.body;

    // Replace these values with your SMTP server details
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: "testing@mavride.net",
        pass: "Loveisreal",
      },
    });

    const mailOptions = {
      from: "testing@mavride.net",
      to: "info@mavride.net",
      subject: "Application Form",
      text: `
        First Name: ${firstName}
        \nLast Name: ${lastName}
        \nContact Number: ${contactNumber}
        \nStreet Address: ${streetAddress}
       \nEmail: ${email}
        \nState: ${state}
        \nCity: ${city}
        \nAptsuite: ${aptSuite}
        \nAre you a US Citizen?: ${isUSCitizen}
        \nZip: ${zip}
        \nAuthorized to work: ${isAuthorizedToWork},
        \nHave  worked for a Company before?: ${hasWorkedForCompany},
        \nWhat was your previous work date?: ${previousWorkDate},
        \nName of highschool?: ${highSchoolName},
        \nAttended from: ${highSchoolFrom},
        \nAttended to: ${highSchoolTo},
        \nDid you graduate from highschool?: ${didGraduateHighSchool},
        \nWhat is your College Name: ${collegeName},
        \nOther education qualifications: ${otherEducation},




             `,
    };
const successRedirectUrl = "/success";  // Replace with your success redirect URL
const failureRedirectUrl = "/applicationform?id=500";    // Replace with your error redirect URL


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
