// Character array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Get h1 element
let pass1 = document.querySelector("#passOne")
let pass2 = document.querySelector("#passTwo")

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

