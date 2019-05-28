import { Component, OnInit,  OnChanges } from '@angular/core';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit,OnChanges {
  

  


  constructor(private fb: FormBuilder, private userService:UserService) { }

  ngOnInit() {
   
  }

  ngOnChanges(){
    
    

  }

 
}
