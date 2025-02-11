
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


  //  To wire up, import 'FormsModule', include ngSubmit in html
  onSubmit(){
    console.log('Submitted');
  }
}
