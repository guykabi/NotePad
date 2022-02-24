import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'], 
  /*animations:[
    trigger('itemanim', [
      transition('void => *',[
        style({
          height :0 , 
          opacity : 0 , 
          transform : 'scale(0.85)', 
          'margin-bottom':0 , 
          paddingTop:0 , 
          paddingBottom : 0,  
          paddingRight : 0 ,
          paddingLeft : 0
        }), 
        animate('50ms', style({
          height :'*', 
          'margin-bottom': '*' ,
          paddingTop:'*' , 
          paddingBottom : '*', 
          paddingLeft : '*', 
          paddingRight : '*'
        })), 
        animate(200)
      ])
    ])
  ] */
})
export class ShowComponent implements OnInit {
 
  sub : Subscription = new Subscription 
  sub2 : Subscription = new Subscription
  constructor(private http : HttpClient,private rout : Router) { }
 
notes : any[] = [] 
filternote : any

  @Input() 
  fromcomp : any

  todelete : any

  ngOnInit(): void { 
     this.sub =  this.http.get("http://localhost:8000/api/notes")
     .subscribe((data:any)=> this.notes = data)
        
  }    

  search(obj : any)
  {
    this.filternote = this.notes.filter(res => res.title == obj) 
    if(this.filternote != "")
    {
      this.notes = this.filternote
    } 
    else if(obj === "")
    {
      this.sub2 =  this.http.get("http://localhost:8000/api/notes")
      .subscribe((data:any)=> this.notes = data)
    }
    
  }

  delete(obj :any)
  { 
    
    this.todelete = this.notes.filter( x => x.title == obj.title)  
    this.notes.splice(this.notes.indexOf(obj),1)
  }
  
       
  

  ngOnDestroy()
  {
    this.sub.unsubscribe()
  } 

  ngOnDestroy2()
  {
    this.sub2.unsubscribe()
  }

}
