const cmdField = document.getElementById("inputForm");
const COMMANDLIST = "command list here";
const outputField = document.getElementById("CmdOutputField");
cmdField.addEventListener("submit", function (event) {
	event.preventDefault();

	const input = document.getElementById("CmdInput");
	const cmdInput = input.value.trim();
	if (cmdInput === "") {
		return;
	}
	if (cmdInput === "help") {
        const cmdOutput = document.createElement("div");
        
		cmdOutput.textContent = COMMANDLIST;

        

		outputField.appendChild(cmdOutput);
		input.value = "";
		input.focus();
        return
	}
	const cmdOutput = document.createElement("div");

	cmdOutput.textContent = `PF C:\\> ${cmdInput}`;

	

	outputField.appendChild(cmdOutput);
	input.value = "";
	input.focus();
});
