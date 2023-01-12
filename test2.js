const fetch=require("node-fetch");
function getNumberInfo(number, format) {
	const API_URL = `http://numbersapi.com/${number}/${format}`;
	fetch(API_URL).then(response => response.text()).then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});
}
getNumberInfo(42, 'trivia');