let filelist = ["Resume.pdf", "AboutMe.txt", "Projects.zip", "AboutPage.html"];
let fileNum = -1;
let fileContent = [
	"This would be where my resume would be if I remembered where I put it",
	"This would be a page about my expirience with work, coding, etc.",
	"Projects",
	"",
];
let fcLst = new Map([
	[0, "resume"],
	[1, "aboutMe"],
	[2, "projects"],
	[3, "aboutPage"]
])
function PD_Iframe() {
	return (
		<iframe src="ProjectsPage.html" frameborder="0"></iframe>
	)
}
function AP_Iframe() {
	return (
		<iframe src="About.html" frameborder="0"></iframe>
	)
}
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
function File({ index }) {
	return (
		<div className="fileName" id={`file${index}`}>
			<button
				id={`file${index}`}
				onClick={() => fcEvent(index)}
			>
				{filelist[index]}
			</button>
		</div>
	);
}

function FileList() {
	return (
		<section>
			{filelist.map((_, index) => (
				<File key={index} index={index} />
			))}
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
					className="bottomTitle"
						onClick={() => fcEvent(3)}>
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
function fcEvent(page) {
		$(".fileContent").hide();
		$(".openPage").hide();
		$(`#${fcLst.get(page)}`).show();

	
}
const fl = ReactDOM.createRoot(document.getElementById("fileList"));
const fc = ReactDOM.createRoot(document.getElementById("fileContent"));
fc.render(<Fc />);
fl.render(<FileList />);
