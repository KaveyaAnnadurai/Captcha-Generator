var color,bg,font;
var preview = document.getElementById('preview');
color = document.getElementById('color');
var number = document.getElementById('number');
var n;
var f= document.getElementById('font');
bg = document.getElementById('bg');

var pre;

function changeColor(){
    // chosenTime = e.options[e.selectedIndex].value
    preview.style.color = color.value;
}
function changeBg(){
    preview.style.backgroundColor = bg.value;
}
function changeNumber(){
    n=number.options[number.selectedIndex].value; 
}
function changeFont(){
    font = f.options[f.selectedIndex].value;
    preview.style.fontFamily = font;
}
function generateCaptcha(no){
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i <= no; i++) {
        
        uniquechar += randomchar.charAt(
        Math.random() * randomchar.length)
    }
    return uniquechar;
}

function generate(){
   
 console.log(n)
 console.log(font)
uniquechar = generateCaptcha(n)
 
    // Store generated input
    captchaBox.innerHTML = uniquechar;
    captchaBox.style.color = color.value;
    captchaBox.style.backgroundColor = bg.value;
    captchaBox.style.fontFamily = font;
    
   
    
}