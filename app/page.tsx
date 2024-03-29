"use client";

import { useChat } from "ai/react";
import { ChangeEvent } from "react";

export default function Chat() {
  const { messages, handleSubmit, setInput } = useChat();

  const addPrompt = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const prompt = e.target.value;

    setInput(prompt);
  };
  const assistantMessages = messages.filter((m) => m.role != "user");
  return (
    <main className="mx-auto w-full h-screen  p-24 flex flex-col">
      <section className="mb-auto m">
        {assistantMessages[assistantMessages.length - 1]?.content}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          onChange={addPrompt}
          placeholder="Chiedi qualcosa"
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
