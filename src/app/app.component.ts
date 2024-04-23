import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from './globalservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';
  constructor(private globalservice:GlobalserviceService){

  }
  ngOnInit(){
    this.test();
  }

  test()
  {
    this.globalservice.test().subscribe((response:any)=>{
      console.log(response)
    })
  }
}
