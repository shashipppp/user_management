import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit  {
  
  users = [];
  load:Boolean = true;
  admin:Boolean = true;

  

  constructor(private userServive:UserService) {
    
  }



  ngOnInit() {
   
     this.userServive.getUsers().subscribe(res=>{
          this.users = res.Users;
          this.load = false;
          console.log(res);
          if(res.role){ this.admin = false}
    },(err:HttpErrorResponse)=>{ console.log('error in getting users: '+err)})
  }

 

}
