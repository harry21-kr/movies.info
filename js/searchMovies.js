import useMovieData from "./hook/useMovieData.js";
import MoviesInfo from "./components/MoviesInfo.js";
import { addShowDialogEvent } from "./utils/index.js";

const { getSearchedMoviesData } = useMovieData();

const inputTag = document.getElementById("search-movie-input");

document
  .getElementById("search-movie-button")
  .addEventListener("click", async () => {
    const query = document.getElementById("search-movie-input").value;
    const data = await getSearchedMoviesData(1, query);
    renderSearchedResult(data);
    addShowDialogEvent(data);
  });

inputTag.focus();

inputTag.addEventListener("change", async (e) => {
  const query = e.target.value;
  const data = await getSearchedMoviesData(1, query);
  renderSearchedResult(data);
  addShowDialogEvent(data);
});

function renderSearchedResult(data) {
  const oldSection = document.getElementById("searched-movie-section");
  if (oldSection) {
    oldSection.remove();
  }

  const searchedMovieElements = MoviesInfo(data);

  const adId = document.getElementById("ad-banner");
  const searchedSection = document.createElement("section");
  const searchedDiv = document.createElement("div");
  const searchedH3 = document.createElement("h3");

  searchedSection.id = "searched-movie-section";
  searchedDiv.id = "searched-movie-wrap";
  searchedH3.innerText = data.length ? "검색 결과" : "검색 결과가 없습니다.";
  searchedSection.appendChild(searchedH3);
  searchedSection.appendChild(searchedDiv);

  searchedDiv.innerHTML = searchedMovieElements;

  adId.after(searchedSection);
}
