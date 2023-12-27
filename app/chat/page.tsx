"use client";

import { useChat } from "ai/react";
import { ChangeEvent, useEffect, useState } from "react";

export default function Chat() {
  const { messages, handleSubmit, setInput } = useChat();

  const addPrompt = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const prompt = e.target.value;
    const magicPrompt = `Sei una sfera di cristallo. Ogni domanda che ti farò non richiede una risposta precisa ma devi inventare una risposta che sia vaga e mi dia il senso che esiste qualcosa aldilà del codice, ma cerca di essere stringato. La domanda è la seguente:
    ${prompt}
`;
    setInput(prompt);
  };
  const assistantMessages = messages.filter((m) => m.role != "user");
  return (
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col">
      <section className="mb-auto m">
        {assistantMessages[assistantMessages.length - 1]?.content}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          onChange={addPrompt}
          placeholder="Chiedi qualcosa sul tuo futuro...."
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          DOMANDA!
        </button>
      </form>
    </main>
  );
}
