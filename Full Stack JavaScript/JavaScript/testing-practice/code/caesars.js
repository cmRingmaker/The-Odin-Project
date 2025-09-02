function caesarCipher(str, key) {
  let cipher = "";
  const normalized = key % 26;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const charCode = char.charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
      let shifted = charCode + normalized;

      // Handle wrapping!
      if (shifted < 97) {
        shifted += 26;
      } else if (shifted > 122) {
        shifted -= 26;
      }

      cipher += String.fromCharCode(shifted);
    } else {
      cipher += str[i];
    }
  }

  return cipher;
}

// Thank you harvard cs50 for preparing me for this, lmao
// (making it simpler just because the focus of this project is testing)

export default caesarCipher;
