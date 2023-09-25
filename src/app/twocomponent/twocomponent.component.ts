import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-twocomponent',
  templateUrl: './twocomponent.component.html',
  styleUrls: ['./twocomponent.component.css']
})
export class TwocomponentComponent implements OnInit {

  myFormModel: FormGroup;

  constructor(perForm: FormBuilder) {
    this.myFormModel = perForm.group({
      yourName: ['gf', Validators.required],
      // username:['nowyformCompo',Validators.required],
      // availability: perForm.group({
      //   start: [''],
      //   end: ['']
      // }),
      description: ['',
        // Validators.minLength(3)],
        {
          validators: [Validators.minLength(3)],
          updateOn: 'submit'
        }
      ],
      email: ['email', [Validators.required, Validators.email]]
      // emails:perForm.array([''])
    });

    this.myFormModel.get('yourName')?.valueChanges.pipe(
      debounceTime(1000)
    )
      .subscribe(
        value => console.log(value)
      );




    // this.myFormModel = new FormGroup({
    //   yourName: new FormControl('Test',Validators.required),
    //   // username:['nowyformCompo',Validators.required],
    //   availability: new FormGroup({
    //     start: new FormControl(),
    //     end: new FormControl()
    //   }),
    //   description: new FormControl('fdff'),


    //   emails:new FormArray([
    //     new FormControl()
    //   ])

    // });
  }

  onSubmit() {
    console.log("Formlurza ",
      this.myFormModel.value
    );

    if (this.myFormModel.valid) {
      console.log("Form ok");
      this.myFormModel.reset();
    }


  }

  // addEmail(){
  //   // (this.myFormModel.get('emails') as FormArray).push(new FormControl());
  //   (this.myFormModel.get('emails') as FormArray).push(new FormControl());
  // }

  reload() {
    this.myFormModel.patchValue(
      {
        yourName: 'Olga2',
        description: ['njjjj'],

      }
    )
  }

  ngOnInit(): void {
  }
}
