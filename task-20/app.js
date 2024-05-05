// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
// Создать форму добавления пользователя состоящая из полей name, email, username, phone, website при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного пользователя на страницу.

const apiURL = "https://jsonplaceholder.typicode.com";
const usersListEl = document.querySelector(".users-list");
const userInfoEl = document.querySelector(".user-info");

// console.log("usersListEl = ", usersListEl);
// console.log("userInfoEl = ", userInfoEl);

usersListEl.addEventListener("click", onUserClickHandler);

function onUserClickHandler(e) {
  // e.preventDefault();
  // console.log("e.target = ", e.target);
  if (e.target.dataset.userId) {
    getUserHTTP(e.target.dataset.userId, onGetUserInfoCallback);
  }
}

function getUserHTTP(id, cb) {
  // console.log("id = ", id);
  // console.log("cb = ", cb);

  const url = `${apiURL}/users/${id}`;
  const xhr = new XMLHttpRequest();

  // console.log("url = `${apiURL}/users/${id}` = ", url);

  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    // console.log(xhr);

    if (xhr.status !== 200) {
      console.log("Error", xhr.status);
      return;
    }
    const res = JSON.parse(xhr.responseText);
    // console.log("res = JSON.parse(xhr.responseText) = user = ", res);
    cb(res);
  });

  xhr.send();
}

function onGetUserInfoCallback(user) {
  // console.log("user = ", user);

  if (!user.id) {
    console.log("User not found");
    return;
  }
  renderUserInfo(user);
}

function renderUserInfo(user) {
  userInfoEl.innerHTML = "";

  const template = userDetailedInfoTemplate(user);

  // console.log("template = ", template);

  userInfoEl.insertAdjacentHTML("afterbegin", template);
}

function userDetailedInfoTemplate(user) {
  return `
        <div class="card border-dark mb-3">
          <div class="card-header">${user.name}</div>
          <div class="card-body text-dark">
            <h5 class="card-title">${user.email}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
              <li class="list-group-item"><b>Website:</b> ${user.website}</li>
              <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
              <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
            </ul>
          </div>
          <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
        </div>
        `;
}

function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${apiURL}/users`);

  // console.log("xhr = ", xhr);
  // console.log("xhr.status = ", xhr.status);

  xhr.addEventListener("load", () => {
    // console.log("xhr.status = ", xhr.status);
    if (xhr.status !== 200) {
      console.log("Error", xhr.status);
      return;
    }
    const res = JSON.parse(xhr.responseText);

    // console.log("res = ", res);

    cb(res);
  });

  xhr.send();
}

function onGetUsersCallback(users) {
  if (!users.length) {
    return;
  }
  // console.log("users = ", users);
  renderUsersList(users);
}

// Render functions
function renderUsersList(users) {
  let fragment = users.reduce((acc, user) => {
    // console.log("user = ", user);
    // console.log("userListItemTemplate(user) = ", userListItemTemplate(user));
    return acc + userListItemTemplate(user);
  }, "");
  //  console.log("fragment = ", fragment);
  usersListEl.insertAdjacentHTML("afterbegin", fragment);
}

// Template functions
function userListItemTemplate(user) {
  // На каждый элемент списка мы устанавливаем атрибут data-user-id что бы потом по нему получить информацию о пользователе
  return `
        <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
          ${user.name}
        </button>
        `;
}

getUsersHTTP(onGetUsersCallback);
