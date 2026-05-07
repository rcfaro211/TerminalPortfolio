//{ Variable Declarations
const cmdField = document.getElementById("inputForm");
const padding = " ".repeat(16);
//{ Project List Vars
const PROJECTLIST = [
	`-1 ${padding}Terminal Style Portfolio (This Project)`,
	`-2 ${padding}CLI Toolkit (WIP)`,
];
const PROJECTLISTSTR = ["Terminal Style Portfolio", "CLI Toolkit (WIP)"];
const project_List = PROJECTLIST.join("\n");
const project_help = `Usage: Projects \n-(1-${PROJECTLIST.length})${padding}Opens a project depending on the number\n      ${padding}(see project list with "Projects -l")\n\n-H    ${padding}Displays this menu\n\n-L    ${padding}Displays a list of all my projects\n`;
//}
const COMMANDLIST = [
	`ECHO    ${padding}Display text`,
	`HELP    ${padding}Displays this menu`,
	`CLS     ${padding}Clears the screen`,
	`GIT     ${padding}Opens my personal GitHub page`,
	`LS      ${padding}Lists all available directories`,
	`PROJECTS${padding}Show all of my projects`,
];
const DIRECTORYLIST = ["ABOUT.TXT", "CREDITS.EXE", "EXPERIENCE.TXT", "GUI.EXE"];
const directory_List = DIRECTORYLIST.join("\n");
const commands_List = COMMANDLIST.join("\n");
const outputField = document.getElementById("cmdOutputField");
let prefix = "PF C:\\>";
document.getElementById("prefix").textContent = `${prefix}`;
//}


cmdField.addEventListener("submit", function (event) {
	event.preventDefault();

	const input = document.getElementById("CmdInput");
	const cmdInput = input.value.toUpperCase().trim();
	const indexMatching = cmdInput.match(/^PROJECTS -(\d+)$/);

	if (cmdInput === "") {
		return;
	}
	//{ Help menu command
	if (cmdInput === "HELP" || cmdInput === "H") {
		const cmdOutput = document.createElement("div");
		cmdOutput.className = "cmdOutputs";
		cmdOutput.textContent = `${prefix} ${cmdInput}`;
		outputField.appendChild(cmdOutput);
		const helpMenu = document.createElement("div");
		helpMenu.className = "cmdOutputs";
		helpMenu.textContent = `${commands_List}`;
		outputField.appendChild(helpMenu);
		input.value = "";
		input.focus();
		return;
	}
	//}
	//{ Echo command
	if (cmdInput.includes("ECHO ") || cmdInput.includes(" ECHO")) {
		const echoList = cmdInput.split(" ");
		if (echoList[0] === "ECHO") {
			const cmdOutput = document.createElement("div");
			cmdOutput.className = "cmdOutputs";
			cmdOutput.textContent = `${prefix} ${cmdInput}`;
			outputField.appendChild(cmdOutput);
			const echoOutput = document.createElement("div");
			echoOutput.className = "cmdOutputs";
			const echoText = cmdInput.replace(/echo /i, "");
			echoOutput.textContent = echoText;
			outputField.appendChild(echoOutput);
			input.value = "";
			input.focus();
			return;
		} else {
			const cmdOutput = document.createElement("div");
			cmdOutput.className = "cmdOutputs";
			cmdOutput.textContent = `${prefix} ${cmdInput}`;
			outputField.appendChild(cmdOutput);
			const syntaxErrorMsg = document.createElement("div");
			syntaxErrorMsg.className = "cmdOutputs";
			syntaxErrorMsg.textContent =
				"Syntax Error. Correct Syntax: 'echo [Text]'";
			outputField.appendChild(syntaxErrorMsg);
			input.value = "";
			input.focus();
			return;
		}
	}
	//}
	//{ Cls command
	if (cmdInput === "CLS") {
		document.querySelectorAll(".cmdOutputs").forEach(el => el.remove());
		input.value = "";
		input.focus();
		return;
	}
	//}
	//{ Git Command
	if (cmdInput === "GIT") {
		const cmdOutput = document.createElement("div");
		cmdOutput.className = "cmdOutputs";
		cmdOutput.textContent = `${prefix} ${cmdInput}`;
		outputField.appendChild(cmdOutput);
		const loadingMsg = document.createElement("div");
		loadingMsg.className = "cmdOutputs";
		loadingMsg.textContent = "Opening Github Page...";
		outputField.appendChild(loadingMsg);
		window.open("https://github.com/rcfaro211", "_blank");
		input.value = "";
		input.focus();
		return;
	}
	//}
	//{ LS command
	if (cmdInput === "LS") {
		const cmdOutput = document.createElement("div");
		cmdOutput.className = "cmdOutputs";
		cmdOutput.textContent = `${prefix} ${cmdInput}`;
		outputField.appendChild(cmdOutput);
		const directorys = document.createElement("div");
		directorys.textContent = directory_List;
		directorys.className = "cmdOutputs";
		outputField.appendChild(directorys);
		input.value = "";
		input.focus();
		return;
	}
	//}
	//{ Project command
	if (cmdInput === "PROJECTS -H" || cmdInput === "PROJECTS") {
		const cmdOutput = document.createElement("div");
		cmdOutput.className = "cmdOutputs";
		cmdOutput.textContent = `${prefix} ${cmdInput}`;
		outputField.appendChild(cmdOutput);
		const projectHelp = document.createElement("div");
		projectHelp.className = "cmdOutputs";
		projectHelp.textContent = project_help;
		outputField.appendChild(projectHelp);
		input.value = "";
		input.focus();
		return;
	}
	if (cmdInput === "PROJECTS -L") {
		const cmdOutput = document.createElement("div");
		cmdOutput.className = "cmdOutputs";
		cmdOutput.textContent = `${prefix} ${cmdInput}`;
		outputField.appendChild(cmdOutput);
		const projectList = document.createElement("div");
		projectList.className = "cmdOutputs";
		projectList.textContent = `${project_List}`;
		outputField.appendChild(projectList);
		input.value = "";
		input.focus();
		return;
	}
	if (indexMatching) {
		const index = Number(indexMatching[1]) - 1;
		if (index >= 0 && index < PROJECTLIST.length) {
			if (index === 0) {
				const cmdOutput = document.createElement("div");
				cmdOutput.className = "cmdOutputs";
				cmdOutput.textContent = `${prefix} ${cmdInput}`;
				outputField.appendChild(cmdOutput);
				const project1 = document.createElement("div");
				project1.className = "cmdOutputs";
				project1.textContent = `Opening ${PROJECTLISTSTR[0]}`;
				outputField.appendChild(project1);
				window.open(
					"https://github.com/rcfaro211/TerminalPortfolio",
					"_blank",
				);
				input.value = "";
				input.focus();
				return;
			} else if (index === 1) {
				const cmdOutput = document.createElement("div");
				cmdOutput.className = "cmdOutputs";
				cmdOutput.textContent = `${prefix} ${cmdInput}`;
				outputField.appendChild(cmdOutput);
				const project2 = document.createElement("div");
				project2.className = "cmdOutputs";
				project2.textContent = `Opening ${PROJECTLISTSTR[1]}`;
				outputField.appendChild(project2);
				window.open(
					"https://github.com/rcfaro211/ToolBar",
					"_blank",
				);
				input.value = "";
				input.focus();
				return;
			}
		}
	}
	//}
	const cmdOutput = document.createElement("div");
	cmdOutput.className = "cmdOutputs";
	cmdOutput.textContent = `${prefix} ${cmdInput}`;
	outputField.appendChild(cmdOutput);
	input.value = "";
	input.focus();
});

