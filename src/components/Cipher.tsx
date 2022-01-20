import { useSearchParams, useLocation } from "solid-app-router";
import type { JSX } from "solid-js";
import { createEffect, createSignal, Show, onMount } from "solid-js";
import { Link } from "solid-app-router";
import { encrypt, decrypt } from "../utils/encryption";
import { filter } from "../utils/text";
import { Input, TextArea } from "./Inputs";

export default function Cipher() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const [message, setMessage] = createSignal(searchParams.encrypted || "");
  const [key, setKey] = createSignal("");

  const [result, setResult] = createSignal("");

  const isEncrypt = pathname.indexOf("decrypt") === -1;

  let input: HTMLInputElement | undefined = undefined;
  let textarea: HTMLTextAreaElement | undefined = undefined;

  createEffect(() => {
    const k = key();
    const m = message();

    if (k && m) {
      const fn = isEncrypt ? encrypt : decrypt;

      setResult(fn(k)(m));
    } else {
      setResult("");
    }
  });

  onMount(() => input?.focus());

  const handleKey:
    | JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
    | undefined = (event) => {
    const result = filter(
      (event?.target as unknown as EventTargetWithValue).value
    ).toUpperCase();

    if (input) {
      input.value = result;
    }

    setKey(result);
  };

  const handleSecretMessage:
    | JSX.EventHandlerUnion<HTMLTextAreaElement, InputEvent>
    | undefined = (event) => {
    const result = filter(
      (event?.target as unknown as EventTargetWithValue).value
    ).toLowerCase();

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
          <div className="text-green-400 my-2">
            {isEncrypt ? "Secret Message" : "Encrypted Message"}
          </div>
          <TextArea
            ref={textarea}
            value={message()}
            handleInput={handleSecretMessage}
          />
        </label>
        <div className="text-green-400 break-words">{result()}</div>
        <Show when={isEncrypt && result()}>
          {() => (
            <Link
              href={`/decrypt?encrypted=${result()}`}
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
