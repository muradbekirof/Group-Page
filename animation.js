const text=document.querySelector(".int");
const words=text.textContent;
const intoWords=words.split("");
//For testing if text is splitted into words correctly: console.log(intoWords);
text.textContent="";
for(let word=0; word<intoWords.length; word++){
    text.innerHTML+="<span>"+intoWords[word]+"</span>";
}
let l=0;
let clock=setInterval(onTick,150);

function done(){
clearInterval(clock);
clock=null;
}

function onTick(){
const span=text.querySelectorAll('span')[l];
span.classList.add('hide');
l++;
if(l===intoWords.length)
    done();
}
