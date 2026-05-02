import { LightningElement } from 'lwc';

export default class TaskList extends LightningElement {
    inputValue = '';

    taskList = [];

    handleChange(event){
        this.inputValue = event.target.value;
    }

    handleTaskAdd(){
        
            this.taskList = [...this.taskList, this.inputValue];
            this.inputValue = ''; 
        
    }

    handleDeleteTask(event){
        const taskToDelete = event.target.dataset.action;
        this.taskList = this.taskList.filter(t => t != taskToDelete);
        
    }
}