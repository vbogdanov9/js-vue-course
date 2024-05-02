const btn = document.querySelector("button");
const link = document.querySelector("a");
// btn.onclick = function() {
//   console.log('click');
// };

// btn.addEventListener('click', function(e) {
//   console.log(e);
// });

// btn.addEventListener('click', e => {
//   console.log(this);
//   console.log(e);
// });

// function clickhandler(e) {
//   e.preventDefault();
//   console.log(this);
//   console.log('click');
// }

// link.addEventListener('click', clickhandler);

// link.removeEventListener('click', clickhandler);

const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.log("button clicked");
  }
});


