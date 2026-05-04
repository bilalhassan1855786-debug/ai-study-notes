import { model } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const topic = body.topic;

    const notesPrompt = `Generate easy notes about ${topic}`;

    const result = await model.generateContent(notesPrompt);

    console.log("RESULT:", result);

    const notes = result.response.text();

    return NextResponse.json({
      notes,
      quiz: "Quiz coming soon",
    });
  } catch (error) {
    console.log("FULL ERROR:", error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}