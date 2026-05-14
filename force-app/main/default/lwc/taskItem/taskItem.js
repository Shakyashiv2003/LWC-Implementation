import { LightningElement, api } from 'lwc';

export default class TaskItem extends LightningElement {
    @api task;


    handleCompleteTask(){
        this.dispatchEvent(new CustomEvent('complete', {detail:this.task.id}));

    }

    handleDeleteTask(){
        this.dispatchEvent(new CustomEvent('delete', {detail:this.task.id}));

    }
}