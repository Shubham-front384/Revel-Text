let p = document.querySelector("p");
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let str = p.innerText;
let interval = 0;

p.addEventListener("mouseenter", (e) => {
  interval = 0;
  setInterval(() => {
    let data = str.split("").map((ele, ind) => {
      if (ind < interval) {
        return ele
      }
      return character.split("")[Math.floor(Math.random() * str.length)]
    }).join("");

    p.innerHTML = data;

    interval += 0.2;
  }, 100);
});
