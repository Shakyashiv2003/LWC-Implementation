import { LightningElement, track } from 'lwc';

export default class StudentFormAndList extends LightningElement {
    name ='';

    @track students=[];
    

    nameChange(event){
        this.name = event.target.value;
    }

    addStudent() {
        this.students = [...this.students, this.name];
        this.name='';
    }

    deleteStudent(event){
        const nameToDelete = event.target.dataset.stu;
        this.students = this.students.filter(s => s !== nameToDelete);
    }

}