import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})

export class StringInterpolationComponent {
public name : string = "Tanvi Jangda";
public age = 27;

public displayDetails()
{
return "Hi, from marvellous infosystems";
}
}
