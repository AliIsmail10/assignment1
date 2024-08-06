import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName = '';
  userAge: number | null = null;
  userEmail = '';
  userPassword = '';

  // Method to handle form submission
  onSubmit(): void {
     if (this.userName && this.userEmail && this.userPassword && this.userAge !== null) {
      window.location.href =""
    } else {
      console.log('Please fill out all fields');
    }
  }
}
