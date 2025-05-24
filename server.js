
// Tumhara front-end (HTML, CSS, JavaScript) already memes, shayari, aur fun messages ko show kar raha hai,
//  lekin Node.js aur Express.js ko use karne ka main reason yeh hoga ki data ko dynamically handle kar sakein 
// aur client-side se requests receive kar ke response dena.

//Express.js humare backend server ka kaam karega, jaha par tum random memes, shayari, aur fun messages ko
//  serve kar sakti ho. Tumhare front-end se jo button click request jaati hai, wo Express server ko hit karegi
//  aur server uss request ke liye appropriate response bhejega.

// Tumhare front-end mein buttons hain (e.g., "Show Random Meme", "Show Random Shayari"), jab user in buttons pe 
// click karta hai, toh HTTP requests backend server (Express.js) ko bheji jaati hai.

// Express.js in requests ko handle karke response (meme ya shayari) send karta hai jo frontend pe dikhayi deta hai.

//  APIs for Random Content:
// Tum Express.js ke andar alag-alag routes bana sakti ho jaise /meme, /shayari etc.

// Jaise hi user koi button click karta hai, tumhara front-end ek GET request send karega /meme ya /shayari route par,
//  aur server random meme ya shayari return karega.

// Tum Node.js aur Express.js ka use karke apne content ko static na rakhte hue, dynamic aur flexible bana sakti ho. 
// Jaise agar tum memes ya shayari ko kisi external API se fetch karna chahti ho, toh tum Express.js ke routes bana kar APIs se connect kar sakti ho.

// Agar tum future mein apne content ko update karna chahti ho (jaise naye memes ya shayari add karna), toh tum backend par easily naye 
// data ko store kar sakti ho, aur tumhare frontend ko bas request bhejna hoga. Isse tumhe data manually update karne ki zaroorat nahi hogi.
// Flexibility: Tum apne project ko scale kar sakti ho, jisme tum memes ko external API se fetch kar sakti ho.
// Scalability: Agar future mein tum apne project mein aur features add karna chahti ho, toh Node.js aur Express.js ka ecosystem easily support karega.


const express=require("express");
//const express = require('express'): Ye line Express module ko apne project mein import karti hai.
//  Matlab, hum Express ki functionalities ko apne project mein use kar sakte hain.


const app=express();
//const app = express(): Is line mein humne Express app create kiya hai. Ye app humare server ko 
// configure karega.


const cors=require("cors");
 // 👈 CORS allow karne ke liye import

const port=3000;


//middlewares
app.use(cors());      // 👈 Allow cross-origin requests
//Cross-Origin Resource Sharing allow kiya (future frontend integration ke liye zaroori)


app.use(express.json());       // 👈 Parse incoming JSON bodies (for POST requests)
app.use(express.urlencoded({extended:true}));     // Parse URL-encoded bodies


// ✅ Static files serve karne ke liye (jaise HTML, CSS, JS Frontend)
app.use(express.static("public"));
//	/public folder se HTML, CSS, JS serve kar sakte ho



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

app.get("/",(req,res)=>{
    res.send("welcome to the random run-zone Visit /random-fun, /random-meme, /random-shayari for magic ")
})
//app.get('/', (req, res) => {...}): Ye line humare server pe ek route define kar rahi hai. Jab user
// home page (/) pe request karega, server "Hello, World!" response dega.


app.get("/random-fun",(req,res)=>{
    const randomIndex=Math.floor(Math.random()*funMessages.length);
    res.json({message:funMessages[randomIndex]})
})
// Route for random fun message
// Yeh route /random-fun path pe request aane par ek random fun message ko JSON format mein return karega.



app.get("/random-meme",(req,res)=>{
    const randomIndex=Math.floor(Math.random()*memeImages.length);
    res.json({memUrl:memeImages[randomIndex]});
})
// Route for random meme
// Yeh route /random-meme path pe request aane par ek random meme URL ko JSON format mein return karega.



app.get("/random-shayari",(req,res)=>{
    const randomIndex=Math.floor(Math.random()*shayaris.length);
    res.json({shayari:shayaris[randomIndex]});
})
// Route for random shayari
// Yeh route /random-shayari path pe request aane par ek random shayari ko JSON format mein return karega.



// ✅ Future Ready: Add POST endpoint (optional future use case)
// New shayari ko add karne ka option diya

app.post("/add-shayari",(req,res)=>{
    const {newShayri}=req.body;
    if(newShayri)
    {
        shayaris.push(newShayri);
        res.status(201).json({message:"new shayari added successfully"})
    }
    else 
    {
        res.status(400).json({error: "please provide a valid shayari"})
    }
})


// ✅ 404 Route (agar koi galat route par jaaye to)
app.use((req,res)=>{
    res.status(404).json({error:"Page not found. please check the URL"})
})
// Wrong URL ke liye friendly error message diya



// ✅ Error Handling Middleware (backend mein zaroori hota hai)
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:"something went wrong on the server"})
})
// Agar backend mein koi error aaye to gracefully handle kare


app.listen(port,()=>{
    console.log(`server started at port:${port}`);
})
//app.listen(port, () => {...}): Is line ka kaam hai server ko port 3000 pe listen karwana. Jab
//  tum browser mein http://localhost:3000 visit karoge, tab tumhe "Hello, World!" dikhega.



// ✅ Tum frontend mein dikhane waala kaam backend mein bhi karte ho, taaki:

// Secure ho,

// Centralized Control server ke paas ho,

// Dynamic data aa sake,

// Large scale app ready ho future ke liye.

// Frontend mein apan sirf data show karte hain.
// Backend mein apan data manage, serve aur protect karte hain.
