import { assert, expect, test } from "vitest";
import { encrypt, decrypt, generateCipher, generateKey } from "./encryption";

test("cipher is valid", () => {
  const ciper = generateCipher();

  expect(ciper[0][0]).toBe("A");
  expect(ciper[10][10]).toBe("U");
  expect(ciper[17][20]).toBe("L");
  expect(ciper[25][25]).toBe("Y");
});

test("key is valid", () => {
  const key = generateKey("attackatdawn".length, "LEMON");

  expect(key).toBe("LEMONLEMONLE");
});

test("message is encrypted", () => {
  expect(encrypt("LEMON")("attackatdawn")).toBe("LXFOPVEFRNHR");
});

test("message is decrypted", () => {
  expect(decrypt("LEMON")("LXFOPVEFRNHR")).toBe("attackatdawn");
});
