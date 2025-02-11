import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '5';
  enteredDuration: string = '10';

  //  To wire up, import 'FormsModule', include ngSubmit in html
  onSubmit() {
    console.log('Submitted');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);

    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
