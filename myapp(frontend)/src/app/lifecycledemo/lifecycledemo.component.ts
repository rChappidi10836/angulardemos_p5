import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css']
})
export class LifecycledemoComponent 
  implements 
    OnInit, 
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  constructor() { 
    console.log("lifecycledemo constructor called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("lifecycledemo ngOnChanges called");
  }
  ngDoCheck(): void {
    console.log("lifecycledemo ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("lifecycledemo ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("lifecycledemo ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("lifecycledemo ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("lifecycledemo ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("lifecycledemo ngOnDestroy called");
  }

  ngOnInit(): void {
    console.log("lifecycledemo ngOnInit called");
  }

}
