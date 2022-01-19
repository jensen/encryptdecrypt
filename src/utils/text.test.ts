import { assert, expect, test } from "vitest";
import { filter } from "./text";

test("non alphabet characters are filtered", () => {
  const filtered = filter("ab c");

  expect(filtered).toBe("abc");
});
