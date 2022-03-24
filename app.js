function mod(n, m) {
    return ((n % m) + m) % m;
  }

const alphabet = [
'א',
'ב',
'ג',
'ד',
'ה',
'ו',
'ז',
'ח',
'ט',
'י',
'כ',
'ל',
'מ',
'נ',
'ס',
'ע',
'פ',
'צ',
'ק',
'ר',
'ש',
'ת'
]
function create_switched_alphabet_encode(alphabet_to_use, shift){
    let switched = Array.apply(null, Array(alphabet_to_use.length)).map(function () {});
    for (let index = 0; index < alphabet_to_use.length; index++) {
        switched[index] = alphabet_to_use[mod((index + shift),alphabet_to_use.length)];
    }
    return switched;
}

function create_switched_alphabet_decode(alphabet_to_use, shift){
    let switched = Array.apply(null, Array(alphabet_to_use.length)).map(function () {});
    for (let index = 0; index < alphabet_to_use.length; index++) {
        switched[index] = alphabet_to_use[mod((index - shift),alphabet_to_use.length)];
    }
    return switched;
}

function encode_string(to_encode, shiftnum){
    switched_alph = create_switched_alphabet_encode(alphabet, shiftnum)
    let encoded = "";
    for (let index = 0; index < to_encode.length; index++) {
        const element = to_encode[index];
        if(element === "ך"){
            encoded += switched_alph[alphabet.indexOf("כ")];
        }
        else if(element === "ם"){
            encoded += switched_alph[alphabet.indexOf("מ")];
        }
        else if(element === "ן"){
            encoded += switched_alph[alphabet.indexOf("נ")];
        }
        else if(element === "ץ"){
            encoded += switched_alph[alphabet.indexOf("צ")];
        }
        else if(element === "ף"){
            encoded += switched_alph[alphabet.indexOf("פ")];
        }
        else if(alphabet.indexOf(element) === -1){
            encoded += " ";
        }
        else{
            encoded += switched_alph[alphabet.indexOf(element)];
        }
    }
    return encoded;
}

function decode_string(to_decode, shiftnum){
    switched_alph = create_switched_alphabet_decode(alphabet, shiftnum)
    let decoded = "";
    for (let index = 0; index < to_decode.length; index++) {
        const element = to_decode[index];
        if(alphabet.indexOf(element) === -1){
            decoded += " ";
        }
        else{
            decoded += switched_alph[alphabet.indexOf(element)];
        }
    }
    return decoded;
}