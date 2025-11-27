let p = document.querySelector("p");
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let str = p.innerText;
let interval;

p.addEventListener("mouseenter", (e) => {
  
  clearInterval(interval);

  interval = setInterval(() => {
    let data = str.split("").map((ele, ind) => {
      return character.split("")[Math.floor(Math.random() * str.length)]
    }).join("");

    p.innerHTML = data;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    p.innerText = str;
  }, 1000);
  
});
