let filelist = ["Resume.pdf", "AboutMe.txt", "Projects.zip", "AboutPage.html"];
let fileNum = -1;
let fileContent = [
	"This would be where my resume would be if I remembered where I put it",
	"This would be a page about my expirience with work, coding, etc.",
	"Projects",
	"",
];
function Resume() {
	return (
		<div
			id="resume"
			className="fileContent">
			<section>{fileContent[0]}</section>
		</div>
	);
}
function AboutMe() {
	return (
		<div
			id="aboutMe"
			className="fileContent">
			<section>{fileContent[1]}</section>
		</div>
	);
}
function Projects() {
	return (
		<div
			id="projects"
			className="fileContent">
			<section>{fileContent[2]}</section>
		</div>
	);
}
function AboutPage() {
	return (
		<div
			id="aboutPage"
			className="fileContent">
			<section>{fileContent[3]}</section>
		</div>
	);
}
function File() {
	return (
		<div
			className={`fileName`}
			id={`file${(fileNum += 1)}`}>
			<span id={`file${fileNum}`}>{filelist[fileNum]}</span>
		</div>
	);
}
function FileList() {
	return (
		<section>
			<File />
			<File />
			<File />
			<File />
		</section>
	);
}
function Home() {
	return (
		<div
			id="home"
			className="openPage">
			<svg
				style={{ zIndex: 1, position: "fixed"}}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 550 560">
				<path
					fill="#150b0e"
					stroke="#150b0e"
					d="M135.5 112h314l1.5 1.5V219H346v105H240.5l-1.5-1.5V219H135.5l-1.5-1.5v-104zm105 315h104l1.5 1.5V534H240.5l-1.5-1.5v-104z"
				/>
			</svg>
			<div className="bottomText">
				<div className="bottomTitle">
					<h3>Created by Ryan Cristofaro</h3>
				</div>
				<button
					id="openAbout"
					className="bottomTitle">
					<h4>About</h4>
				</button>
			</div>
		</div>
	);
}
function Fc() {
	return (
		<div>
			<Resume />
			<AboutMe />
			<Projects />
			<AboutPage />
			<Home />
		</div>
	);
}
const fl = ReactDOM.createRoot(document.getElementById("fileList"));
const fc = ReactDOM.createRoot(document.getElementById("fileContent"));
fc.render(<Fc />);
fl.render(<FileList />);
