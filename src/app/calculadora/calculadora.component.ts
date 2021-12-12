import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  screen: string = "";
  
  constructor() { }
  
  ngOnInit(): void {
    console.log("Calculadora iniciada.");
  }

  keypress(event: Event): void {
    if ((<HTMLButtonElement> event.target).value == "equal") {
      this.screen = eval(this.screen);
    } else if ((<HTMLButtonElement> event.target).value == "clear") {
      this.screen = "";
    } else {
      this.screen += (<HTMLButtonElement> event.target).value;
    }
  }

}
