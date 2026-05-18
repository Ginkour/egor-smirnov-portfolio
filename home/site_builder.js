import {data} from "./data.js";

const m_data =
{
	script: '<script type="module" src="site_builder.js"></script>"',
	project_string: "proj_details-",
	section: {
		header: "header-section",
		education: "eductaion-section",
		skills: "skills-section",
		projects: "projects-section",
		project: "project-section",
		bio: "bio-section",
		footer: "footer-section",
	},
};

function galleryPath(localPath) {
	return data.image_gallery_path + localPath;
}
function getProjectPreview(index)
{
	if(data.projects[index].preview)
		return data.base_project_preview_path + data.projects[index].preview;
	else
		return data.base_project_preview_path + data.default_project_preview;
}
function copyText(button, text) {
	navigator.clipboard.writeText(text).then(() => {
		button.innerText = "Copied To Clipboard!";

		setTimeout(() => {
			button.innerText = text;
		}, 750);
	});
}

//==============Render Functions=====================

function renderTitle() {
	document.getElementById("page-title").innerHTML = `${data.contact.name} Portfolio`
}

function renderHeader() {
	let container = document.getElementById(m_data.section.header);
	let length = data.contact.specialities.length;
	container.className = "container-header";
	container.innerHTML = `
		<div class="header-content-wrapper">
			<div class="header-name-specialities">
				<h3>${data.contact.name}</h3>
				<h3>${data.contact.specialities.join(" / ")}</h3>
				<div class="header-links">
					<h3 class="header-link-item" title="CV"><a href="${data.contact.cv}"><i class="fa-solid fa-file"></i></a></h3>
					<h3 class="header-link-item" title="LinkedIn"><a href="${data.contact.linkedin}"><i class="fab fa-linkedin"></i></a></h3>
					<h3 class="header-link-item" title="GitHub"><a href="${data.contact.github}"><i class="fab fa-github"></i></a></h3>
				</div>
			</div>
			<div class="header-major-skills">
				<h5 class="subtitle">${data.contact.shiny_skills.join(" · ")}</h5>
			</div>
			<div class="header-navigation-panel">
				<button class="home-page">Home</button>
				<div class="projects-menu">
					<button class="projects">Projects ▼</button>
				  <ul class="dropdown-list">${data.projects.map((project, index) => `<li><a onclick="navigateToProject(${index})">${project.title}</a></li>`).join("")}</ul>
				</div>
			</div>
		</div>
	`;
	
	// Setup dropdown toggle and hover
	const projectsMenu = container.querySelector('.projects-menu');
	const projectsBtn = container.querySelector('.projects');
	const dropdownList = container.querySelector('.dropdown-list');
	const homeBtn = container.querySelector('.home-page');
	
	if (projectsBtn && dropdownList) {
		projectsBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			dropdownList.classList.toggle('show');
		});
		
		projectsMenu.addEventListener('mouseenter', () => {
			dropdownList.classList.add('show');
		});
		
		projectsMenu.addEventListener('mouseleave', () => {
			dropdownList.classList.remove('show');
		});
		
		document.addEventListener('click', () => {
			dropdownList.classList.remove('show');
		});
	}
	
	if (homeBtn) {
		homeBtn.addEventListener('click', () => {
			window.location.hash = '';
			handleUrlRouting();
		});
	}
}

function renderEducation() {
	const education = data.education;

	document.getElementById(m_data.section.education).innerHTML = `
		<h2>Education</h2>
		<p><strong>${education.degree}</strong></p>
		<p>${education.classification}</p>
		<p class="header-link-item"><a href="${education.university_link}"><i class="fa-solid fa-link"></i> ${education.university}</a></p>
	`;
}

function renderSkills() {
	let container = document.getElementById(m_data.section.skills);
	
	let html = "<h2>Skills</h2>";
	for (let category in data.skills) {
		html += `<p><strong>${category}:</strong> ${data.skills[category].join(", ")}</p>`;
	}

	container.innerHTML = html;
}

function renderProjectTiles() {
	const container = document.getElementById(m_data.section.projects);
	container.innerHTML = "<h2>Projects</h2>";
	container.className = "container-project-previews";

	const projectsDiv = document.createElement("div")
	projectsDiv.className = "project-style";
	projectsDiv.index = "projects";
	container.appendChild(projectsDiv);

	data.projects.forEach((proj, index) => {
		const div = document.createElement("div");

		let previewVisible = proj.preview ? proj.preview.length > 0 : false;
		div.className = "project-preview-tile";
		div.addEventListener("click", () => navigateToProject(index));
		div.innerHTML = `
			<div class="project-tile-preview-img">
				<img src="${getProjectPreview(index)}">
			</div>
			<div>
				<h3>${proj.title}</h3>
				<div class="project-technologies">${proj.tech.join(" · ")}</div>
				${proj.timeframe ? `<h4 class="project-timeframe">${proj.timeframe}</h4>` : ""}
				<p>${proj.summary}</p>      
			</div>
		`;

		projectsDiv.appendChild(div);
	});
}

function renderProject(index)
{
	const proj = data.projects[index];
	const container = document.getElementById(m_data.section.projects);
	container.innerHTML = `
		<h2>${proj.title}</h2>
		${proj.timeframe ? `<h4 class="project-timeframe">${proj.timeframe}</h4>` : ""}
		<p>${proj.summary}</p>
	`;

	const projectsDiv = document.createElement("div")
	projectsDiv.className = "project-style";
	projectsDiv.index = "projects";
	container.appendChild(projectsDiv);
	const div = document.createElement("div");

	let previewVisible = proj.preview ? proj.preview.length > 0 : false;
	let gallerySize = proj.gallery ? proj.gallery.length : 0;

	let constructedVideo = `
	${proj.links.video ? `
		<div class="video-wrapper">
			<iframe class="video-frame" src="${data.video_hosting_link}${proj.links.video}?${data.player_arguments}" allowfullscreen></iframe>
		</div>` :
	""}`;

	div.className = "project-details-page";
	div.innerHTML = `
		<div class="project-technologies">${proj.tech.join(" · ")}</div>        
		<div class="project-details-page" id="proj_details-${index}">
			${gallerySize > 0 ? `<div class="gallery-wrapper"><div class="horizontal-gallery">${proj.gallery.map(image => `<img src="${galleryPath(image)}">`).join("")}</div></div>` : ""}
			${proj.description_paragraphs ? `<h4>Details</h4>` + proj.description_paragraphs.map(b => `<pclass="project-desc-paragraph">${b}</p>`).join("") : ""}
			${proj.highlights && proj.highlights.length > 0 ? `<h4>Highlights</h4><ul>${proj.highlights.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
			${proj.challenges && proj.challenges.length > 0  ? `<h4>Challenges</h4><ul>${proj.challenges.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
			${proj.contributions && proj.contributions.length > 0  ? `<h4>Contribution</h4><ul>${proj.contributions.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
			<div class="links">
				${proj.links.github ? `<a href="${proj.links.github}" target="_blank"><i class="fab fa-github"></i> Repository</a>` :""}
				${proj.links.source_code ? `<a href="${proj.links.source_code}" target="_blank"><i class="fab fa-google-drive"></i> Source Code</a>` : ""}
				${proj.links.executable ? `<a href="${proj.links.executable}" target="_blank"><i class="fab fa-google-drive"></i> Playable Demo</a>` : ""}
				${proj.links.presentation ? `<a href="${proj.links.presentation}" target="_blank"><i class="fa-solid fa-file-powerpoint"></i> Presentation</a>` : ""}
				${constructedVideo}
			</div>
		</div>
	`;

	projectsDiv.appendChild(div);
}

function renderBiography()
{
	var bioSection = document.getElementById(m_data.section.bio);
	bioSection.innerHTML = `
		<h2>About Me</h2>
		${data.about.map(p => `<p>${p}</p>`).join("")}
	`;
}

function renderFooter() {

	let projSection = document.getElementById(m_data.section.projects);
	let projectsWidth = projSection ? projSection.offsetWidth : 0;

	const section = document.getElementById(m_data.section.footer);

	let style = "";
	if(projectsWidth > 0)
	{
		style = ` style="
			width: ${projectsWidth}px;
			max-width: ${projectsWidth}px;
			box-sizing: border-box;
		"`;
	}
	section.className = "container-footer";
	section.innerHTML = `
		<div class="contact-info"${style}>
			<h2>Contact Info</h2>
			<div class="contact-info-links">
				<h4><a href="${data.contact.linkedin}" target="_blank" class="footer-links"><i class="fab fa-linkedin"></i> LinkedIn</a></h4>
				<h4><a href="${data.contact.github}" target="_blank" class="footer-links"><i class="fab fa-github"></i> GitHub</a></h4>
			</div>
			<div>
				<h4>E-mail: <a href="mailto:${data.contact.email}" class="footer-links">${data.contact.email}</a></h4> 
				<h4>Phone-Number: 
					<button class="footer-link copy-button", onclick="copyText(this, '${data.contact.phone}')">
						${data.contact.phone}
					</button>
				</h4>
			</div>
			<div class="contact-info-copyright">
				<h3>${data.contact.name} &copy; <span>${new Date().getFullYear().toString()}</span></h3>
				<h3>${data.contact.location}</h3>
			</div>
		</div>
	`;
}

window.navigateToProject = function(id) {
	let newUrl = "";
  if(window.location.hash.substring(1) != null) {
		let baseUrl = window.location.href.split('#')[0];
		console.log("Hash exists: ", window.location.hash.substring(1), "Using different URL-Base:", baseUrl);
  	newUrl = `${baseUrl}#subpage?project=${id}`;
	}
	else {
  	newUrl = `${window.location}#subpage?project=${id}`;
	}
  window.history.pushState({project:id}, '', newUrl);
  handleUrlRouting(); 
};

window.addEventListener('popstate', () => {
  handleUrlRouting(); 
});

// export functions
window.copyText = copyText;

// --- Init ---

function buildMainBody()
{
	document.body.innerHTML = `
    <header class="container" id="${m_data.section.header}"></header>
    <section class="container" id="${m_data.section.bio}"></section>
    <section class="container" id="${m_data.section.education}"></section>
    <section class="container" id="${m_data.section.skills}"></section>
    <section class="container" id="${m_data.section.projects}"></section>
    <section class="container" id="${m_data.section.footer}"></section>
	`;
}

function buildProjectBody()
{
	document.body.innerHTML = `
    <header class="container" id="${m_data.section.header}"></header>
    <section class="container" id="${m_data.section.projects}"></section>
    <section class="container" id="${m_data.section.footer}"></section>
	`;
}

function renderPage(renderBodyCallback)
{
	renderTitle();
	renderHeader();
	renderBodyCallback();
	renderFooter();
}

function handleUrlRouting() {
  const argsStr = window.location.hash.substring(1);

  const split = argsStr.split('?');
	const request = split[0];
	const args = split[1];
  const urlParams = new URLSearchParams(args);
  const projectId = urlParams.get('project');

  console.log("Path:", args);
  console.log("Url Params:", urlParams);
  console.log("Project Id:", projectId);
	let projectIsValid = projectId < data.projects.length;
  if (request === 'subpage' && projectId) {
    console.log("Loading project view for ID:", projectId);
		buildProjectBody();
    renderPage(
			() => {
			renderHeader();
			renderProject(projectId);
		});
		window.scrollTo(0, 0);
  } else if(projectIsValid) {
    console.log("Loading home page");
		buildMainBody();
    renderPage(
			() => {
			renderSkills();
			renderBiography();
			renderEducation();
			renderProjectTiles();
		});
  }
	else {
    console.log("Loading missing page");
		buildProjectBody();
    renderPage(
			() => {
				renderMissingPage();
		});
	}
}

window.addEventListener('DOMContentLoaded', handleUrlRouting);