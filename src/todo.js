class Todo{
    constructor(name, desc = "", due = "", prio = ""){
        this.name = name;
        this.desc = desc;
        this.due = due;
        this.prio = prio;
        this.completed = false;
    };

    changeName(name){
        this.name = name;
    }
    changeDesc(desc){
        this.desc = desc;
    }
    changeDue(due){
        this.due = due;
    }
    changePrio(prio){
        this.prio = prio;
    }
    taskCompleted(){
        this.completed = true;
    }

    returnName(){
        return this.name;
    }
    returnDesc(){
        return this.desc;
    }
    returnDue(){
        return this.due;
    }
    returnPrio(){
        return this.prio;
    }

    printTodo(){
        let content_display = document.querySelector("#content_display");
        let todo = document.createElement("span");
        let todo_prio = document.createElement("div");
        if(this.prio === "low"){
            todo_prio.style.backgroundColor = "Green";
        } else if(this.prio === "medium"){
            todo_prio.style.backgroundColor = "Yellow";
        }else if(this.prio === "high"){
            todo_prio.style.backgroundColor = "Red";
        } else {
            todo_prio.style.backgroundColor = "transparent";
        }
        let todo_name = document.createElement("p");
        todo_name.textContent = this.name;
        let todo_due = document.createElement("p");
        if(this.due != ""){
            todo_due.textContent = this.due;
        } else {
            todo_due.textContent = "No Due Date Set";
        }
        let todo_desc = document.createElement("span");
        if(this.desc != ""){
            todo_desc.textContent = this.desc;
        }
        let todo_delete = document.createElement("button");
        todo_delete.classList.add("delete_task");
        let todo_edit = document.createElement("button");
        todo_edit.classList.add("edit_task");

        todo.appendChild(todo_prio);
        todo.appendChild(todo_name);
        todo.appendChild(todo_desc);
        todo.appendChild(todo_delete);
        todo.appendChild(todo_edit);

        todo.setAttribute("data_todo_id", this.name);

        content_display.appendChild(todo);
    }

    removeTodo(){
        let todo_list = document.querySelector("#task_list");
        let todo = document.querySelector(`[data-todo-id="${this.name}"]`);
        todo_list.removeChild(todo);
    }

}

export {Todo};