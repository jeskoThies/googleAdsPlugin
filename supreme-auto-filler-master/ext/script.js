document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			anzeigentitel_1: document.getElementById('anzeigentitel_1').value,
			anzeigentitel_2: document.getElementById('anzeigentitel_2').value,
			anzeigentitel_3: document.getElementById('anzeigentitel_3').value,
			anzeigentitel_4: document.getElementById('anzeigentitel_4').value,
			anzeigentitel_5: document.getElementById('anzeigentitel_5').value,
			anzeigentitel_6: document.getElementById('anzeigentitel_6').value,
			anzeigentitel_7: document.getElementById('anzeigentitel_7').value,
			anzeigentitel_8: document.getElementById('anzeigentitel_8').value,
			anzeigentitel_10: document.getElementById('anzeigentitel_10').value
		}, function(response) {
			//console.log(response.status);
			console.log("Debugging");			
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('anzeigentitel_1').value = '';
	document.getElementById('anzeigentitel_2').value = '';
	document.getElementById('anzeigentitel_3').value = '';
	document.getElementById('anzeigentitel_4').value = '';
	document.getElementById('anzeigentitel_5').value = '';
	document.getElementById('anzeigentitel_6').value = '';
	document.getElementById('anzeigentitel_7').value = '';
	document.getElementById('anzeigentitel_8').value = '';
	document.getElementById('anzeigentitel_9').value = '';
	document.getElementById('anzeigentitel_10').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		anzeigentitel_1: document.getElementById('anzeigentitel_1').value,
		anzeigentitel_2: document.getElementById('anzeigentitel_2').value,
		anzeigentitel_3: document.getElementById('anzeigentitel_3').value,
		anzeigentitel_4: document.getElementById('anzeigentitel_4').value,
		anzeigentitel_5: document.getElementById('anzeigentitel_5').value,
		anzeigentitel_6: document.getElementById('anzeigentitel_6').value,
		anzeigentitel_7: document.getElementById('anzeigentitel_7').value,
		anzeigentitel_8: document.getElementById('anzeigentitel_8').value,
		anzeigentitel_10: document.getElementById('anzeigentitel_10').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'anzeigentitel_1',
		'anzeigentitel_2',
		'anzeigentitel_3',
		'anzeigentitel_4',
		'anzeigentitel_5',
		'anzeigentitel_6',
		'anzeigentitel_7',
		'anzeigentitel_8',
		'anzeigentitel_9',
		'month',
		'year',
		'anzeigentitel_10'
	], function(result) {
		document.getElementById('anzeigentitel_1').value = result.anzeigentitel_1;
		document.getElementById('anzeigentitel_2').value = result.anzeigentitel_2;
		document.getElementById('anzeigentitel_3').value = result.anzeigentitel_3;
		document.getElementById('anzeigentitel_4').value = result.anzeigentitel_4;
		document.getElementById('anzeigentitel_5').value = result.anzeigentitel_5;
		document.getElementById('anzeigentitel_6').value = result.anzeigentitel_6;
		document.getElementById('anzeigentitel_7').value = result.anzeigentitel_7;
		document.getElementById('anzeigentitel_8').value = result.anzeigentitel_8;
		document.getElementById('anzeigentitel_10').value = result.anzeigentitel_10;
	});
});
