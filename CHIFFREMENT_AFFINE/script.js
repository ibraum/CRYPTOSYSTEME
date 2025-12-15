const a_value = document.getElementsByClassName("multiplicative");
const b_value = document.getElementsByClassName("additive");
const encode_input = document.getElementsByClassName("encode_input");
const decode_input = document.getElementsByClassName("decode_input");
const encode_response = document.getElementsByClassName("encode_response");
const decode_response = document.getElementsByClassName("decode_response");

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let a_v = '';
let b_v = '';

const a = (value) => {
    a_value[0].innerHTML = `${value}`
    a_v = value
}

const b = (value) => {
    b_value[0].innerHTML = `${value}`
    b_v = value
}

const encode = () => {
    let ev = encode_input[0].value
    verifyAB()
    if (ev === '') {
        alert("Entrer un message claire");
    } else {
        const encode_array = ev.split('')
        let encode_value = "";
        encode_array.forEach(value => {
            let index = alphabet.indexOf(value)
            let number_a = parseInt(a_v)
            let number_b = parseInt(b_v)
            let index_key =(( index * number_a) + number_b)
            const mod_index_key = parseInt(index_key) % alphabet.length
            if (index === -1 ) {
                encode_value += value
            } else {
                encode_value += `${alphabet[mod_index_key]}`
            }
        });
        encode_response[0].value = encode_value
    }
}

const verifyAB = () => {
    if (a_v === '' || b_v === '') {
        console.log("Veuillez entrer les valeurs de a et b");
    }
}

const decode = () => {
    let dv = decode_input[0].value
    verifyAB()
    if (dv === '') {
        alert("Entrer un message crypté");
    } else {
        const decode_array = dv.split('')
        let decode_value = "";
        decode_array.forEach(value => {
            let index = alphabet.indexOf(value)
            let number_a = parseInt(a_v)
            let number_b = parseInt(b_v)
            let index_key = ( index - number_b) * modInverse(number_a, alphabet.length)
            let mod_index_key = parseInt(index_key) % alphabet.length

            while (mod_index_key < 0) {
                mod_index_key += alphabet.length
            }

            if (index === -1 ) {
                decode_value += value
            } else {
                decode_value += `${alphabet[mod_index_key]}`
            }
        });
        decode_response[0].value = decode_value
    }
}

const modInverse = (a, m) => {
    let m0 = m;
    let x0 = 0, x1 = 1;

    if (m === 1) return 0;

    while (a > 1) {
        let q = Math.floor(a / m);
        let temp = m;

        m = a % m;
        a = temp;

        temp = x0;
        x0 = x1 - q * x0;
        x1 = temp;
    }

    if (x1 < 0) x1 += m0;

    return x1;
}
