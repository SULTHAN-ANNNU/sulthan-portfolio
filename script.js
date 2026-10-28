const txt = [
"Digital Workplace Support Engineer",
"SCCM Engineer",
"Intune Administrator",
"Autopilot Specialist",
];

let i = 0;
let j = 0;

function typing() {

if(j < txt[i].length){

document.getElementById("typing").innerHTML += txt[i].charAt(j);

j++;

setTimeout(typing,100);

}
else{

setTimeout(() => {

document.getElementById("typing").innerHTML = "";
j = 0;
i = (i + 1) % txt.length;

typing();

},1500);

}

}

typing();
const dock = document.querySelector('.social-dock');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

dock.classList.add("showDock");

}

});

});

observer.observe(
document.querySelector("#contact")
);
document.getElementById("contactBtn").addEventListener("click", function(e){

e.preventDefault();

document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
});

document
.querySelector(".social-dock")
.classList.add("show");

});
const contactSection =
document.querySelector("#contact");

const icons =
document.querySelectorAll(".contact-icon");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

icons.forEach(icon=>{
icon.classList.add("show");
});

}

});

});

observer.observe(contactSection);