import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  registerUser(user: any)
  {
    this.http.post('http://localhost:3000/api/user',user).subscribe(res=>{
      console.log(res);
    })
  }
  loginUser(user: any){
    this.http.post('http://localhost:3000/api/userlogin',user).subscribe(res=>{
      console.log(res);
    })
  }
  public addtask(task: any){
    this.http.post('http://localhost:3000/api/task',{"title":task,"isDone":false}).subscribe(res=>{
      console.log(res);
    })
}
  public removetask(id: string){
  this.http.delete('http://localhost:3000/api/task/'+id).subscribe(res=>{
    console.log(res);
  })
}
  public gettasks(){
    this.http.get('http://localhost:3000/api/tasks').subscribe(res=>{
      console.log(res);
    })
}
}