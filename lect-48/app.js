const btn = document.querySelector("button.btn-get-posts");
const btnAddPost = document.querySelector("button.btn-add-post");
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

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("hr.addEventListener error");
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
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
  return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTemplate(post);
    fragment.appendChild(card);
    // console.log("fragment = " , fragment);
  });
  container.appendChild(fragment);
  // console.log()
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  createPost(newPost, (response) => {
    // console.log(response);
    const card = cardTemplate(response);
    // console.log(card);
    container.insertAdjacentElement("afterbegin", card);
  });
});


// response = getPosts();
// console.log(response);

