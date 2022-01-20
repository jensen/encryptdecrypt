import type { Component, JSX } from "solid-js";

const classes = {
  input: `w-full block px-4 py-2 bg-black text-green-400
     rounded-md border border-green-800 outline-none focus:border-green-400`,
};

export const Input: Component<{
  ref?: HTMLInputElement;
  handleInput: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>;
}> = (props) => (
  <input
    ref={props.ref}
    className={classes.input}
    onInput={props.handleInput}
  />
);

export const TextArea: Component<{
  ref?: HTMLTextAreaElement;
  handleInput: JSX.EventHandlerUnion<HTMLTextAreaElement, InputEvent>;
  value: string;
}> = (props) => (
  <textarea
    ref={props.ref}
    className={classes.input}
    onInput={props.handleInput}
    rows={5}
  >
    {props.value || ""}
  </textarea>
);
