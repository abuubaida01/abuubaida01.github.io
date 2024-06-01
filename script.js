// script.js

// Function to dynamically add experience items
function addExperienceItem(title, company, date, description) {
  const experienceList = document.getElementById('experienceList');
  const item = document.createElement('div');
  item.classList.add('col-md-6');
  item.innerHTML = `
    <h3>${title}</h3>
    <p>${company}</p>
    <p>${date}</p>
    <p>${description}</p>
  `;
  experienceList.appendChild(item);
}

// Function to dynamically add education items
function addEducationItem(degree, university, date, description) {
  const educationList = document.getElementById('educationList');
  const item = document.createElement('div');
  item.classList.add('col-md-6');
  item.innerHTML = `
    <h3>${degree}</h3>
    <p>${university}</p>
    <p>${date}</p>
    <p>${description}</p>
  `;
  educationList.appendChild(item);
}

// Function to dynamically add project items
function addProjectItem(name, description, link) {
  const projectList = document.getElementById('projectList');
  const item = document.createElement('div');
  item.classList.add('col-md-6');
  item.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <a href="${link}">Link to project</a>
  `;
  projectList.appendChild(item);
}

// Function to dynamically add skills items
function addSkillItem(skill) {
  const skillsList = document.getElementById('skillsList');
  const item = document.createElement('li');
  item.textContent = skill;
  skillsList.appendChild(item);
}

// Function to dynamically add certificate items
function addCertificateItem(name, description, link) {
  const certificateList = document.getElementById('certificateList');
  const item = document.createElement('div');
  item.classList.add('col-md-6');
  item.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <a href="${link}">Link to certificate</a>
  `;
  certificateList.appendChild(item);
}

// Sample usage of functions (replace with your actual data)
addExperienceItem('Job Title', 'Company Name', 'Date Range', 'Description of responsibilities and achievements');
addEducationItem('Degree', 'University Name', 'Date Range', 'Description of degree');
addProjectItem('Project Name', 'Description of project', '#');
addSkillItem('Skill 1');
addCertificateItem('Certificate Name', 'Description of certificate', '#');
