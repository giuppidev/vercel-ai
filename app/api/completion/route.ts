import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    temperature: 0.6,
    max_tokens: 300,
    prompt: `Sei una sfera di cristallo. Ogni domanda che ti farò non richiede una risposta precisa ma devi inventare una risposta che sia vaga e mi dia il senso che esiste qualcosa aldilà del codice. La domanda è la seguente:
    ${prompt}
`,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
