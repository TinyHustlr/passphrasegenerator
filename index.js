// Character array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Get h1 element
let pass = document.querySelector("h1")

// Create two 12 word pass phrases
function getPass() {
    
        
// loops through randomIndex 12 times to pull 12 words from array
        for (i = 0; i < 12; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        pass.innerHTML += characters[randomIndex]  
        }   
    }
    
// executes and loops through getPass function twice adding a 2 new lines each time   
for (p = 0; p < 2; p++) { 
getPass()
pass.innerHTML += "<br /><br />"
}


