const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
 "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#"
 ,"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
 ",","|",":",";","<",">",".","?",
"/"];


const generateBtn = document.getElementById("generate-btn")
const passOne = document.getElementById("pass1")
const passTwo = document.getElementById("pass2")
const copyPassOne = document.getElementById("copy-one");
const copyPassTwo = document.getElementById("copy-two");
const resetEl = document.querySelector('.reset-btn')

generateBtn.addEventListener("click", generatePasswords);
copyPassOne.addEventListener("click", () => copyPassword(1));
copyPassTwo.addEventListener("click", () => copyPassword(2));

function generatePasswords (){
  let length = 8;
  let charSet = characters.join('')
 let passWordOne = " ";
 let passWordTwo = " ";
   for( let i = 0, n = charSet.length; i < length; i++ ) {
    passWordOne += charSet.charAt(Math.floor(Math.random() * n))
    passWordTwo += charSet.charAt(Math.floor(Math.random() * n))
  }
 
  passOne.textContent = passWordOne
  passTwo.textContent = passWordTwo
}


function copyPassword(passwordNumber) {
    const passwordElement = document.getElementById(`pass${passwordNumber}`);
    const password = passwordElement.textContent;
  
    const textarea = document.createElement('textarea');
    textarea.value = password;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    alert(`copied`);
  };

  resetEl.addEventListener('click', () => {
    passOne.textContent = "Password 1";
    passTwo.textContent = "Password 2";
  })

   
