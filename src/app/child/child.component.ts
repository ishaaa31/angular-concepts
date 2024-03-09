import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  counter = 0;
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.message = 'Child Component Initialized';
    console.log("Child Constructor is called");
    console.log("Child OnInit is called");

    setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log("Child OnDestroy is called");
  }

}