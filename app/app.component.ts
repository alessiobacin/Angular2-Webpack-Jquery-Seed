import {Component, ViewContainerRef, ViewChild}from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  <div id="item" #Item (click)="ActiveEdit()" >
  click me!
  </div>
  `
})
export class AppComponent {
    @ViewChild('Item', {read: ViewContainerRef}) Item;
    
    ActiveEdit(){
            console.log(this.Item.element.nativeElement);
            $("#item").html("Text changed!");
    }
}