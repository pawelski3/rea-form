import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() public myInput;
@Output() freezedNumber=new EventEmitter<number>();



onEmit(){
  this.freezedNumber.emit(this.myInput.no)//https://www.youtube.com/watch?v=o5dptxsqpuI
  // console.log("onEmit",this.myInput.no)
}

}
