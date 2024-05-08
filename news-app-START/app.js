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
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// load news function

function loadNews() {
  newsService.topHeadlines("ua", onGetResponse);
}

// Function on get response from server
function onGetResponse(err, res) {
  // console.log("res = ", res);
  // console.log("res.articles = ", res.articles);

  renderNews(res.articles);
}

// function render news
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  // console.log("newsContainer = ", newsContainer);
  let fragment = "";
  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  console.log(fragment);

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

// news item template function
function newsTemplate({ urlToImage, title, url, description }) {
  // console.log(
  //   "urlToImage, title, url, description = ",
  //   urlToImage,
  //   title,
  //   url,
  //   description
  // );

  // return `<div class="col s12">
  //     <div class="card">
  //       <div class="card-image">
  //         <img src="${urlToImage}" alt="">
  //         <span class="card-title">${title || ""}</span>
  //         <div class="card-content">
  //           <p>${description || ""}</p>
  //         </div>
  //         <div class="card-action"><a href="${url}">Read more</a></div>
  //       </div>
  //     </div>
  //   </div>`;



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
