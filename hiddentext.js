const public = 'Hello World';
const private = 'Test';

function str2bin(text) {
  let bin = [];
  text.split('').map((char) => {
    bin.push(new Number(char.charCodeAt(0)).toString(2));
  })
  return bin.join(' ');
}

function bin2str(bin){
  let text = [];
  bin.split(' ').map((char) => {
    text.push( String.fromCharCode(parseInt(char, 2)));
  })
  return text.join('');
}

function bin2hidden(str) {
  str = str.replace(/ /g, "\xE2\x81\xA0"); // Unicode Character 'WORD JOINER' (U+2060) 0xE2 0x81 0xA0
  str = str.replace(/0/g, "\xE2\x80\x8B"); // Unicode Character 'ZERO WIDTH SPACE' (U+200B) 0xE2 0x80 0x8B
  str = str.replace(/1/g, "\xE2\x80\x8C"); // Unicode Character 'ZERO WIDTH NON-JOINER' (U+200C) 0xE2 0x80 0x8C
  return str;
}

function hidden2bin(str) {
  str = str.replace(/\xE2\x81\xA0/g, ' ');  // Unicode Character 'WORD JOINER' (U+2060) 0xE2 0x81 0xA0
  str = str.replace(/\xE2\x80\x8B/g, '0');  // Unicode Character 'ZERO WIDTH SPACE' (U+200B) 0xE2 0x80 0x8B
  str = str.replace(/\xE2\x80\x8C/g, '1');  // Unicode Character 'ZERO WIDTH NON-JOINER' (U+200C) 0xE2 0x80
  return str;
}

const privBin = str2bin(private);
console.log(privBin, '\n');

const privHidden = bin2hidden(privBin);
console.log(privHidden, '\n');

const encoded = public.replace(' ', ` ${privHidden} `);
console.log(encoded, '\n');

const decodedBin = hidden2bin(encoded);
console.log(decodedBin, '\n');

const decodedStr = bin2str(decodedBin);
console.log(decodedStr, '\n');
