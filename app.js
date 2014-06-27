var app = (function() {

	"use strict";

	var urlsToView = [{
			url: 'http://www.bom.gov.au/',
			keepInterval: 5000,
			hourStart: 8,
			hourEnd: 17
		}, {
			url: 'http://www.azure.com',
			keepInterval: 5000,
			hourStart: 8,
			hourEnd: 17
		}, {
			url: 'http://www.simpleisbest.co.uk',
			keepInterval: 5000
		}],
		defaultChangeInterval = 0;

	var iframe1 = document.getElementById("iframe1"),
		iframe2 = document.getElementById("iframe2"),
		showingIFrame1 = true,
		urlIndex = 0;

	iframe1.onload = function() {
		iframe2.style.display = "none";
		iframe1.style.display = "";
	};

	iframe2.onload = function() {
		iframe1.style.display = "none";
		iframe2.style.display = "";
	};

	function changeIFrameSrc() {

		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var foundScreenToDisplay = false;

		while (!foundScreenToDisplay) {
			var urlConfig = urlsToView[urlIndex];

			if (
				(!urlConfig.hourStart || !urlConfig.hourEnd) ||
				(currentHour >= urlConfig.hourStart && currentHour < urlConfig.hourEnd)) {
				foundScreenToDisplay = true;
			}

			urlIndex = urlIndex == urlsToView.length - 1 ? 0 : urlIndex + 1;
		}

		var iFrameToUpdate = showingIFrame1 ? iframe2 : iframe1;
		iFrameToUpdate.src = urlConfig.url;
		showingIFrame1 = !showingIFrame1;

		setTimeout(changeIFrameSrc, urlConfig.keepInterval || defaultChangeInterval);
	}

	changeIFrameSrc();

})();