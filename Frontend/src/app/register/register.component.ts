import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(user: any){
    this.apiService.registerUser(user);
    this.router.navigate(['/login']);
  }

}
