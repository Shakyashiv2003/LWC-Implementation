import { LightningElement } from 'lwc';

export default class TaskDashboard extends LightningElement {

    tasks = [
        {id:1, name: 'Task 1', completed:false},
        {id:2, name: 'Task 2', completed:false},
        {id:3, name: 'Task 3', completed:false},
        {id:4, name: 'Task 4', completed:false}
    ];

    handleOnCompleted(event){
        this.tasks = this.tasks.map(task=> {
            if(task.id == event.detail){
                return {...task, completed:true}
            }
            return task;
        });

    }

    handleOnDeleted(event){
        this.tasks = this.tasks.filter(task=> task.id !== event.detail);
    }


    get completedCount(){
        return this.tasks.filter(t => t.completed).length ;  
    }

}