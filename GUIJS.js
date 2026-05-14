$(document).ready(function () {
	$(".icon").hover(
		function () {
			$(this).addClass("hover");
		},
		function () {
			$(this).removeClass("hover");
		},
	);
	let animRunning = false;

	$("#explorer").click(function (e) {
		e.preventDefault();
		if (animRunning === false) {
			animRunning = true;
			$("#sideBar:not(.explorer)").hide(450);
			$(".explorer").toggle(500);
			setTimeout(() => {
				animRunning = false;
			}, 500);
			console.log("ExplorerOpened");
		}
	});
	$("#Terminal").click(function (e) {
		e.preventDefault();
		if (animRunning === false) {
			animRunning = true;
			$("#sideBar:not(.terminal)").hide(450);
			$(".terminal").toggle(500);
			setTimeout(() => {
				animRunning = false;
			}, 500);
			console.log("TerminalOpened");
		}
	});
	$("#Socials").click(function (e) {
		e.preventDefault();

		if (animRunning === false) {
			animRunning = true;
			$("#sideBar:not(.socials)").hide(450);
			$(".socials").toggle(500);
			setTimeout(() => {
				animRunning = false;
			}, 500);
			console.log("SocialsOpened");
		}
	});
	$("#Github").click(function (e) {
		e.preventDefault();

		if (animRunning === false) {
			animRunning = true;
			$("#sideBar:not(.github)").hide(450);
			$(".github").toggle(500);
			setTimeout(() => {
				animRunning = false;
			}, 500);
			console.log("GithubOpened");
		}
	});

	const PROJECTLISTSTR = ["Terminal Style Portfolio", "CLI Toolkit (WIP)"];

	let file1 = document.getElementById("file1");
	let file2 = document.getElementById("file2");
	let file3 = document.getElementById("file3");
	let file4 = document.getElementById("file4");
	let file5 = document.getElementById("file5");
	let chosenFile = null;

	file1.textContent = "Resume.pdf";
	file2.textContent = "AboutMe.txt";
	file3.textContent = "Projects.zip";



	$(".fileName").click(function (e) { 
		e.preventDefault();
		chosenFile = this.id;
		$("#chosenFile").text(chosenFile);

	});
	

});
