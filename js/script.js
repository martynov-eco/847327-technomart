var buys = document.querySelectorAll("a.buy-button");
var addBookmarks = document.querySelectorAll("a.bookmarks-button");
var buyModal = document.querySelector(".modal-cart");
var closeBuy = buyModal.querySelector(".modal-close");
var cart = document.querySelector(".cart");
var cartCount = document.querySelector(".cart-count");
var bookmarks = document.querySelector(".bookmarks");
var bookmarksCount = document.querySelector(".bookmarks-count");
var continueBuy = buyModal.querySelector(".button-continue");

for (var i=0; i<buys.length; i++) {
		buys[i].addEventListener("click", function (evt) {
				evt.preventDefault();
				buyModal.classList.add("modal-show");
				cart.classList.add("filled-cart");
				cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
		});
};

closeBuy.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyModal.classList.remove("modal-show");
});

continueBuy.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
				evt.preventDefault();
				if (buyModal.classList.contains("modal-show")) {
						buyModal.classList.remove("modal-show");
				}
		}
});

for (var i=0; i<addBookmarks.length; i++) {
		addBookmarks[i].addEventListener("click", function (evt) {
				evt.preventDefault();
				bookmarks.classList.add("filled-bookmarks");
				bookmarksCount.innerHTML = Number(bookmarksCount.innerHTML) + 1;
		});
};

var feedBack = document.querySelector(".button-write-us");
var feedBackModal = document.querySelector(".modal-write-us");
var closeFeedBack = feedBackModal.querySelector(".modal-close");
var userName = feedBackModal.querySelector("[name=users-name]");
var userEmail = feedBackModal.querySelector("[name=users-email]");
var userMessage = feedBackModal.querySelector("[name=users-message]");
var form = feedBackModal.querySelector("form");

feedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.add("modal-show");
		userName.focus();
});

closeFeedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.remove("modal-show");
		feedBackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
				evt.preventDefault();
				if (feedBackModal.classList.contains("modal-show")) {
						feedBackModal.classList.remove("modal-show");
						feedBackModal.classList.remove("modal-error");
				}
		}
});

form.addEventListener("submit", function (evt) {
		if (!userName.value || !userEmail.value || !userMessage) {
				evt.preventDefault();
				feedBackModal.classList.remove("modal-error");
				feedBackModal.offsetWidth = feedBackModal.offsetWidth;
				feedBackModal.classList.add("modal-error");
		}
});

var map = document.querySelector(".map a");
var mapModal = document.querySelector(".modal-map");
var closeMap = mapModal.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapModal.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
				evt.preventDefault();
				if (mapModal.classList.contains("modal-show")) {
				mapModal.classList.remove("modal-show");
				}
		}
});