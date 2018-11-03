import { remote } from "electron";
import url from "url";
import path from "path";

document.body.addEventListener("click", (event) => {
	if (event.target.dataset.section) {
		handleSectionTrigger(event);
	}
});

function handleSectionTrigger(event) {
	hideAllSections();

	const sectionId = `${event.target.dataset.section}-section`;
	document.getElementById(sectionId).classList.add("is-shown");
}

function hideAllSections() {
	const sections = document.querySelectorAll(".section.is-shown");
	Array.prototype.forEach.call(sections, (section) => {
		section.classList.remove("is-shown");
	});
}

function activateDefaultSection() {
	document.getElementById("go-dashboard").click();
}

activateDefaultSection();