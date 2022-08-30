// Word array
const characters = ["reduce", "reference", "freight", "dentist", "punish", "workshop", "offer", "film", "start", "loan", "year", "wisecrack", "stomach", "minute", "disappoint", "omission", "outer", "hold", "flower", "late", "monopoly", "practical", "race", "lead", "bait", "assignment", "provision", "comprehensive", "pause", "performance", "assault", "damn", "monarch", "seal", "abridge", "embox", "temperature", "constellation", "button"];

// Get h1 element
let pass = document.querySelector("h1")

// Create two 12 word pass phrases
function getPass() {
    
        
// loops through randomIndex 12 times to pull 12 words from array
        for (i = 0; i < 12; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        pass.innerHTML += " " + characters[randomIndex]  
        }   
    }
    
// executes and loops through getPass function twice adding a 2 new lines each time   
for (p = 0; p < 2; p++) { 
getPass()
pass.innerHTML += "<br /><br />"
}


