

var feedBack = document.querySelector(".button-write-us");
var feedBackModal = document.querySelector(".modal-write-us");
var closeFeedBack = feedBackModal.querySelector(".modal-close");

feedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.add("modal-show");
	});
	
closeFeedBack.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedBackModal.classList.remove("modal-show");
	});

window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (feedBackModal.classList.contains("modal-show")) {
				feedBackModal.classList.remove("modal-show");
			}
		}
	});

/******************************************* */
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

/******************************************* */
var buy = document.querySelectorAll("a.buy-button");
var buyModal = document.querySelector(".modal-cart");
var closeBuy = buyModal.querySelector(".modal-close");

buy.forEach(button => {
		button.addEventListener("click", function (evt) {
				evt.preventDefault();
				buyModal.classList.add("modal-show");
	});
});	

closeBuy.addEventListener("click", function (evt) {
		evt.preventDefault();
		buyModal.classList.remove("modal-show");
});