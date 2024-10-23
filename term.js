const str = "To get started; type help and press Enter!";
const body = document.body;

//Container id is stored
const container = document.getElementById('container');

//All p tags
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');

// All text fields are selected 
const fixedText1 = document.getElementById('fixedText1');
const fixedText2 = document.getElementById('fixedText2');
const fixedText3 = document.getElementById('fixedText3');
const animatedText1 = document.getElementById('animatedText1');

// Text field entered for terminal
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const termText1 = document.getElementById('termText1');
const termText2 = document.getElementById('termText2');
const termText3 = document.getElementById('termText3');

//Input field text
const textField = document.getElementById('textField')

//Loading cursor element for display
const cursor = document.getElementById('cursor');

// terminal load text
async function loadTerminalText() {
    setTimeout(() => {
        t4.style.visibility = 'visible';
        text1.innerHTML = " shashwat@tewari's-Victus ";
        text2.innerHTML = " (main) ";
        text3.innerHTML = " ~> ";
        
        // Select text present in the input tag
        textField.value = "help";
        textField.focus();
        textField.select();
    }, 2000);
}

async function cursorAnimation(){
    // Set the cursor's initial visibility
    cursor.style.visibility = 'visible';
    
    // Start blinking the cursor
    let count=0;
    let cursorStop = setInterval(() => {
        cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
        count++;
        if(count==4)
            clearInterval(cursorStop);
    }, 400);
    cursor.style.visibility = 'hidden';
    loadTerminalText();
}

async function animText(str1) {
    let i = 0;
    cursor.style.visibility = "visible";
    let textLoad = setInterval(() => {
        animatedText1.innerHTML += str1.charAt(i); 
        i++;
        if (i >= str1.length) {
            clearInterval(textLoad);
            cursorAnimation();
        }
    }, 40);
}

async function startAnimation(){
    animText(str);
}

// Create random background color
function selectColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return [r,g,b];
}

let color1 = selectColor();
let color2 = selectColor();

const linearGradientPositions = ["to top","to top right","to right","to bottom right","to bottom","to bottom left","to left","to top left"];
let position = linearGradientPositions[Math.floor(Math.random()*linearGradientPositions.length)];

body.style.background = `linear-gradient(${position}, rgb(${color1[0]} , ${color1[1]} , ${color1[2]}), rgb(${color2[0]} , ${color2[1]} , ${color2[2]}))`;

// Different actions based on different commands
async function langCommand(){
    const langURL = `greeting.json`;
    let responseLang = await fetch(langURL);
    let langReturn = await responseLang.json();

    let randomNo = Math.floor(Math.random()*langReturn.length);
    return [langReturn[randomNo].hello, langReturn[randomNo].language]
}

//1. Help command function
async function helpFunction(){
    let langUsed = await langCommand();
    
    let strContent1 = `${langUsed[0]} (${langUsed[1]})! Please choose from the following list of available commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home`;
    animatedText1.innerHTML = '';
    animText(strContent1);
}

//2. Resume Function
async function resumeFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent4 = `${langUsed[0]} (${langUsed[1]})! Thanks for the query. Get my resume here: https://drive.google.com/file/d/1oCXNWWzZ523vujGiLvGXG2cxBFmtU2Mt/view. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`
    animText(strContent4);
    setTimeout(() => {
        window.open(`https://drive.google.com/file/d/1mdh_vBFplBUDYGBmijI2QV2d5VCI05Yx/view?usp=sharing`, `_blank`);
    }, 10000);
}

//3. Bio Function
async function bioFunction(){
    let langUsed = await langCommand();
    
    let strContent1 = `${langUsed[0]} (${langUsed[1]})! Welcome to the life of Shashwat Tewari. He is currently a 4th year student at MIT, Moradabad. He has worked on many projects related to MERN technology and is quite proficient in it. He is currently doing DSA in Java Language, but can also code in multiple different languages if required. Currently looking for my first break in the field of development. If you need someone reliable and efficient, you've found the right guy ;)`;
    animatedText1.innerHTML = '';
    animText(strContent1);
}

//4. Linkedin Function
async function linkedinFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent4 = `${langUsed[0]} (${langUsed[1]})! Connect with Shashwat on LinkedIn here: https://www.linkedin.com/in/shashwat-tewari-5460b4263/. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`
    animText(strContent4);
    setTimeout(() => {
        window.open(`https://www.linkedin.com/in/shashwat-tewari-5460b4263/`, `_blank`);
    }, 10000);
}

// 5. Random Function
async function randomFunction(){
    let langUsed = await langCommand();

    let randomURL = `fact.json`;
    let response = await fetch(randomURL);
    let fact = await response.json();
    let randomNo = Math.floor(Math.random()*fact.length);


    let strContent5 = `${langUsed[0]} (${langUsed[1]}) ! Here is a random fact about Shashwat. ${fact[randomNo].response}`;
    animatedText1.innerHTML = '';
    animText(strContent5);
}

//6. Github profile link
async function githubFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent4 = `${langUsed[0]} (${langUsed[1]})! Most of the Shashwat's contribution goes to github and are visible in his public profile. Here is Shashwat's github url: https://github.com/tewarishash12. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`
    animText(strContent4);
    setTimeout(() => {
        window.open(`https://github.com/tewarishash12`, `_blank`);
    }, 10000);
}

//7. Contact Function
async function contactFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent4 = `${langUsed[0]} (${langUsed[1]})! Shashwat is reachable at: tewarishashwat2002@gmail.com. You maybe be looking for the following commands: linkedin, github.`
    animText(strContent4);
}

//8. Date Function
async function dateFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let currentDate = new Date();
    let strContent4 = `${langUsed[0]} (${langUsed[1]})! The current date timestamp is: ${currentDate.toUTCString()}`;
    animText(strContent4);
}

// Commands under process
async function comingsoonFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent = `${langUsed[0]} (${langUsed[1]})! This is a special command. Coming soon.....`;
    animText(strContent);
}

// incase of invalid input
async function errorFunction(){
    animatedText1.innerHTML = '';
    let langUsed = await langCommand();
    let strContent = `${langUsed[0]} (${langUsed[1]})! Whoops, this cannot be done. Please use one of the following available commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home`;
    animText(strContent);
}

//Executed command
function executedCommand(input){
    fixedText1.innerHTML = `Executed Command: ${input}`;
}

function checkInputValue(input){
    executedCommand(input);
    t2.style.display = 'none';
    t4.style.visibility = 'hidden'
    switch(input){
        case 'help':
            helpFunction();
            break;
        case 'resume':
            resumeFunction();
            break;
        case 'bio':
            bioFunction();
            break;
        case 'linkedin':
            linkedinFunction();
            break;
        case 'random':
            randomFunction();
            break;
        case 'github':
            githubFunction();
            break;
        case 'contact':
            contactFunction();
            break;
        case 'date':
            dateFunction();
            break;
        case 'projects':
        case 'clear':
        case 'new':
        case 'man':
        case 'home':
            comingsoonFunction();
            break;
        default:
            errorFunction();
            break;
    }
}


// Functions for performing various input commands
function inputCommand(e){
    if(e.key == "Enter")
        checkInputValue(textField.value);
}

container.addEventListener('animationend', startAnimation);
textField.addEventListener('keypress', inputCommand);