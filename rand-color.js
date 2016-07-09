function randColor(array) {
	var chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
	var colors = [];

	for (var i = 0; i < array.length; i++) {
		var currentColor = '';
		for (var j = 0; j < 6; j++) {
			currentColor += chars[Math.floor(Math.random() * 15-0)];
		}
		colors.push('#' + currentColor);
	}
	return colors;
}
