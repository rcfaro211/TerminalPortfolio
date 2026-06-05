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
	let fileSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#c5c5c5" d="M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79z"/></svg>`;
	$(".sideBtn").click(function (e) {
		e.preventDefault();

		snTab = this.id;
		const currentSideBar = $(`#${snTab}SideBar`);

		const isOpen = currentSideBar.is(":visible");

		$(".sideBar").hide("10");

		if (!isOpen) {
			currentSideBar.show("10");

			$(".filePage").css({
				"padding-left": "150px",
				width: "95%",
			});
		} else {
			$(".filePage").css({
				"padding-left": "0px",
				width: "100%",
			});
		}

		console.log(snTab);
	});


	$(".gitBTN").click(function (e) {
		e.preventDefault();
		window.open("https://github.com/rcfaro211", "_blank");
	});
	$(".TuiBtn").click(function (e) { 
		e.preventDefault();
		window.location.href = "TerminalPage.html"
	});
	$("#openAbout").click(function (e) { 
		e.preventDefault();
		$(".home").hide();
		$("#chosenFile").text("About");
		$("#aboutDisplay").show();
	});
});