let filelist = ["Resume.pdf", "AboutMe.txt", "Projects.zip", "AboutPage.html"];
let fileNum = -1;
let fileContent = [
	"This would be where my resume would be if I remembered where I put it",
	"This would be a page about my expirience with work, coding, etc.",
	"Projects",
	"",
];
function Resume() {
    return(
        <div id="resume" className="fileContent">
            <section>
                {fileContent[1]}
            </section>
        </div>
    )
}
function AboutMe() {
    return(
        <div id="aboutMe" className="fileContent">
            <section>
                {fileContent[2]}
            </section>
        </div>
    )
}
function Projects() {
    return(
        <div id="projects" className="fileContent">
            <section>
                {fileContent[3]}
            </section>
        </div>
    )
}
function AboutPage() {
    return(
        <div id="aboutPage" className="fileContent">
            <section>
                {fileContent[4]}
            </section>
        </div>
    )
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
        <div className="fileContent" id="home">
            <section>
                {fileContent[0]}
            </section>
        </div>
    )
}
function Fc() {
    return(
        <div>
            <Resume />
            <AboutMe />
            <Projects />    
            <AboutPage />  
        </div>  
    )
}
const fl = ReactDOM.createRoot(document.getElementById("fileList"));
const fc = ReactDOM.createRoot(document.getElementById("fc"))
fc.render(<Fc />)
fl.render(<FileList />);
