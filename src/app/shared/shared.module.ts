import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { LogoutFeedbackComponent } from './logout-feedback/logout-feedback.component';



@NgModule({
  declarations: [
    NavigationBarComponent,
    DeleteItemComponent,
    LogoutFeedbackComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule,
    NavigationBarComponent, 
    LogoutFeedbackComponent,
    DeleteItemComponent
  ],
})
export class SharedModule {}
