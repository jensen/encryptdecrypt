## Purpose

This project was completed as part of a group learning exercise. Considering that this project is relatively basic, I decided to use [SolidJS](https://www.solidjs.com/).

## Demo

[https://encryptdecrypt.netlify.app/](https://encryptdecrypt.netlify.app/)

## Project Features

### User Stories

1. ✅ User can see the app window with these components. Plain text message input field, encryption key input field and resulting encrypted or decrypted message
2. ✅ User can enter the text to be encrypted in the plain text message input field
3. ✅ User can enter the Encryption key that the Vigenere algorithm will use to encrypt the plain text message.
4. ✅ The 'Decrypt' button should be disabled until the plain text has been encrypted.
5. ✅ User can see the encrypted message displayed in the result field.
6. ✅ The 'Decrypt' button should be enabled after the encrypted message has been displayed.
7. ✅ User can click the 'Decrypt' button to decrypt the encrypted message and to display its contents in the result field.

## Technical Specifications

### Vigenere Cipher

The implementation of the Vignere Cipher follows the steps decribed on [Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher#Description). There is an algebraic approach, but this implementation provides an example of the converstion of plain text steps to JavaScript syntax.

### SolidJS

The library has a very similar API to React which can be misleading since the reactivity model does require a different perspective.

I have a lot of early opinions, but I think I will save them for another time.

### Dependencies

- solidjs
- tailwindcss
