

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

