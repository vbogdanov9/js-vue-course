const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
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

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("error");
  });

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
  });
  container.appendChild(fragment);
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
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
  });
});

function myHttpRequest({ method, url } = {}, cb) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener("load", () => {
      if (Math.floor(xhr.status / 100) !== 2) {
        cb(`Error. Status code: ${xhr.status}`, xhr);
        return;
      }
      const response = JSON.parse(xhr.responseText);
      cb(null, response);
    });

    xhr.addEventListener("error", () => {
      cb(`Error. Status code: ${xhr.status}`, xhr);
    });

    xhr.send();
  } catch (error) {
    cb(error);
  }
}

// myHttpRequest(
//   {
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//   },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(res);
//   },
// );

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = http();

myHttp.post(
  "https://jsonplaceholder.typicode.com/posts",
  {
    title: "foo",
    body: "bar",
    userId: 1,
  },
  { "Content-Type": "application/json", "x-auth": "asd9387ydh9iuashdis" },
  (err, res) => {
    // console.log(err, res);
  }
);

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       }
//     );
//   });
// }

// function getPostComments(post) {
//   console.log("post = ", post);
//   const { id } = post;
//   console.log("id = ", id);
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve({ post, commetnts: res });
//       }
//     );
//   });
// }

// function getUserCreatedPost(data) {
//   console.log("data = ", data);
//   const {
//     post: { userId },
//   } = data;
//   console.log("userId = ", userId);
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve({ ...data, user: res });
//       }
//     );
//   });
// }

// getPost(50)
//   .then((post) => getPostComments(post))
//   .then((data) => getUserCreatedPost(data))
//   .then((fullData) => console.log("fullData = ", fullData))
//   .catch((err) => console.log("err = ", err))
//   .finally(() => console.log('finally'));

//===================

// function getPost2(id) {
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       }
//     );
//   });
// }

// function getPostComments2(id) {
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       }
//     );
//   });
// }

// function getUserCreatedPost2(userId) {
//   // console.log("userId = ", userId);
//   return new Promise((resolve, reject) => {
//     myHttp.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}`,
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       }
//     );
//   });
// }

// Promise.all([getPost2(1), getPostComments2(1), getUserCreatedPost2(1)])
//   .then((fullData) => {
//     // console.log("fullData = ", fullData);
//     const [post, comments, user] = fullData;
//     // console.log("post, comments, user = ", post, comments, user);
//   })
//   .catch((err) => console.log("err = ", err));

// let myFetch = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     // console.log("response = ", response);
//     // console.log("response.json() = ", response.json());
//     return response.json();
//   })
//   .then((posts) => console.log("posts = ", posts))
//   .catch((err) => console.log("err = ", err));

// console.log("myFetch = ", myFetch);

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => resolve(post))
//       .catch((err) => reject(err));
//   });
// }

// getPost(1).then((post) => console.log("post = ", post));

function getPost2(id) {
  const [useryType, userId] = id.split("-");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
    (response) => response.json()
  );
}

// getPost2(1)
//   .then((post) => console.log("post = ", post))
//   .catch((err) => console.log("err = ", err));

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [useryType, userId] = id.split("-");
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
      (response) => response.json()
    );
  });
}

// getPost3('id-1')
//   .then((post) => console.log("post = ", post))
//   .catch((err) => console.log("err = ", err));
async function getPost(id) {
  try {
    const response1 = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());
    const response2 = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    ).then((res) => res.json());
    return [response1, response2];
  } catch (err) {
    console.log("err = ", err);
    return Promise.reject(err);
  }
}
// console.log("getPost(1) = ", getPost(1));
// getPost(1).then((data) => console.log("data = ", data));
// console.log("getPost() = ", getPost());
// getPost(1)
//   .then((data) => console.log("data = ", data))
//   .catch((err) => console.log("err = ", err));

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
console.log("res1, res2 = ", res1, res2);
}

getAll();








//-----задача про бензоколонки

// function showFile(input) {
//   let file = input.files[0];
//   console.log("file = ", file);
//   let reader = new FileReader(); // без аргументов
//   reader.readAsText(file);
//   reader.onload = function () {
//     console.log("reader.result = ", reader.result);
//   };
// alert(`File name: ${file.name}`); // например, my.png
// alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
// }

// const N = 6; //количество бензоколонок
// const M = 40; //длина кольца
// const sourceArr = [[2,1],

// ]

// Задача 1#38853
// На кольцевой автодороге с двусторонним движением находится N   заправочных станций. Длина кольцевой автодороги равна K   км, нулевой километр и K  -й километр находятся в одной точке. Код заправочной станции совпадает с расстоянием этой станции до нулевой отметки дороги в километрах. На заправочные станции нужно ежедневно доставлять бензин из бензохранилища, которое требуется разместить рядом с одной из заправочных станций. Бензин поставляется в цистернах объёмом V   м3 каждая, затраты на доставку вычисляются как произведение расстояния на количество цистерн, которые требуются для полной заправки бензоколонок станции (для каждой станции нужно своё количество цистерн, лишь одна цистерна может быть заполнена не полностью). За один рейс бензовоз доставляет бензин только на одну заправочную станцию. Бензохранилище расположено так, чтобы суммарные затраты на доставку бензина были минимальными. Определите минимально возможные суммарные затраты на доставку бензина.

// Входные данные:

// Первая строка содержит три числа N  , K   и V   (1 < N < 10000000,1 < K < 10000000,1 < V < 1000)   — количество заправочных станций, длина кольцевой автодороги в километрах и объём цистерны.

// В каждой из следующих N   строк находятся два числа: номер километра кольцевой автодороги, на котором расположена заправочная станция, и количество бензина, которое нужно туда доставить (все числа натуральные). Заправочные станции перечисляются в порядке их расположения на автодороге.

// Пример входных данных:

// 5   11   3

// 1   8

// 3   7

// 5   6

// 7   5

// 9   3

// При таких исходных данных лучше всего расположить бензохранилище около заправочной станции с кодом 3. При этом затраты на доставку бензина составят 2⋅3+ 2 ⋅2 + 4⋅2+ 5 ⋅1 = 23  .

// В ответе укажите два числа: сначала искомое значение для файла A  , затем для файла B  .

// Вложения к задаче

// 27A.txt

// 27B.txt
// f = open(’27b.txt’)
// n, k, v = map(int, f.readline().split())
// a = [0] * k

// k_del, ost  = k // 2, k % 2

// for i in range(n):
//     kilometer_num, kolvo = map(int, f.readline().split())
//     a[kilometer_num % k] = kolvo // v + (kolvo % v > 0)

// min_sum = 10**25
// s = 0
// # Считаем минимальную сумму доставки, если завод стоит на нулевом километре
// for i in range(1, k):
//     s += a[i] * (2*k_del + ost - abs(2*(i-k_del) - ost)) // 2

// d = a[0] + sum(a[k_del + 2:k]) - sum(a[1:k_del + 1])

// for i in range(1, k):
//     s += d
//     d += 2 * a[i] - a[(k_del + i) % k] - a[(k_del + i + ost) % k]
//     min_sum = min(min_sum, s)
// print(min_sum)
// Ответ: 1444502 455926219426
