const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': ' ',
};

function decode(expr) {
    let arr = expr.match(/.{10}/g);
    let MorseArr = [];
    for (let i = 0; i < arr.length; i++) {
        let twoSmblArr = arr[i].match(/.{2}/g);
        let someRes = '';

        for (let j = 0; j < twoSmblArr.length; j++) {

            if (twoSmblArr[j] === '10') {
                someRes += '.';
            } else if (twoSmblArr[j] === '11') {
                someRes += '-';
            }
        }
        MorseArr.push(someRes);
    }
    for (let i = 0; i < MorseArr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (key === MorseArr[i]) {
                MorseArr[i] = MORSE_TABLE[key];
            }
        }
    }
    return MorseArr.join("");
}

module.exports = {
    decode
}