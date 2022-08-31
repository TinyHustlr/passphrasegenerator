// Character array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Word array
const words = ["reduce", "reference", "freight", "dentist", "punish", "workshop", "offer", "film", "start", "loan", "year", "wisecrack", "stomach", "minute", "disappoint", "omission", "outer", "hold", "flower", "late", "monopoly", "practical", "race", "lead", "bait", "assignment", "provision", "comprehensive", "pause", "performance", "assault", "damn", "monarch", "seal", "abridge", "embox", "temperature", "constellation", "button"];


// Get h1 element
let pass1 = document.querySelector("#passOne")
let pass2 = document.querySelector("#passTwo")
let seed = document.querySelector("#seedPhrase")
console.log(seed)

// Create two 12 word pass phrases
function getPass() {
         
// loops through randomIndex 12 times to pull 12 words from array
        for (i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor( Math.random() * characters.length )
        let randomIndex2 = Math.floor( Math.random() * characters.length )
        pass1.innerHTML += characters[randomIndex1]
        pass2.innerHTML += characters[randomIndex2]
        }   
    }
    
// executes and loops through getPass function twice adding a 2 new lines each time   

function generatePass() {
    pass1.textContent = ""
    pass2.textContent = ""
    getPass()
}

// Create two 12 word pass phrases
function getSeed() {
            
// loops through randomIndex 12 times to pull 12 words from array
        for (i = 0; i < 12; i++) {
        let randomIndex3 = Math.floor( Math.random() * words.length )
        seed.innerHTML += " " + words[randomIndex3]
        console.log(words[randomIndex3])
        }   
}
    
    function generateSeed() {
        seed.textContent = ""
        getSeed()
}

