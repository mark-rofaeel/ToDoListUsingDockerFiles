import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private apiService:ApiService) { }
  //constructor(login: LoginComponent,register:RegisterComponent){}
  title ='Todo List with Angular';
  list:any[]=[];
  addTask(item:string) {
  this.apiService.addtask(item);
  this.list.push({id:this.list.length,name:item}) 
   console.warn(this.list); 
   console.log("Succesfully added");
  }
  removeTask(id:string) {
    this.apiService.removetask(id);
    console.warn(id) 
    this.list=this.list.filter(item=>item.id!==id);
}
}
