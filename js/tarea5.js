scrolls = document.getElementsByClassName("show-scroll");
$("document").ready(function () {
	//First loop to play any visible animation on start document.
	for (let s of scrolls) {
		showOnScroll(s, "animation");
	}
	//rewrites .section-header sticky position
	$(".section-header").each(function (e) {
		$(this).css("top", $("#main-nav").outerHeight());
	});
});
window.onscroll = function () {
	for (let s of scrolls) {
		showOnScroll(s, "animation");
	}
};

/**
 * This method add an animation css class to gived node based on window viewport*
 * @param {Object} Node node objective who contains.
 * @param {string} cssClass desired animation css class.
 */
function showOnScroll(node, cssClass) {
	delay = node.getAttribute("delay");
	rect = node.getBoundingClientRect();
	if (typeof debug !== "undefined") {
		console.log(
			node.id + "reveal at: " + "top:" + rect.top + ", bottom:" + rect.bottom
		);
		param1 = !node.classList.contains(cssClass);
		param2 = rect.bottom > 0;
		param3 = rect.top < window.innerHeight && rect.bottom > 0;
		console.log("PARAMS: 1:" + param1 + ", 2:" + param2 + ", 3:" + param3);
	} else {
	}

	if (
		!node.classList.contains(cssClass) &&
		rect.bottom > 0 &&
		rect.top < window.innerHeight &&
		rect.bottom > 0
	) {
		if (delay != null) {
			node.style.animationDelay = delay;
		}
		node.classList.add(cssClass);
	} else if (
		node.classList.contains(cssClass) &&
		rect.bottom <= 0 &&
		!(rect.top < window.innerHeight && rect.bottom > 0)
	) {
		node.classList.remove(cssClass);
	}
}
