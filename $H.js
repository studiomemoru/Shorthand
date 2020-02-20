/* $horthand.js */

var $H = function(id) {
	return window.document.getElementById(id)
}

$H.isset = function(obj) {
  return !(obj === null || typeof obj === "undefined")
}

$H.later = function(func) {
	setTimeout(func, 0)
}
