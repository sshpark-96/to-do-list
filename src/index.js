import { Todo } from "./todo";
import { Project } from "./projects";
import { pageCreation } from "./pages/show_projects";


const content = document.querySelector('#content');
const new_project = document.querySelector('.project_add');
const project_form = document.querySelector('#project_form');
const project_name = document.querySelector('#project_name');


let project_list = [];

let createProject = (name) =>{
  let project = new Project(name);
  project_list.push(project);
  return project;
}

let addToMain = (project) =>{
  let proj_cont = document.createElement('div');
  proj_cont.classList.add("proj_cont");
  proj_cont.textContent = project.name;
  content.appendChild(proj_cont);
  console.log(project_list);
}

new_project.addEventListener('click', ()=>{
  if(project_form.classList.contains("active")){
    project_form.classList.remove("active");
  } else {
    project_form.classList.add("active");
  }
});

project_form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let added_project = createProject(project_name.value);
  addToMain(added_project);
});

document.querySelectorAll('.proj_cont').forEach(cont=>{
  cont.addEventListener('click', ()=>{
    console.log("Hello World");
  });
});