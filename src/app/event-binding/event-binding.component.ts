import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  public data="";

  //this method will be invoked when button is clicked
  public btnSubmit()
  {
   this.data="Submit button clicked";
   console.log("From event binding - submit button clicked...");
  //  alert("Submit button clicked");
  }

  public btnSubmitNew(value:any)
  {
  console.log(value);
  }
}
