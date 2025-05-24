const funContent=document.getElementById("fun-content");
//Is line mein hum div ko grab kar rahe hain jahan random fun message show hoga.


const fun_msgButton=document.getElementById("fun-button");
//is line mein hum button element ko ID se grab kar rahe hain — taaki JavaScript usko control kar sake 
// jab user click kare.

const memeButton=document.getElementById("meme-button");


const shayariButton=document.getElementById("shayari-button");


const funMessages = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "I told my Instagram story about my day... but it’s a highlight reel, not real life.",
    "Why don't programmers like nature? It has too many bugs.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "I don’t have a shopping problem. I have an online-cart problem. It’s always full, but somehow never bought." ,
    "Why do Java developers wear glasses? Because they don’t C#!",
    "Why did my WiFi break up with me? Because we had too many connection issues.",
    "We’re like the WiFi and your phone—sometimes we disconnect, but we always come back stronger."
];
//Yeh array mein humne kuch funny messages daale hain.
// Har baar button click pe, hum ek random message select karenge.


const memeImages=[
     "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif"
];


const shayaris = [
    "Udd jaa un hawaon mein jahan apni pehchaan ho, dar mat, har safar mein ek nayi shaan ho.",
    "Sapne wahi sach hote hain jo neend tod dete hain, aur tu wahi toh hai jo mere khwab se haqikat tak aaya.",
    "Har andhera ek nayi subah ka raasta hota hai, bas vishwas rakh aur chalte jaa.",
    "Zindagi ek kitaab hai, har pal ek nayi kahani likhta hai… aur tu meri kahani ka sabse khoobsurat hissa hai.",
    "Tere saath hoon toh har mushkil asaan lagti hai, tu sirf mohabbat nahi, meri motivation bhi hai.",
    "Haar kar bhi jeet jaate hain log, jab unka hausla unke darr se bada hota hai.",
    "Chand tak jaana hai toh raat se dosti karni padegi… aur tum ho jaise meri raaton ki roshni.",
    "Tum saath ho toh manzil ki chinta nahi hoti, kyunki safar khud mein itna khoobsurat ho jaata hai.",
    "Jo girte hain wahi toh upar uthte hain… aur jo pyaar se girte hain, wo kabhi akela nahi rehta.",
    "Tum mil jao toh lagta hai, sab kuch possible hai, kyunki tum ho toh hausla hai."
];



function getRandomFunMessage()
{
    const randomIndex=Math.floor(Math.random()*funMessages.length);
    funContent.textContent=funMessages[randomIndex];
}

function getRandomMeme()
{
    const randomIndex=Math.floor(Math.random()*memeImages.length);
    funContent.innerHTML=`<img src="${memeImages[randomIndex]}" alt="Random Meme" class="meme-img" />`;
}



function getRandomShayari()
{
    const randomIndex=Math.floor(Math.random()*shayaris.length);
    funContent.textContent=shayaris[randomIndex];
}



fun_msgButton.addEventListener("click",getRandomFunMessage);
// Yeh line kaam karti hai jab user button pe click kare.

// Jab bhi button click hoga, getRandomFunMessage() function run hoga, aur new fun message dikhayi dega.


shayariButton.addEventListener("click",getRandomShayari);

memeButton.addEventListener("click",getRandomMeme);


