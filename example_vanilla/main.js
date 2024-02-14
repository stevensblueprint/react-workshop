// Adding some list items using javascript

for (let i = 0; i < 3; i++) {
	const languageName = "Javascript";
	document.getElementById("list").innerHTML += `<li class='blue'>This was added by ${languageName}</li>`;
}
