var header;
var headerIsHidden = false;

window.onload = function() {
	header = document.getElementById('header');
	window.addEventListener("scroll", () => {
		if (window.scrollY > window.innerHeight / 2 && headerIsHidden) {
			pc_show_header();
		} else if (window.scrollY < window.innerHeight / 2 && !headerIsHidden) {
			pc_hide_header();
		}
	});
};

function pc_show_header() {
	header.classList.remove('pc-header-hidden');
	headerIsHidden = false;
}
function pc_hide_header() {
	header.classList.add('pc-header-hidden');
	headerIsHidden = true;
}
function mob_show_header() {
	
}
function mob_hide_header() {
	
}
