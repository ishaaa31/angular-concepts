import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  isChild = true;
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.message = 'Welcome to the Parent Component!';
    console.log("Parent OnInit is called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent OnChanges is called");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("Parent DoCheck is called");
  }

  ngAfterContentInit(): void {
    console.log("Parent AfterContentInit is called");
  }

  ngAfterContentChecked(): void {
    console.log("Parent AfterContentChecked is called");
  }

  ngAfterViewInit(): void {
    console.log("Parent AfterViewInit is called");
  }

  ngAfterViewChecked(): void {
    console.log("Parent AfterViewChecked is called");
  }

  ngOnDestroy(): void {
    console.log("Parent OnDestroy is called");
  }

  toggleChild(): void {
    this.isChild = !this.isChild;
  }
}
