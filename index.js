document.addEventListener("DOMContentLoaded", () => {
  let characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  //   let passwordLength = 15;
  let passwordOne = document.getElementById("password-one");
  let passwordTwo = document.getElementById("password-two");
  const btn = document.getElementById("btn");
  const length = document.getElementById("length");
  const symbolInput = document.getElementById("symbol");
  const numberInput = document.getElementById("number");

  //   if(symbolInput.checked) {
  //     characters = characters.concat(symbols)
  //   }
  //   if (numberInput.checked) {
  //     characters = characters.concat(numbers);
  //   }

  function getRandomCharacter() {
    let randomChrac = Math.floor(Math.random() * characters.length);
    let random = characters[randomChrac];
    return random;
  }

  function generatePassword() {
    let randomPassword = "";
    for (let i = 0; i < length.value; i++) {
      randomPassword += getRandomCharacter();
    }
    return randomPassword;
  }

  function setPasswords() {
    if (symbolInput.checked) {
      characters = characters.concat(symbols);
    } else {
      characters = characters.filter((n) => !symbols.includes(n));
    }

    if (numberInput.checked) {
      characters = characters.concat(numbers);
    } else {
      characters = characters.filter((n) => !numbers.includes(n));
    }

    passwordOne.value = generatePassword();
    passwordTwo.value = generatePassword();
  }

  btn.addEventListener("click", setPasswords);

  function copyToClipboard(input) {
    input.select();
    document.execCommand("copy");
  }

  passwordOne.addEventListener("click", (e) => copyToClipboard(passwordOne));
  passwordTwo.addEventListener("click", (e) => copyToClipboard(passwordTwo));
});
