const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// generate 2 random passwords, each with 15 characters
// first retrieve the html element
let pwd1El = document.getElementById("pwd1-el")
let pwd2El = document.getElementById("pwd2-el")

function generateSinglePWD(){
    let randomPWD = [] // array
    for (let i=0; i<15; i++){
        let randomInd = Math.floor(Math.random() * characters.length)
        randomPWD.push(characters[randomInd])
    }

    return randomPWD.join("")
}

function generatePWD(){
    pwd1El.textContent = generateSinglePWD()
    pwd2El.textContent = generateSinglePWD()
}
