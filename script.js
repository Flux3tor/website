const time =
document.getElementById(
  "time"
);

const toast =
document.getElementById(
  "toast"
);

const copyEmail =
document.getElementById(
  "copyEmail"
);

const hero =
document.querySelector(
  ".hero"
);

const originalTitle =
document.title;

function updateTime(){

  const options = {

    hour:"numeric",
    minute:"2-digit",
    hour12:true,
    timeZone:
    "Asia/Kolkata"

  };

  time.textContent =
    new Date()
    .toLocaleTimeString(
      "en-IN",
      options
    )
    .toUpperCase()
    +
    " IST";
}

updateTime();

setInterval(
  updateTime,
  1000
);

const messages = [

  "copied ✔",
  "email copied 📋",
  "got it ✉️",
  "yoinked 📬"

];

function showToast(msg){

  toast.textContent =
  msg;

  toast.classList.add(
    "show"
  );

  setTimeout(()=>{

    toast.classList.remove(
      "show"
    );

  },2000);

}

async function copyMail(){

  try{

    await navigator
    .clipboard
    .writeText(
      "me@flux3tor.xyz"
    );

    const msg =
    messages[
      Math.floor(
        Math.random()
        *
        messages.length
      )
    ];

    showToast(msg);

  }

  catch{

    showToast(
      "copy failed 💀"
    );

  }

}

copyEmail.addEventListener(
  "click",
  copyMail
);

const reveals =
document.querySelectorAll(
  ".reveal"
);

reveals.forEach(
  (element,index)=>{

    setTimeout(()=>{

      element.classList.add(
        "show"
      );

    },50 + (index * 80));

  }
);  

document.addEventListener(
  "visibilitychange",
  ()=>{

    if(document.hidden){

      document.title =
      "come back 👀";

    }

    else{

      document.title =
      originalTitle;

    }

  }
);

console.log(
`
👀 curious?

welcome to flux3tor.xyz

build cool shi-
break cool shi-
repeat
`
);