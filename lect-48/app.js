const btn = document.querySelector("button");
const container = document.querySelector(".container");

function getPosts(cb) {
  // function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
    // console.log(response);
    // return response;
  });

  xhr.addEventListener("error", () => {
    console.log("hr.addEventListener error");
  });

  xhr.send();
}

function  renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = post.title;

      const article = document.createElement("p");
      article.classList.add("card-text");
      article.textContent = post.body;

      cardBody.appendChild(title);
      cardBody.appendChild(article);

      card.appendChild(cardBody);
      fragment.appendChild(card);
      // console.log("fragment = " , fragment);
    });
    container.appendChild(fragment);
    // console.log()
  };


btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

// response = getPosts();
// console.log(response);
