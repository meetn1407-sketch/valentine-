const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

const noPopup = document.getElementById("noPopup");
const closeBtn = document.getElementById("closeBtn");

yesBtn.addEventListener("click", () => {

  result.style.display = "block";
  startHearts();

});

noBtn.addEventListener("click", () => {

  noPopup.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

  noPopup.style.display = "none";

});

function startHearts(){
  for(let i = 0; i < 30; i++){
    setTimeout(createHeart, i * 70);
  }
}

function createHeart(){

  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤️";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 16 + Math.random() * 20 + "px";

  document.body.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 2000);

}
