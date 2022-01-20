const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ILookupTable {
  [key: string]: number;
}

const lookup: ILookupTable = alphabet
  .split("")
  .reduce((hash: ILookupTable, char: string, index) => {
    hash[char] = index;
    return hash;
  }, {});

export const generateCipher = () => {
  const cipher = [];

  for (let i = 0; i < 26; i++) {
    const chars = alphabet.split("");
    const start = chars.slice(i, chars.length);
    const end = chars.slice(0, i);

    cipher.push(start.concat(end));
  }

  return cipher;
};

export const generateKey = (length: number, keyword: string) => {
  let str = "";

  for (let i = 0; i < length; i++) {
    str += keyword[i % keyword.length];
  }

  return str;
};

export const encrypt = (keyword: string) => {
  return (plaintext: string) => {
    const length = plaintext.length;
    const key = generateKey(length, keyword);
    const cipher = generateCipher();

    let ciphertext = "";

    for (let i = 0; i < length; i++) {
      const col = lookup[plaintext[i].toUpperCase()];
      const row = lookup[key[i]];

      ciphertext += cipher[row][col];
    }

    return ciphertext;
  };
};

export const decrypt = (keyword: string) => {
  return (ciphertext: string) => {
    const length = ciphertext.length;
    const key = generateKey(length, keyword);
    const cipher = generateCipher();

    let plaintext = "";

    for (let i = 0; i < length; i++) {
      const index = cipher[lookup[key[i]]].findIndex(
        (v) => v === ciphertext[i]
      );

      plaintext += alphabet[index].toLowerCase();
    }

    return plaintext;
  };
};
