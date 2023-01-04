import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
  @Input() messageFromParent: any = [];//Message From Parent

  //Message To Parent
  enter(event: any, value: any) {
    if (event.keyCode === 13) {
      this.sendMessage(value);
    }
  }

  @Output() newMessage = new EventEmitter<string>();
  message: any;
  messageToParent: any = [];//To Display Sent message
  sendMessage(value: string) {
    this.newMessage.emit(value);

    //Below code is to Display the messages sent to the parent in this child component
    this.message = {
      message: value
    }
    this.messageToParent.push(this.message);
  }

}
