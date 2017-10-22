chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('Layout.html', {
		'outerBounds': {
			'width': 400,
			'height': 500,
		}
	});
});
