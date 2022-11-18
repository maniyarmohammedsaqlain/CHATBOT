const input=document.getElementById("textarea")
const butt=document.getElementById("butt")
const givenanwer=document.getElementById("givenanwer")
butt.addEventListener("click",respond)

var answers={
    "HELLO":"Hello Geek! Nice To meet you",
    "HI":"Hello Geek! Hope you and your loved ones are doing well!May your day becomes better and better!",
    "WHOAREYOU":"I am Hytro A Virtual Assistant 😀!How May I help you?",
    "WHOAMI":"You are One of My favourite User❤",
    "OKBYE":"Thank you Geek! Will meet you soon!",
    "BYE":"Thank you Geek! Will meet you soon!",
    "OK":"😀",
    "WHATISMYNAME":"I  don't Know But I was said to call you GEEK😀",
    "MYNAME":"I  don't Know But I was said to call you GEEK😀",
    "HOWAREYOU":"Well! I am doing very well ! Hope the same from you too😀"
}
function respond(){
    var get=input.value
    var convert=get.toUpperCase()
    var main=convert.replaceAll(" ","")
    console.log(main);
    if ((main) in answers){
        givenanwer.innerHTML=answers[main]
    }
    else{
        givenanwer.innerHTML="Sorry!I didn't Understand"
    }
}