import { EmailTemplate } from "@/components/email-template/email-template";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: `JARIS Website <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL as string,
      bcc: process.env.BCC_EMAIL as string,
      subject: "JARIS Website Form Submisssion",
      react: EmailTemplate(formData) as ReactElement,
    });

    if (error) {
      // @ts-expect-error: error object has the field 'statusCode' but the 'ErrorResponse' interface doesn't have it
      return Response.json({ error }, { status: error.statusCode });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
