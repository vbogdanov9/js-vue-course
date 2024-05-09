// const categoriesArr = [
//   "all",
//   "business",
//   "entertainment",
//   "general",
//   "health",
//   "science",
//   "sports",
//   "echnology",
// ];

const categoriesObj = {
  all: "All",
  business: "Business",
  entertainment: "Entertainment",
  general: "General",
  health: "Health",
  science: "Science",
  sports: "Sports",
  technology: "Technology",
};

function renderCategories(catsObj) {
  let fragment = "";
  let categoryEl = document.getElementById("category");
  for (catName in catsObj) {
    fragment += `<option value="${catName}">${catsObj[catName]}</option>`;
  }
  // console.log("fragment = ", fragment);
  // console.log("categoryEl = ", categoryEl);
  categoryEl.insertAdjacentHTML("afterbegin", fragment);
}
renderCategories(categoriesObj);

// Custom Http Module
function customHttp() {
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
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "fbd6d6e7f930417ca3964165605c39b6";
  // const apiKey = "";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", category = "all", cb) {
      console.log("country = ", country);
      console.log("category = ", category);
      let url = "";
      if (category === "all") {
        url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`;
      } else {
        url = `${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
      }
      console.log("url = ", url);
      http.get(url, cb);
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

//Elements
const form = document.forms["newsControls"];
const countrySelect = form.elements["country"];
const categorySelect = form.elements["category"];
const searchInput = form.elements["search"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// load news function
function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const category = categorySelect.value;
  const searchText = searchInput.value;

  if (!searchText) {
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
}

// Function on get response from server
function onGetResponse(err, res) {
  removePreloader();
  // console.log("res = ", res);
  // console.log("res.articles = ", res.articles);
  if (err) {
    showAlert(err, "error-msg");
    return;
  }

  if (!res.articles.length) {
    // show empty message
    showAlert("новостей не найдено", "error-msg");
    return;
  }

  renderNews(res.articles);
}

// function render news
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }

  // console.log("newsContainer = ", newsContainer);
  let fragment = "";
  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  // console.log(fragment);

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

// очистить контейнер с новостями
function clearContainer(container) {
  // container.innerHTML = "";
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

// news item template function
function newsTemplate({ urlToImage, title, url, description }) {
  // console.log(
  //   "urlToImage = ",
  //   urlToImage,
  //   title,
  //   url,
  //   description
  // );

  if (!urlToImage) {
    urlToImage = "default-photo.jpg";
  }

  console.log('urlToImage = ', urlToImage);

  return `<div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="${urlToImage}" />
            <span class="card-title">${title || ""}</span>
          </div>
          <div class="card-content">
            <p>${description || ""}</p>
          </div>
          <div class="card-action">
            <a href="${url}">Read more</a>
          </div>
        </div>
      </div>`;
}

// предупреждение
function showAlert(msg, type = "success") {
  M.toast({ html: msg, classes: type });
}

// show loader function
function showLoader() {
  const preloader = `<div class="progress">
      <div class="indeterminate"></div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", preloader);
}

//Remove loader function
function removePreloader() {
  const loader = document.querySelector(".progress");
  if (loader) {
    loader.remove();
  }
}
