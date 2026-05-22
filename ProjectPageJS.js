$(document).ready(function () {
	const fileSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#c5c5c5" d="M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79z"/></svg>`;
	const PROJECTLISTSTR = ["Terminal Style Portfolio", "CLI Toolkit (WIP)"];
	const projects = new Map([
		["0", `https://github.com/rcfaro211/TerminalPortfolio`],
		["1", `https://github.com/rcfaro211/ToolBar`],
	]);
	for (let i = 0; i < PROJECTLISTSTR.length; i++) {
		$(".projectsGrid").append(
			`<div class="gridItem" id="${i}">${fileSVG}<p>${PROJECTLISTSTR[i]}</p></div>`,
		);
	}
	$(".gridItem").click(function (e) {
		e.preventDefault();
		console.log(`Open: ${projects.get(`${this.id}`)}`);
		window.open(`${projects.get(this.id)}`, "_blank");
	});
});