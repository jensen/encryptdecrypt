import { createEffect, createSignal, Show, onMount } from "solid-js";
import { Link } from "solid-app-router";
import { encrypt } from "../utils/encryption";
import { filter } from "../utils/text";
import { Input, TextArea } from "./Inputs";

export default function Encrypt(props) {
  const [message, setMessage] = createSignal("");
  const [key, setKey] = createSignal("");

  const [encrypted, setEncrypted] = createSignal("");

  let input: HTMLInputElement | undefined = undefined;
  let textarea: HTMLTextAreaElement | undefined = undefined;

  createEffect(() => {
    const k = key();
    const m = message();

    if (k && m) {
      setEncrypted(encrypt(k)(m));
    } else {
      setEncrypted("");
    }
  });

  onMount(() => input?.focus());

  const handleKey = (event) => {
    const result = filter(event.target.value).toUpperCase();

    if (input) {
      input.value = result;
    }

    setKey(result);
  };

  const handleSecretMessage = (event) => {
    const result = filter(event.target.value).toLowerCase();

    if (textarea) {
      textarea.value = result;
    }

    setMessage(result);
  };

  return (
    <section className="w-80">
      <form className="flex flex-col space-y-2">
        <label className="w-full">
          <div className="text-green-400 my-2">Secret Key</div>
          <Input ref={input} handleInput={handleKey} />
        </label>
        <label>
          <div className="text-green-400 my-2">Secret Message</div>
          <TextArea ref={textarea} handleInput={handleSecretMessage} />
        </label>
        <div className="text-green-400 break-words">{encrypted()}</div>
        <Show when={encrypted()}>
          {() => (
            <Link
              href={`/decrypt?encrypted=${encrypted()}`}
              className="px-4 py-2 text-black bg-green-400 rounded-md"
            >
              Decrypt Message
            </Link>
          )}
        </Show>
      </form>
    </section>
  );
}
