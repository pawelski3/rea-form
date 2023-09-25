import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ReaForm';
  title3: string = "title event"
  form: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  })
  myOffer: string = "A20";


  constructor(private fb: FormBuilder,
    private currentRoute: Router
  ) {

  }

  ngDoCheck() {
    console.log("CurrentRoute ", this.currentRoute.url)

    switch (this.currentRoute.url) {
      case "/one":
        this.title3 = 'from Event'
        break;
      case "/two":
        this.title3 = "valueChanges"
        break;
      case "/three":
        this.title3 = "silka"
        break;
      case "/four/A20":
        this.title3 = "run"
        break;
      default:
        this.title3 = "cos tamm"

    }


  }


  submit() {
    // console.log(this.form.value);
    this.form.reset();
  }

}
