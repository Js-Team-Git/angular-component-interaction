import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent {
  enter(event: any, value: any) {
    if (event.keyCode === 13) {
      this.sendMessage(value);
    }
  }

  //Parent To Child
  message: any;
  messageToChild: any = [];
  sendMessage(text: any) {
    this.message = {
      message: text
    }
    this.messageToChild.push(this.message);
  }


  //Child To Parent
  messageFromChild: any = [];
  addMessage(event: any) {
    this.messageFromChild.push(event);
  }

}
