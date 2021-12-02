import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title = 'Simple Calculator App';

  public num1: number;
  public num2: number;
  public num3: number;


  add() {
    this.num3 = this.num1 + this.num2;
  }

  sub() {
    this.num3 = this.num1 - this.num2;
  }

  mul() {
    this.num3 = this.num1 * this.num2;
  }

  devi() {
    this.num3 = this.num1 / this.num2;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
