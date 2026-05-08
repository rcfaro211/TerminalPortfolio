$(document).ready(function () {
    $(".icon").hover(function () {
            $(this).addClass("hover");
        }, function () {
            $(this).removeClass("hover");
        }
    );
})

const PROJECTLISTSTR = ["Terminal Style Portfolio", "CLI Toolkit (WIP)"];

let file1 = document.getElementById("file1");
let file2 = document.getElementById("file2");
let file3 = document.getElementById("file3");
let file4 = document.getElementById("file4");
let file5 = document.getElementById("file5");

file1.textContent = "Resume.pdf";
file2.textContent = "CoverLetter.pdf";
file3.textContent = PROJECTLISTSTR[0] + ".zip";
file4.textContent = PROJECTLISTSTR[1] + ".zip";
file5.textContent = "Project3.zip";

function openProjects() {
    window.open("Projects.html", "_self");
}
function openExplorer() {
    document.getElementById("explorer").style.visibility = "visible";
}
