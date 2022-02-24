import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
 
  constructor(private http : HttpClient , private rout : Router) { } 

  addnote(obj : any , obj2 : any)
  {  

    if(obj === "" && obj2 === "")
    {
      return;
    } 
    else
    { 
      let final = {title : obj2 , body : obj}
      this.http.post("http://localhost:8000/api/notes", final)
      .subscribe((data:any)=> this.rout.navigate(["/"]) ) 
    }
    
  }

  ngOnInit(): void {
  }

}
