
const screenAlphabet = document.getElementById("screenAlphabet");



const alphabets = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = alphabets.split("");


const index = Math.round(Math.random() * 26);


for (let i = 0; i < alphabetArray.length; i++) {
    const alphabet = alphabets[index];
    screenAlphabet.innerText  = alphabet;
    
}