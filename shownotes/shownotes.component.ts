
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shownotes',
  templateUrl: './shownotes.component.html',
  styleUrls: ['./shownotes.component.css'] 
})
export class ShownotesComponent implements OnInit {
 
  @Input() 
  fromshow : any
 
  @Output() notify : EventEmitter<string> = new EventEmitter<string>()
   

  constructor(private rout : Router , private http : HttpClient) { }

 
  

  gotoupdate()
  {  
    sessionStorage.setItem("Dataid", this.fromshow._id)
    sessionStorage.setItem("Datatitle", this.fromshow.title) 
    sessionStorage.setItem("Databody", this.fromshow.body) 

    this.rout.navigate(["/update"]) 
  } 

  deletesign(id:any)
  {
     this.http.delete("http://localhost:8000/api/notes/"+id)
     .subscribe((data:any)=>
      {  
        this.notify.emit(this.fromshow) 
        
      })
         
     
  }
  ngOnInit(): void {
  }

}
