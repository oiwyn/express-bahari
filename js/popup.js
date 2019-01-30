// bahari - owynn
var modals = document.getElementsByClassName('modal-price');
var btns = document.getElementsByClassName("button-popup");
var spans = document.getElementsByClassName("close-price");
for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function() {
		modals[i].style.display = "block";
	}
}
for (let i = 0; i < spans.length; i++) {
	spans[i].onclick = function() {
		modals[i].style.display = "none";
	}
}