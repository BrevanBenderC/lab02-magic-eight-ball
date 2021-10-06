

const button = document.getElementById('btn');
const input = document.getElementById('userinput');
let output = document.getElementById('magic');
const answers = [
    'fo sho',
    'you betcha',
    'of course',
    'hell yeah sibling',
    'so what if all the answers are yes? I am an enabler',
    'most indubitably',
    'quite so'
];


function getAnswer(){

    let randomAnswer = answers[number];
    document.getElementById('output').innerHTML=randomAnswer;

}


button.addEventListener('click', ()=>{
    let number = [Math.floor(Math.random() * 7)];
    output.innerHTML = answers[number];

    console.log(answers[number])
})