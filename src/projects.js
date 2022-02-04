import { Todo } from "./todo";
import { compareAsc, format } from 'date-fns';

class Project{
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    changeName(name){
        this.name = name;
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(input_name){
        let index = this.todos.map((e)=>{return e.name;}).indexOf(input_name);
        this.todos.splice(index, 1);
    }

    returnTodoRemaining(){
        let count = 0;
        
        
        this.todos.forEach(todo=>{
            if(!todo.completed){
                count++;
            }
        });
        return count;
    }

    displayAllTodo(){
        let content_name = document.querySelector("#content_name");
        content_name.textContent = this.name;
        this.todos.forEach(todo=>{
            todo.printTodo();
        });
    }

    printProject(){
        let projects_list = document.querySelector("#projects_list");
        let project = document.createElement("span");
        project.classList.add("proj_item");
        let project_name = document.createElement('p');
        project_name.textContent = this.name;
        let project_delete = document.createElement("span");
        project_delete.innerHTML = '<svg class="p_delete" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

        project.appendChild(project_name);
        project.appendChild(project_delete);

        project.setAttribute("data-proj-id", this.name);

        projects_list.appendChild(project);
    }

    removeProject(){
        let projects_list = document.querySelector("#projects_list");
        let project = document.querySelector(`[data-proj-id="${this.name}"]`);
        projects_list.removeChild(project);
    }
}

export {Project};

// USE FOR GETTING TODO DUE TODAY
//let today = new Date();
// let today_date = format(new Date(today.getFullYear(), today.getMonth(), today.getDate()), 'yyyy-MM-dd');
// console.log(today_date);