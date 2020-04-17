window.onload = function() {
	alert('ⓘただいま工事中');
}

var timeoutId;
function scrollWindow(v) {
	if ( timeoutId || v.scrollTop > window.innerHeight * 2 ) return ;
	timeoutId = setTimeout( function () {
		timeoutId = 0 ;
		var opacity = Math.min(v.scrollTop / window.innerHeight, 1) * 0.75;
		var bgcolor = "rgba(0, 0, 0, " + opacity + ")";
		document.getElementById('main_content').style.backgroundColor = bgcolor;
	}, 25 ) ;
}

function copyright() {
	var day = new Date(document.lastModified);
	var y = day.getFullYear();
	var m = day.getMonth() + 1;
	var d = day.getDate();
	return "©Fuko Orch. Club " + y + "/" + m + "/" + d
}