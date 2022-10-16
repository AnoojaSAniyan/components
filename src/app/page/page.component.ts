import { Component, OnInit } from '@angular/core';
import { myService } from '../service/service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  title="anooja";
  btnclick(){
    //alert("hello"+this.title)
    const service = new myService();
    service.onclickbtn(this.title);
  }
}
