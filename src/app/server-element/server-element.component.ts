import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  AfterViewChecked, OnDestroy {
  @Input('alias') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called');
     console.log(changes)
   }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked')

  }
  ngAfterViewInit () {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked () {
    console.log('AfterViewChecked')

  }

  ngOnDestroy () {
    console.log('ngOnDestroy')

  }


}
