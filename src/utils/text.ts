export const filter = (text: string | undefined | null) => {
  if (!text) return "";

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      result += text[i];
    }
  }

  return result;
};
