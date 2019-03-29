
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

// борода

  var link = document.querySelector(".login-link");
  
  var popup = document.querySelector(".modal-login");
  var close = popup.querySelector(".modal-close");
  
  var login = popup.querySelector("[name=login]");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });









