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

    createTodo(name, desc, due, prio){
        let todo = new Todo(name, desc, due, prio);
        this.todos.push(todo);
    }

    deleteTodo(input_name){
        let index = this.todos.map((e)=>{return e.name;}).indexOf(input_name);
        this.todos.splice(index, 1);
    }

    returnTotalTodo(){
        return this.todos.length;
    }

    returnTodoToday(){
        let count = 0;
        let today = new Date();
        let today_date = format(new Date(today.getFullYear(), today.getMonth(), today.getDate()), 'yyyy-MM-dd');
        console.log(today_date);
        
        this.todos.forEach(todo=>{
            if(todo.due === today_date){
                count++;
            }
        });
        return count;
    }
}

export {Project};