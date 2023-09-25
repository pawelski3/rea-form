import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nowy-form',
  templateUrl: './nowy-form.component.html',
  styleUrls: ['./nowy-form.component.css']
})
export class NowyFormComponent implements OnInit {

test="teest"


registerForm=this.fb.group({
  username:['nowyformCompo',Validators.required],
  password: ['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  roleId:[1,Validators.required]

});

isSubmitted=false;
roles=[
  {id:1,title:'developer'},
  {id:2,title:'qa'}
]



constructor (private fb:FormBuilder){}


ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe((roleId)=>{
      console.log('Send Api request and update role',roleId);
    });
}




onSubmit():void{
  console.log("submitted form",
  this.registerForm.value,
  this.registerForm.invalid
  );
  this.isSubmitted=true;
}


}
