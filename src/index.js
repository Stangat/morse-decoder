const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let resArr = [];
  let str = "";

  for (let i = 0; i < expr.length; i = i + 10) {
    str = expr.slice(i, i + 10);
    resArr.push(str);
  }

  resArr = resArr.map((item) =>
    item.replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "")
  );

  resArr = resArr.map((item) =>
    item.includes("*") ? (item = " ") : (item = MORSE_TABLE[item])
  );

  resArr = resArr.join("");

  return resArr;
}

module.exports = {
  decode,
};
