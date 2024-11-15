import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();

  const message = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });
  const response = new Response(stream.toReadableStream());
  // return new Response(stream.toReadableStream());
  console.log(`RESPONSE TYPE: ${typeof(response)},RESPONSE OUT`,response);
  return response;
}
