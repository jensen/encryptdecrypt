export const Input = (props) => (
  <input
    ref={props.ref}
    className="w-full block px-4 py-2 bg-black text-green-400 rounded-md border border-green-400 outline-none"
    onInput={props.handleInput}
  />
);

export const TextArea = (props) => (
  <textarea
    ref={props.ref}
    className="w-full px-4 py-2 bg-black text-green-400 rounded-md border border-green-400 outline-none resize-none"
    onInput={props.handleInput}
    rows={5}
  >
    {props.value || ""}
  </textarea>
);
