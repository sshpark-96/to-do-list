

let project_todo = (project) => {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const add_todo = document.createElement('button');
    add_todo.textContent = "Add task";
    add_todo.id = "add_todo";
    content.appendChild(add_todo);
}


export {project_todo};