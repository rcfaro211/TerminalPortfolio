$(document).ready(function () {
	$(".icon").hover(
		function () {
			$(this).addClass("hover");
		},
		function () {
			$(this).removeClass("hover");
		},
	);
	let sideBarOpen = false;
	let snTab = null;

	$(".sideBtn").click(function (e) {
		e.preventDefault();
		snTab = this.id;
		const currentSideBar = $(`#${snTab}SideBar`);
		currentSideBar.toggle();
		$(`.sideBar`).not(currentSideBar).hide();
		sideBarOpen = currentSideBar.is(":visible");
		console.log(snTab);
		if (sideBarOpen) {
			$(".filePage").css("padding-left", "200px");
		} else {
			$(".filePage").css("padding-left", "50px");
		}
	});

	const PROJECTLISTSTR = ["Terminal Style Portfolio", "CLI Toolkit (WIP)"];

	let file1 = document.getElementById("file1");
	let file2 = document.getElementById("file2");
	let file3 = document.getElementById("file3");
	let file4 = document.getElementById("file4");
	let file5 = document.getElementById("file5");
	let chosenFile = null;

	let file1Content = "Resume.pdf";
	let file2Content = "AboutMe.txt";
	let file3Content = "Projects.zip";

	let fileContent = [file1Content, file2Content, file3Content];
	let fileNum = null;

	file1.textContent = "Resume.pdf";
	file2.textContent = "AboutMe.txt";
	file3.textContent = "Projects.zip";

	$(".fileName").click(function (e) {
		e.preventDefault();
		chosenFile = this.id;
		console.log(`File opened: ${chosenFile}`);
		fileNum = Number(this.id.replace(/file/i, ""));
		console.log(`File Number set to: ${fileNum}`);
		$("#chosenFile").text(chosenFile);
		$("#openedFile").text(fileContent[fileNum - 1]);
		console.log(`${fileContent[fileNum - 1]}`);
	});
	$(".gitBTN").click(function (e) { 
		e.preventDefault();
		window.open("https://github.com/rcfaro211", "_blank")
		
	});
});
