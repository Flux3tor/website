const typing=document.getElementById("typing");
const time=document.getElementById("time");
const projectsDiv=document.getElementById("projectsDiv");
const toast=document.getElementById("toast");
const copyEmailBtn=document.getElementById("copyEmailBtn");

const text="Flux3tor";
let i=0;
(function type(){
 if(i<text.length){
  typing.textContent+=text[i++];
  setTimeout(type,80);
 }
})();

function updateTime(){
 time.textContent=new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
}
updateTime();setInterval(updateTime,1000);

year.textContent=new Date().getFullYear();

[
 {name:"FluxPad",url:"https://github.com/Flux3tor/FluxPad"},
 {name:"Flux Browser",url:"https://flux3tor.xyz/flux-browser"},
 {name:"Explain My Code",url:"https://explainmycode.flux3tor.xyz"},
 {name:"AlmostWorks",url:"https://flux3tor.xyz/almostworks"},
 {name:"GlitchBound",url:"#"},
 {name:"FluxOSINT",url:"#"}
].forEach(p=>{
 const a=document.createElement("a");
 a.className="chip";
 a.textContent=p.name;
 a.href=p.url;a.target="_blank";
 projectsDiv.appendChild(a);
});

const msgs=["copied ✔","email copied 📋","got it ✉️"];
copyEmailBtn.onclick=()=>{
 navigator.clipboard.writeText("me@flux3tor.xyz");
 toast.textContent=msgs[Math.floor(Math.random()*msgs.length)];
 toast.classList.add("show");
 setTimeout(()=>toast.classList.remove("show"),2000);
};

document.addEventListener("keydown",e=>{
 if(e.key.toLowerCase()==="c")copyEmailBtn.click();
});

document.addEventListener("click",e=>{
 const r=document.createElement("div");
 r.className="ripple";
 r.style.left=e.clientX+"px";
 r.style.top=e.clientY+"px";
 document.body.appendChild(r);
 setTimeout(()=>r.remove(),600);
});

console.log("👀 curious dev?");
console.log("welcome.");
