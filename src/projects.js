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
}

export {Project};

// USE FOR GETTING TODO DUE TODAY
//let today = new Date();
// let today_date = format(new Date(today.getFullYear(), today.getMonth(), today.getDate()), 'yyyy-MM-dd');
// console.log(today_date);