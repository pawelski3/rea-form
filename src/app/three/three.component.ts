import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  appVersion: string;

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.appVersion = this.currentRoute.snapshot.data[0].version;
  }

}
