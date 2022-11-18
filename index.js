const input=document.getElementById("textarea")
const butt=document.getElementById("butt")
const givenanwer=document.getElementById("givenanwer")
butt.addEventListener("click",respond)

var answers={
    "HELLO":"Hello Geek! Nice To meet you",
    "HI":"Hello Geek! Hope you and your loved ones are doing well!May your day becomes better and better!",
    "WHO ARE YOU":"I am Hytro A Virtual Assistant 😀!How May I help you?",
    "WHO AM I":"You are One of My favourite User❤",
    "OK BYE":"Thank you Geek! Will meet you soon!",
    "BYE":"Thank you Geek! Will meet you soon!",
    "OK":"😀",
    "WHAT IS MY NAME":"I  don't Know But I was said to call you GEEK😀",
    "MY NAME":"I  don't Know But I was said to call you GEEK😀",
    "How are you":"Well! I am doing very well ! Hope the same from you too😀"
}
function respond(event){
    var get=input.value
    var convert=get.toUpperCase()
    if ((convert) in answers){
        givenanwer.innerHTML=answers[convert]
    }
    else{
        givenanwer.innerHTML="Sorry! I didn't Understand"
    }
}