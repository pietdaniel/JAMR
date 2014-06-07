
function getLocation() {
	var x = document.getElementById("geoStatus");
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
		$('#geo').hide();
		$('#genre').show();
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	console.log(position);
}