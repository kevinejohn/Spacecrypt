function str2bin(text) {
  let bin = [];
  text.split('').map(char => {
    !!char && bin.push(Number(char.charCodeAt(0)).toString(2));
    return;
  });
  return bin.join(' ');
}

function bin2str(bin) {
  let text = [];
  bin.split(' ').map(char => {
    !!char && text.push(String.fromCharCode(parseInt(char, 2)));
    return;
  });
  return text.join('');
}

function bin2hidden(str) {
  str = str.replace(/ /g, '\u2060'); // Unicode Character 'WORD JOINER' (U+2060) 0xE2 0x81 0xA0
  str = str.replace(/0/g, '\u200B'); // Unicode Character 'ZERO WIDTH SPACE' (U+200B) 0xE2 0x80 0x8B
  str = str.replace(/1/g, '\u200C'); // Unicode Character 'ZERO WIDTH NON-JOINER' (U+200C) 0xE2 0x80 0x8C
  return str;
}

function hidden2bin(str) {
  str = str.replace(/[^\u2060\u200B\u200C]/g, ''); // Strip all but hidden characters
  str = str.replace(/\u2060/g, ' '); // Unicode Character 'WORD JOINER' (U+2060) 0xE2 0x81 0xA0
  str = str.replace(/\u200B/g, '0'); // Unicode Character 'ZERO WIDTH SPACE' (U+200B) 0xE2 0x80 0x8B
  str = str.replace(/\u200C/g, '1'); // Unicode Character 'ZERO WIDTH NON-JOINER' (U+200C) 0xE2 0x80
  return str;
}

function encrypt(pub, priv) {
  const privBin = str2bin(priv);
  // console.log(privBin, '\n');

  const privHidden = bin2hidden(privBin);
  // console.log(privHidden, '\n');

  // const encoded = pub.replace(' ', privHidden + ' ');
  // Insert hidden message after the first character
  const encoded = `${pub.slice(0, 1)}${privHidden}${pub.slice(1)}`;
  // console.log(encoded, '\n');
  return encoded;
}

function decrypt(text) {
  const decodedBin = hidden2bin(text);
  // console.log(decodedBin.length);

  const decodedStr = bin2str(decodedBin);
  // console.log(decodedStr, '\n');
  return decodedStr;
}

export default {
  encrypt,
  decrypt,
};
