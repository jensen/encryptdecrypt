import { useSearchParams } from "solid-app-router";
import { createEffect, createSignal, onMount } from "solid-js";
import { decrypt } from "../utils/encryption";
import { filter } from "../utils/text";
import { Input, TextArea } from "./Inputs";

export default function Encrypt(props) {
  const [searchParams] = useSearchParams();

  const [message, setMessage] = createSignal(searchParams.encrypted || "");
  const [key, setKey] = createSignal("");

  const [decrypted, setDecrypted] = createSignal("");

  let input: HTMLInputElement | undefined = undefined;
  let textarea: HTMLTextAreaElement | undefined = undefined;

  createEffect(() => {
    const k = key();
    const m = message();

    if (k && m) {
      setDecrypted(decrypt(k)(m));
    } else {
      setDecrypted("");
    }
  });

  const handleKey = (event) => {
    const result = filter(event.target.value).toUpperCase();

    if (input) {
      input.value = result;
    }

    setKey(result);
  };

  const handleEncryptedMessage = (event) => {
    const result = filter(event.target.value).toUpperCase();

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
          <div className="text-green-400 my-2">Encrypted Message</div>
          <TextArea
            ref={textarea}
            value={message()}
            handleInput={handleEncryptedMessage}
          />
        </label>
        <div className="text-green-400 break-words">{decrypted()}</div>
      </form>
    </section>
  );
}
