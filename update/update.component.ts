import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http : HttpClient, private rout : Router) { } 
  idtoupdate : any
  titletoupdate : any
  bodytoupdate : any

  updatenote(obj : string, obj2 : string )
  { 
    let final = {title : obj , body : obj2}
    this.http.put("http://localhost:8000/api/notes/" + this.idtoupdate, final)
    .subscribe((data:any)=>  this.rout.navigate(["/"]))
  }

  ngOnInit(): void {  
     
    this.idtoupdate = sessionStorage.getItem("Dataid")
    this.titletoupdate = sessionStorage.getItem("Datatitle") 
   this.bodytoupdate = sessionStorage.getItem("Databody")
   
  }

}
