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

}

export {Todo};