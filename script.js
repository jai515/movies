document.getElementById("submit_btn").addEventListener("click", (e) => {
  e.preventDefault();

  let searchKeyword = document.getElementById("search").value;

  // let btn = createButton(searchKeyword);
  let btn = document.createElement("button");
  btn.innerHTML = searchKeyword;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("display").innerHTML = "";
    fetch(`https://omdbapi.com/?apikey=999de90c&s=${e.target.innerText}`)
      .then((response) => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
          let card = createCard(movie);
          document.getElementById("display").appendChild(card);
        });
      });
  });

  document.getElementById("search").value = "";

  document.getElementById("search_btn_container").appendChild(btn);
});

function createCard(movie) {
  let card = document.createElement("div");
  card.setAttribute("class", "card p-2");

  let image = document.createElement("img");
  image.setAttribute("src", movie.Poster);
  let body = document.createElement("div");
  body.setAttribute("class", "card-body");
  let title = document.createElement("h3");
  title.setAttribute("class", "card-title");
  let year = document.createElement("p");

  let imdb = document.createElement("a");
  // desc.setAttribute("class", "card-text");

  title.textContent = movie.Title;
  year.textContent = movie.Year;
  imdb.setAttribute("href", `https://imdb.com/title/${movie.imdbID}`);
  imdb.setAttribute("target", "_blank");
  imdb.textContent = "IMDb";
  //photo

  body.append(title, year, imdb);
  card.append(image, body);

  return card;
}

function getJobs(description, location, type) {
  fetch(
    `https://jobs.github.com/positions.json?description=${description}&location=${location}`
  )
    .then((response) => {
      response.json();
    })
    .then((data) => console.log(data));
}
