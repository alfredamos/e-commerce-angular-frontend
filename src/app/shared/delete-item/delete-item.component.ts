import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  @Input() deleteMessage = "";
  @Input() deleteTitle = "";
  @Input() submitButton = "";
  @Input() cancelButton = "";
  @Output() onDeleteSubmit = new EventEmitter<boolean>();

  constructor() { }

  deleteItem(value: boolean){
    this.onDeleteSubmit.emit(value);
  }

}
