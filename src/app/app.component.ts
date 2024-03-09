import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'lifecycle hooks';
  students: any;
  birthday: string | number | Date | undefined;

  constructor() {
    this.students = [
      {
          ID: 'std101', Name: 'RaKesh MODI',
          DOB: '12/8/2001', Gender: 'Male', CourseFee: 1234.56
      },
      {
          ID: 'std102', Name: 'ANURAG Mehra', 
          DOB: '10/14/2004', Gender: 'Male', CourseFee: 6666.00
      },
      {
          ID: 'std103', Name: 'priYAnka Joshi', 
          DOB: '7/24/2002', Gender: 'Female', CourseFee: 6543.15
      },
      {
          ID: 'std104', Name: 'Hina KHAN', 
          DOB: '8/19/2003', Gender: 'Female', CourseFee: 9000.50
      },
      {
          ID: 'std105', Name: 'SidHARTh KashYAP',
          DOB: '4/12/2002', Gender: 'Male', CourseFee: 9876.54
      }
    ]; 
  }
}


