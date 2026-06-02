$(document).ready(function () {
	const fileSVG = `<img class="fileImg"src="image-removebg-preview.png" />`;
	const PROJECTLISTSTR = [
		"Terminal Style Portfolio",
		"CLI Toolkit (WIP)",
		"placeholder",
		"placeholder",
		"placeholder",
		"placeholder",
	];
	const projects = new Map([
		["0", `https://github.com/rcfaro211/TerminalPortfolio`],
		["1", `https://github.com/rcfaro211/ToolBar`],
	]);
	let row = 1;
	let itemCount = 0;
	for (let i = 0; i < PROJECTLISTSTR.length; i++) {
		if (itemCount % 3 === 0) {
			row += 1;
		}
		$(`.projectsTable #${row}`).append(
			`<td><div class="tableItem" id="${i}">${fileSVG}<p>${PROJECTLISTSTR[i]}</p></div></td>`,
		);
		itemCount += 1;
	}
	$(".tableItem").click(function (e) {
		e.preventDefault();
		console.log(`Open: ${projects.get(`${this.id}`)}`);
		window.open(`${projects.get(this.id)}`, "_blank");
	});
});
