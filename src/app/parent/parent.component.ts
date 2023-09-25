import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public message = "hello"
  public no = 1;
  public msg=0;

  ngOnInit(): void {
    setInterval(() => {
      this.no = ++this.no;
      if (this.no == 10) { this.no = 2 }
    }, 1000)
  }

  mgsDisplay(event) {
    this.msg = event;
  }


}
