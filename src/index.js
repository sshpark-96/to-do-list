import { Todo } from "./todo";
import { Project } from "./projects";
import { page_layout } from "./pages/page_layout";
import { project_todo } from "./pages/project_todo";

// Logic for the program here

let project_list = [];

document.addEventListener('click', (e)=>{
    // Logic for adding the Projects
    if(e.target.id === "p_add"){
        let project = new Project("New Project");
        project_list.push(project);
        project.printProject();
    } else 
    // Logic for deleting the Projects
    if(e.target.classList.contains("p_delete")){
        let grandParentNode = e.target.parentNode.parentNode;
        let index = project_list.map((e)=>{return e.name}).indexOf(grandParentNode.getAttribute("data-proj-id"));
        project_list[index].removeProject();
        project_list.splice(index, 1);
    }
    console.table(project_list);
})

















































//************** OLD ATTEMPT *******************/

// const main = document.querySelector('main');
// const new_project = document.querySelector('.project_add');
// const project_form = document.querySelector('#project_form');
// const project_name = document.querySelector('#project_name');


// let project_list = [];

// let todo_list = [];

// let createProject = (name) =>{
//   let project = new Project(name);
//   project_list.push(project);
//   return project;
// }

// let addToMain = (project) =>{
//   let proj_cont = document.createElement('div');
//   proj_cont.classList.add("proj_cont");
//   proj_cont.textContent = project.name;
//   main.appendChild(proj_cont);
//   console.log(project_list);
// }

// new_project.addEventListener('click', ()=>{
//   project_form.classList.toggle("active");
// });

// project_form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   let added_project = createProject(project_name.value);
//   addToMain(added_project);
//   project_form.reset();
//   project_form.classList.toggle("active");
// });

// document.addEventListener('click', (e)=>{
//   if(e.target.classList.contains("proj_cont")){
//     console.log(e.target.textContent);
//     project_todo(project_list.filter(item =>{
//       return item.name === e.target.textContent;
//     }));
//   }
//   else
//   if(e.target.id = "add_todo"){
//     let todo = new Todo(wow);
//   }
// })

// document.querySelectorAll('.proj_cont').forEach(cont=>{
//   cont.addEventListener('click', (e)=>{
//     console.log("Hello World");
//   });
// });