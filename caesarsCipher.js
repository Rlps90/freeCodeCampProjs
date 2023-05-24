/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {
  let regex = /^[A-Za-z]+$/ //REGEX para trocar apenas caracteres do alfabeto (A-Z apenas)
  let newStr = ''

  for (let i in str) {
    if (regex.test(str[i])) {
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 78){ // soma 13 posicoes nas 13 primeiras letras
        newStr += String.fromCharCode(str[i].charCodeAt(0) + 13)
      } else if (str[i].charCodeAt(0) >= 78 && str[i].charCodeAt(0) <= 90) // subtrai 13 posicoes nas 13 ultimas letras
        newStr += String.fromCharCode(str[i].charCodeAt(0) - 13)
    } else {
      newStr += str[i] // adiciona os caracteres fora das 26 letras do alfabeto
    }
  }
  return newStr
}

rot13("SERR PBQR PNZC");
