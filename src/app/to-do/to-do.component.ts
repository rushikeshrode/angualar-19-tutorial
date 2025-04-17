import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  task = "";
  taskList: {id:number, userToDo:string} [] = [{id:99, userToDo:"wake up"}, {id:100, userToDo:"breakfast"}];
  error = '';

  addTask(){
    if(this.task.length>1){
      this.taskList.push({id:this.taskList.length+1, userToDo:this.task});
      this.task='';
    }else{
      this.error = "Please add valid task...";
      setTimeout(() => {
        this.error = '';
      }, 2000)
    }
    console.log(this.taskList);
  }

  deleteTast(taskid:number){
    this.taskList = this.taskList.filter((item)=> item.id != taskid);
    console.log(this.taskList);
  }
  
}
