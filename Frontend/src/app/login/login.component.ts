import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(user:any){
 
    this.apiService.loginUser(user);
    this.router.navigate(['/task']);
  }

}