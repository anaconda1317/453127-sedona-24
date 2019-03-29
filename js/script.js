
/********** Модальное окно "Поиск гостиницы в Седоне" **********/

var searchOpen = document.querySelector(".search-open-btn");
var searchForm =  document.querySelector(".search-form");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("search-form-hide");
  };

  searchOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form-hide");
    searchForm.classList.toggle("search-form-show");
  });
};

