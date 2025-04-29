import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.json();
  console.log(formData);

  try {
    const scriptUrl = process.env.WEB_APP_URL as string;
    console.log(scriptUrl);

    const res = await fetch(scriptUrl, {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to submit form data");
    }

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error submitting form. Server side." },
      { status: 500 }
    );
  }
}
