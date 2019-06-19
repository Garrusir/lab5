function openNav(){
	let x = document.getElementById('topNav');
	console.log(x);
	if (x.className === "navigation") {
		x.className += " responsive"
	} else x.className = "navigation";
}


