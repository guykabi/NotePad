import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private rout : Router) { } 

  gotoadd()
  {
    this.rout.navigate(["/add"])
  } 
  gotoupdate()
  {
    this.rout.navigate(["/update"])
  }  
  gotoshow(){
    this.rout.navigate(["/"])
  }


  ngOnInit(): void {
  }

}
