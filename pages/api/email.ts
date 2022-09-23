// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendMail from "../../helpers/sendEmail";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    sendMail({emailTo: 'sudarshan.r@smit.smu.edu.in', emailSubject: "Blank Testing", emailContent: `<p>Hi from nextjs</p>`})
    res.status(200).json({ message: "Email Sent Successfully" });
}
