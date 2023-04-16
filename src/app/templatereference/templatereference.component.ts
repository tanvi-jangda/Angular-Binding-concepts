import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent {
  public str="";
public getData(input:any)
{
this.str="Welcome "+this.str+" "+input;
}
}
