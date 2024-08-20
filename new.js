//declaration of variables
const inputBox = document.getElementById("inputBox")
const button = document.getElementById("button")

//logic
const length = 12;
let password = ''
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = '1234567890'
const symbol = "|{}_-+=?/>.<,!@#$%^&*"
const allChar = upperCase + lowerCase + number + symbol



button.addEventListener("click", function createPassword(){
    password += upperCase.charAt(Math.random() * upperCase.length)
    password += lowerCase.charAt(Math.random() * lowerCase.length)
    password += number.charAt(Math.random() * number.length)
    password += symbol.charAt(Math.random() * symbol.length)
    password += upperCase.charAt(Math.random() * upperCase.length)
    while(password.length<length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    changeValue()
    
})

function changeValue (){
    inputBox.value = password
    console.log(password);
    password = ''
    
}

//copy function 
const copyButton = document.getElementById("copy")
copyButton.addEventListener("click", function(){
    //inputBox.ariaSelected()
    navigator.clipboard.writeText(inputBox.value)
    alert("copied")
})


